const Book = require('../models/Book')

//POST= create + validation
exports.createBook = async(req, res)=> {

    const { title, author } = req.body;

    if(!title || !author ) {
        return res.status(400).json({
            message: 'Title and author are required'
        });
    }
    // document oluşturur
    const book = new Book(req.body);
    // document'ı MongoDB'ye kaydeder
    const savedBook = await book.save();
    res.status(201).json(savedBook)
};

// GET= read all + filter

exports.getBooks = async (req, res)=> {

    const { year } = req.query;
    if(year) {
        const books = await Book.find({
            publishedYear: Number(year)
        })
        return res.json(books)
    }
    const books = await Book.find();
    res.json(books)
}

// Bonus = SEARCH a book
exports.searchBook = async(req, res)=> {
    const genre = req.query.genre;
    const books = await Book.find({ genre })

    res.json(books)
}

// GET= read one
exports.getBookInfo = async(req, res)=> {
    const books = await Book.findById(req.params.id)

    if(!books) return res.status(404).send('Book not found');
    res.json(books)
};

// PUT=update
exports.updateBook = async(req, res)=> {
    const { id } = req.params;
    try {
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true});
         if(!updatedBook) {
            return res.status(404).send('Book not found')
         }
         res.json('updatedBook')
    } catch (error) {
        res.status(500).send('Server error')
    }
};

// DELETE= delete a book
exports.deleteBook = async(req,res)=> {
    const { id } = req.params;

    try {
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook) {
            return res.status(404).send('Book not found')
        }
        res.json(`Book with id ${id} deleted`)
    } catch (error) {
        res.status(500).send('Server error')
    }
}

// bu dosyanin gorevi="gelen veriye ne yapacağım?"
// Bonus= validation-creat'e 
// search + filter -read'a uygulayacaz