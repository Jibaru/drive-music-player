"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const PlaylistSong = sequelize.define(
    "PlaylistSong",
    {},
    {
      tableName: "PlaylistsSongs",
      timestamps: false,
    }
  );

  PlaylistSong.associate = function (models) {
    PlaylistSong.belongsTo(models.Playlist, {
      foreignKey: "playlistId",
      as: "playlist",
    });
    PlaylistSong.belongsTo(models.Song, {
      foreignKey: "songId",
      as: "song",
    });
  };

  return PlaylistSong;
};
