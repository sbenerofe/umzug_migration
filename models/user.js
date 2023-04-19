module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: {
        args: true,
        msg: 'That username is already in use.',
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Must be an EMAIL ##CUSTOM MESSAGE##',
        },
      },
      unique: {
        args: true,
        msg: 'That email address is already in use.',
      },
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return User;
};
