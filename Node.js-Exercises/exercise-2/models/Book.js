const mongoose = require('mongoose');

const  bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedYear: Number,
    genre: String
})

module.exports = mongoose.model('Book', bookSchema);

// comments
// bu dosyanin gorevi="verinin yapısı nasıl olacak?"

// Schema=kitaplarin yapisi yani sablon gibi
//   ↓
// "Verinin ŞEKLİ nasıl olacak?"

// Document
//   ↓
// "Gerçek VERİ ne?"

// MongoDB
//   ↓
// "Bu verileri NEREDE saklayacağım?"