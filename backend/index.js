import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/mern_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Berhasil Konek...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log('Server Sedang Berjalan...'));