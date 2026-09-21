import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFound } from './middlewares/notFound.js';


const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes)

// notFound
app.use(notFound)
// errorHandler
app.use(errorHandler)

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> console.log('✅ MongoDB connected locally'))
    .catch((error)=> console.log('❌ Connection error', error));

    app.listen(PORT, ()=> {
        console.log(`Server is running on http://localhost:${PORT}`)
    })