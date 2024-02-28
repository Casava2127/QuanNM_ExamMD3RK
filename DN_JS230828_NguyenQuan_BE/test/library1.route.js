const express = require("express");
const router = express.Router();
const {
    getAllBooks,
    createBook,
    editBookById,
    deleteBookById,
    createAuthor,
    getBooksByAuthor
    
} = require("../controller/library1.controller");


///////////////
// routes/authorRoutes.js
const authorController = require('../controller/library1.controller');

// Thêm một author mới vào database
router.post('/author', authorController.createAuthor); // POST: /api/v1/author -> body: {name, birthdate, nationality}

// Trả về danh sách các book theo author
router.get('/author/:id/books', authorController.getBooksByAuthor);  // GET /-/

module.exports = router;


// Định nghĩa các routes cho sách
router.get("/books", async (req, res) => {
    try {
        const books = await getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Định nghĩa route để lấy sách bằng ID
router.get("/books/:id", async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await getBookById(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post("/books", async (req, res) => {
    try {
        const newBook = await createBook(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/books/:id", async (req, res) => {
    const bookId = req.params.id;
    try {
        await editBookById(bookId, req.body);
        res.status(200).json({ message: "Book updated successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/books/:id", async (req, res) => {
    const bookId = req.params.id;
    try {
        await deleteBookById(bookId);
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;





