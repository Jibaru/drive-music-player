const getDriveFilesMetadata = require("../../services/external/get-drive-files-metadata.service");
const updateOrCreateSongsFromMetadata = require("../../services/songs/update-or-create-songs-from-metadata.service");
const updateUserRootDriveKeyService = require("../../services/users/update-user-root-drive-key.service");

// PUT: /users/:userId/root-drive-key
// body: rootDriveKey
const updateUserRootDriveKeyController = async (req, res) => {
  const { userId } = req.params;
  const { rootDriveKey } = req.body;

  try {
    await updateUserRootDriveKeyService({
      userId,
      newRootDriveKey: rootDriveKey,
    });

    const songsMetadata = await getDriveFilesMetadata({
      driveFolderKey: rootDriveKey,
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

module.exports = updateUserRootDriveKeyController;
