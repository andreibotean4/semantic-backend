import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'

import { errorHandler } from './middlewares/error.middleware';

import jokeRoutes from './routes/joke-routes';
import categoryRoutes from './routes/category-routes';

import { MONGO_URL, PORT } from './config/app.config';

const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/', function(req, res){
    res.send("Welcome to JokesApp Website");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/joke', jokeRoutes);
app.use('/category', categoryRoutes);

app.use(errorHandler);

mongoose.connect(MONGO_URL, { useNewUrlParser: true })
    .then(() => {
        console.log('DB connection successful');
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Running on port ${PORT}`);
        });
    })
    .catch(console.log);