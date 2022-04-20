import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({
    limit: '30mb',
    //extended: true, // the tutorial contains this, but it is not a valid key
}));
app.use(bodyParser.urlencoded({
    limit: '30mb',
    extended: true, // true is the default value. See more at <https://www.npmjs.com/package/body-parser>
}));
app.use(cors()); // Enable All CORS Requests

const message: String = 'Hello :D';

console.log(message);