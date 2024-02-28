const express = require('express');
const router = express.Router();
const bookController = require('../controller/li1.controller');

// Route GET /api/v1/books: Trả về danh sách tất cả các books
//http://localhost:8081/api/v1/books
router.get('/books', async (req, res) => {
    try {
        const books = await bookController.getAllBooks();
        res.status(200).json({ status: 'success', data: books });
    } catch (err) {
        res.status(500).json({ status: 'fail', message: err.message });
    }
});

// Route tìm kiếm book theo tên
//http://localhost:8081/api/v1/books/search?name=Harry%
router.get('/books/search', async (req, res) => {
    const searchTerm = req.query.name;
    try {
        const books = await bookController.searchBooksByName(searchTerm);
        res.status(200).json({ status: 'success', data: books });
    } catch (err) {
        res.status(500).json({ status: 'fail', message: err.message });
    }
});

// Route GET /api/v1/books/:id: Trả về thông tin một record của book
//http://localhost:8081/api/v1/books/2
router.get('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await bookController.getBookById(bookId);
        res.status(200).json({ status: 'success', data: book });
    } catch (err) {
        res.status(500).json({ status: 'fail', message: err.message });
    }
});

// Route POST /api/v1/books: Thêm một book mới vào database
http://localhost:8081/api/v1/books
// {
//     "name":  "Harry Potter 3",
//     "description": " J.K. Rowling",
//     "price": 2323
// }

router.post('/books', async (req, res) => {
    const bookData = req.body;
    try {
        const newBook = await bookController.createBook(bookData);
        res.status(201).json({ status: 'success', data: newBook });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err });
    }
});

// Route PUT /api/v1/books/:id: Cập nhật thông tin một book cụ thể dựa trên id
//http://localhost:8081/api/v1/books/5
router.put('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    const bookData = req.body;
    try {
        const updatedBook = await bookController.updateBookById(bookId, bookData);
        res.status(200).json({ status: 'success', data: updatedBook });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err });
    }
});

// Route DELETE /api/v1/book/:id: Xóa một book cụ thể của người dùng dựa trên id
//http://localhost:8081/api/v1/books/1
router.delete('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        await bookController.deleteBookById(bookId);
        res.status(204).json({ status: 'success', data: null });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err });
    }
});

module.exports = router;
