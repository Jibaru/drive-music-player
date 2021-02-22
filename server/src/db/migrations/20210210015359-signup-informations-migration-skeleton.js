module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("SignupInformations", {
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      pin: {
        type: Sequelize.DataTypes.STRING(6),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, _) => {
    return queryInterface.dropTable("SignupInformations");
  },
};
