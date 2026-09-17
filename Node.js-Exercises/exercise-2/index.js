const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const bookRoutes = require('./routes/books');

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json());

app.use('/books', bookRoutes)

mongoose 
    .connect(process.env.MONGO_URI)
    .then(()=> 
        console.log('✅MongoDB Connected'))
    .catch((error)=> console.log('❌MongoDB Connection error', error))
    
app.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})    

// bu dosyanin gorevi =Express + MongoDB bağlantısı

// ozet=Route karar verir → Controller işlemi yapar → Model MongoDB ile konuşur.
    
    