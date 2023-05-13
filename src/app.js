import express from 'express';
import dbConnect from './config/dbConnect.js';
import colaboratorRouter from './routes/colaboratorRoute.js';
import cors from 'cors';

dbConnect();

const app = express();
app.use(cors());
app.use(express.json());
colaboratorRouter(app);


export default app;