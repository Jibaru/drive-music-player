const { Song } = require("../../../db/models/index");

const updateOrCreateSongsFromMetadata = async ({ songsMetadata, userId }) => {
  const allUserSongs = await Song.findAll({
    where: {
      userId,
    },
  });

  if (allUserSongs.length === 0) {
    const songs = [];
    for (let meta of songsMetadata) {
      songs.push({
        name: meta.name,
        songDriveKey: meta.songDriveKey,
        imageDriveKey: meta.imageDriveKey,
        userId: userId,
      });
    }
    await Song.bulkCreate(songs);
  } else {
    const toCreateSongs = [];
    const toUpdateSongs = [];

    for (let meta of songsMetadata) {
      const bdSong = allUserSongs.find(
        (song) => song.songDriveKey === meta.songDriveKey
      );

      if (bdSong) {
        // to UpdateList
        toUpdateSongs.push({
          name: meta.name,
          songDriveKey: meta.songDriveKey,
          imageDriveKey: meta.imageDriveKey,
          userId: bdSong.userId,
        });
      } else {
        // to CreateList
        toCreateSongs.push({
          name: meta.name,
          songDriveKey: meta.songDriveKey,
          imageDriveKey: meta.imageDriveKey,
          userId: userId,
        });
      }
    }

    if (toCreateSongs.length > 0) {
      await Song.bulkCreate(toCreateSongs);
    }

    if (toUpdateSongs.length > 0) {
      await Song.bulkCreate(toUpdateSongs, {
        updateOnDuplicate: ["name", "imageDriveKey"],
      });
    }
  }

  // Delete old rows
  const toDeleteSongIds = [];
  for (let bdSong of allUserSongs) {
    const metaSong = songsMetadata.find(
      (meta) => meta.songDriveKey === bdSong.songDriveKey
    );

    if (!metaSong) {
      toDeleteSongIds.push(bdSong.id);
    }
  }

  if (toDeleteSongIds.length > 0) {
    await Song.destroy({ where: { id: toDeleteSongIds } });
  }

  return "Data updated or created successfully";
};

module.exports = updateOrCreateSongsFromMetadata;
