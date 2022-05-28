import './env';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts';

const MONGODB_CONNECTION_URL = (process.env.MONGODB_CONNECTION_URL as string);
const PORT = process.env.PORT || '5000';

const app = express();

app.use(bodyParser.json({
    limit: '30mb',
    type: ['application/json', 'application/merge-patch+json'],
    //extended: true, // the tutorial contains this, but it is not a valid key
}));
app.use(bodyParser.urlencoded({
    limit: '30mb',
    extended: true, // true is the default value. See more at <https://www.npmjs.com/package/body-parser>
}));
app.use(cors()); // Enable All CORS Requests
app.use('/posts', postRoutes);
app.all('*', (req: express.Request, res: express.Response) => { // Debug only
    console.log('Catch all route.');
    console.log(req);
    return res.status(404).send('Catch all route: 404');
});

mongoose.connect(MONGODB_CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        });
    })
    .catch((error) => console.error(error.message || error));
