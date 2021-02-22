module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING(45),
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rootDriveKey: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      role: {
        type: DataTypes.ENUM("ADMIN", "CLIENT"),
        allowNull: false,
        defaultValue: "CLIENT",
      },
    },
    {
      tableName: "Users",
      timestamps: false,
    }
  );
  User.associate = function (models) {
    User.hasMany(models.Song, {
      as: "songs",
      foreignKey: "userId",
    });

    User.hasMany(models.Playlist, {
      as: "playlists",
      foreignKey: "userId",
    });
  };
  return User;
};
