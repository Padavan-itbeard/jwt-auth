require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize = require('./db');

const PORT = process.env.PORT || 5000;
const app = express();

const connectDB = () => {
    try {
        sequelize.authenticate().then(() => console.log('Connection has been established successfully.'))
    } catch (e) {
        console.error('Unable to connect to the database:', e)
    }
}

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.error(e);
    }
}

start();
connectDB();
