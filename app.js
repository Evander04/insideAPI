import express from 'express';
import UserRouter from './Routes/UserRouter';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const db = mongoose.connect('mongodb://localhost/inside');
const app = express();
const port = process.env.PORT || 3000;
var extension="/api";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(extension+"/user",UserRouter);
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});