const Sequelize = require("sequelize").Sequelize;
const UserSchema = require("./models/user_model");

const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  dialect: "postgres",
});

const initDB = async () => {
  try {
    await UserSchema.sync();
    console.log("All models were synchronized successfully.");
  } catch (e) {
    console.error("Unable to init to the database:", e);
  }
};

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await initDB();
  } catch (e) {
    console.error("Unable to connect to the database:", e);
  }
};

module.exports = {
  sequelize,
  connectDB,
};
