const fetch = require("node-fetch");

const {
  GET_FILES_URL,
} = require("../../constants/google-drive/google-drive.uri");
const {
  G_FOLDER,
  G_AUDIO,
  G_IMAGE,
} = require("../../constants/google-drive/google-drive.mimetype");

const removeExtension = (str) => str.replace(/\.[^/.]+$/, "");

const fetchData = async (
  driveFolderKey,
  allSongsFetched,
  allSongImagesFetched
) => {
  const url = `${GET_FILES_URL}?q=%22${driveFolderKey}%22%20in%20parents&key=${process.env.DRIVE_API_KEY}&pageSize=500`;
  const resp = await fetch(url);
  const jsonResp = await resp.json();

  for (let file of jsonResp.files) {
    if (file.mimeType.includes(G_AUDIO)) {
      allSongsFetched.push({
        name: removeExtension(file.name),
        songDriveKey: file.id,
      });
    } else if (file.mimeType.includes(G_IMAGE)) {
      allSongImagesFetched.push({
        name: removeExtension(file.name),
        imageDriveKey: file.id,
      });
    } else if (file.mimeType === G_FOLDER) {
      await fetchData(file.id, allSongsFetched, allSongImagesFetched);
    }
  }
};

const mergeSongsImages = (songs, images) => {
  for (let song of songs) {
    const imageFinded = images.find((image) => image.name === song.name);
    if (imageFinded) {
      song["imageDriveKey"] = imageFinded.imageDriveKey;
    }
  }
};

const getDriveFilesMetadata = async ({ driveFolderKey }) => {
  const allSongsFetched = [];
  const allSongImagesFetched = [];

  await fetchData(driveFolderKey, allSongsFetched, allSongImagesFetched);

  mergeSongsImages(allSongsFetched, allSongImagesFetched);

  return allSongsFetched;
};

module.exports = getDriveFilesMetadata;
