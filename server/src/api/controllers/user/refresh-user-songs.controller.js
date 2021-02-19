const getOneUserService = require("../../services/users/get-one-user.service");
const getDriveFilesMetadata = require("../../services/external/get-drive-files-metadata.service");
const updateOrCreateSongsFromMetadata = require("../../services/songs/update-or-create-songs-from-metadata.service");

// PUT: /api/users/:userId/songs/refresh
const refreshUserSongsController = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await getOneUserService({ userId });

    const songsMetadata = await getDriveFilesMetadata({
      driveFolderKey: user.rootDriveKey,
    });

    const message = await updateOrCreateSongsFromMetadata({
      songsMetadata,
      userId,
    });

    return res.status(200).json({
      ok: true,
      message,
    });
  } catch (error) {
    return res.status(400).json({
      ok: false,
      error: error.message,
    });
  }
};

module.exports = refreshUserSongsController;
