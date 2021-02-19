module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define(
    "Playlist",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "Playlists",
      timestamps: false,
    }
  );

  Playlist.associate = function (models) {
    Playlist.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId",
    });

    Playlist.belongsToMany(models.Song, {
      through: "PlaylistSong",
      as: "songs",
    });
  };

  return Playlist;
};
