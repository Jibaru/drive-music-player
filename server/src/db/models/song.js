const {
  GET_FILE_URL,
} = require("../../api/constants/google-drive/google-drive.uri");

module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      songDriveKey: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      imageDriveKey: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      timesPlayed: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      isFavorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      durationMilliseconds: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      songUrl: {
        type: new DataTypes.VIRTUAL(DataTypes.STRING),
        get() {
          return this.songDriveKey
            ? `${GET_FILE_URL}?export=download&id=${this.songDriveKey}`
            : null;
        },
      },
      imageUrl: {
        type: new DataTypes.VIRTUAL(DataTypes.STRING),
        get() {
          return this.imageDriveKey
            ? `${GET_FILE_URL}?export=view&id=${this.imageDriveKey}`
            : null;
        },
      },
    },
    {
      tableName: "Songs",
      timestamps: false,
    }
  );

  Song.associate = function (models) {
    Song.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });

    Song.belongsToMany(models.Playlist, {
      through: "PlaylistSong",
      as: "playlists",
    });
  };

  return Song;
};
