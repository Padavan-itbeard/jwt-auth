const { Sequelize, DataTypes } = require("sequelize");
const { STRING, BOOLEAN, INTEGER } = DataTypes;
const sequelize = new Sequelize("sqlite:memory:");

const UserSchema = sequelize.define("User", {
  id: { type: INTEGER, autoIncrement: true, primaryKey: true },
  email: { type: STRING, unique: true, require: true },
  password: { type: STRING, require: true },
  isActivated: { type: BOOLEAN, default: false },
  activationLink: { type: STRING },
});

module.exports = UserSchema;
