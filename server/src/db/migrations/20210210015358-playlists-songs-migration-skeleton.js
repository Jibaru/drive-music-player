module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "PlaylistsSongs",
      {
        playlistId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: "Playlists",
            },
            key: "id",
          },
          allowNull: false,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        songId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: "Songs",
            },
            key: "id",
          },
          allowNull: false,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      {
        uniqueKeys: {
          uniqueIndex: {
            customIndex: true,
            fields: ["playlistId", "songId"],
          },
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("PlaylistsSongs");
  },
};
