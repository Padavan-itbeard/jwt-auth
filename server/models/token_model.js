const { Sequelize, DataTypes } = require("sequelize");
const { STRING } = DataTypes;
const sequelize = new Sequelize("sqlite:memory:");

const TokenSchema = sequelize.define("Token", {
  user: { type: STRING, ref: "User" },
  refreshToken: { type: STRING, required: true },
});

module.exports = TokenSchema;
