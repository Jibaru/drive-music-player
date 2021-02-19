module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Playlists",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        userId: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: "Users",
            },
            key: "id",
          },
          allowNull: false,
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.fn("now"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.fn("now"),
        },
      },
      {
        uniqueKeys: {
          uniqueIndex: {
            customIndex: true,
            fields: ["name", "userId"],
          },
        },
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Playlists");
  },
};
