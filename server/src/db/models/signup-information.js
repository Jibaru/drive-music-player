module.exports = (sequelize, DataTypes) => {
  const SignupInformation = sequelize.define(
    "SignupInformation",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      pin: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
    },
    {
      tableName: "SignupInformations",
      timestamps: false,
    }
  );

  return SignupInformation;
};
