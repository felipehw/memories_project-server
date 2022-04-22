import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts';

const MONGODB_USERNAME = 'felipehw';
const MONGODB_PASSWORD = '389rfhj93';
const MONGODB_CONNECTION_URL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@cluster0.dwls5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({
    limit: '30mb',
    //extended: true, // the tutorial contains this, but it is not a valid key
}));
app.use(bodyParser.urlencoded({
    limit: '30mb',
    extended: true, // true is the default value. See more at <https://www.npmjs.com/package/body-parser>
}));
app.use(cors()); // Enable All CORS Requests

mongoose.connect(MONGODB_CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        });
    })
    .catch((error) => console.error(error.message || error));
