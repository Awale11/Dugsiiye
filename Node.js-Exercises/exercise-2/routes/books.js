const express = require('express');
const { createBook, getBooks, getBookInfo, updateBook, deleteBook, searchBook } = require('../controllers/booksController');
const router = express.Router();

// for POST + validation
router.post('/', createBook);
// for GET
router.get('/', getBooks);
// for search a book
router.get('/search', searchBook)
// for GET reade one
router.get('/read/:id', getBookInfo);
// PUT=update
router.put('/update/:id', updateBook);
// DELETE= for delete a book
router.delete('/delete/:id', deleteBook)

module.exports = router;

// bu dosyanin gorevi="hangi URL hangi controller?"