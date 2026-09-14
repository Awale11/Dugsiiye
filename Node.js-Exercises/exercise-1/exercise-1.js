const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: 'Atomic Habits', author: 'Farah Geedi'},
    { id: 2, title: 'Deep Work', author: 'Halima Abdi'}
];
// ROUTES
// 1:GET route for all books
app.get('/books', (request, response)=> {
    response.json(books)
});

// 7: BONUS:Add a GET /books/search?author=James to search by author name using req.query.
app.get('/books/search', (req, res)=> {
    const author = req.query.author;

    if(!author) {
        return res.status(400).send('Author iss required')
    }
    
    const results =  books.filter(book => book.author.toLocaleLowerCase().includes(author.toLocaleLowerCase()));
    res.json(results);
})

// 2:GET a single book
app.get('/books/:id', (req, res)=> {
    const book = books.find(book => book.id == req.params.id);
    if(!book) return res.status(404).send('book not found');
    res.json(book)
});

// 6: BONUS:Add validation: Return 400 Bad Request if title or author is missing in POST.
app.post('/books', (req, res)=> {
    const bookData = req.body;
    if(!bookData.title || !bookData.author) {
        return res.status(400).send('Bad Request')
    };
    // 3:POST Add new book
    const newBook = {
        id: books.length + 1,
        title: bookData.title,
        author: bookData.author
    }
    books.push(newBook)
    res.status(201).json(newBook)

})


// 4: PUT: Update a book;s title
app.put('/books/:id', (req, res)=> {
    const book = books.find(book=> book.id == req.params.id)
    if(!book) return res.status(404).send('Book not found')
        book.title = req.body.title;
        res.json(book)
})

// 5: DELETE: Delete a book
app.delete('/books/:id', (req, res)=> {
    books = books.filter(book=> book.id != req.params.id)
    res.send(`Books ${req.params.id} deleted`)
})




app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// Comments
// GET /books/search?author=James geldiğinde:
// const author = req.query.author; "James" değerini alır
// sonra 
// books.filter(book => book.author.toLowerCase().includes(author.toLowerCase())); bütün kitapların author alanına bakıp James geçenleri bulur.
