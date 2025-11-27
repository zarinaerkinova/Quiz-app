import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import questionRoutes from './routes/questionRoute.js';

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/', questionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})