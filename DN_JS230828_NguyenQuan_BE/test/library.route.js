const express = require("express");
const router = express.Router();
const {
    getAllStudents,
    createStudent,
    editStudentById,
    deleteStudentById,
    getAllBooks,
    createBook,
    editBookById,
    deleteBookById
} = require("../controller/library.controller");

// Định nghĩa các routes cho học sinh
router.get("/students", async (req, res) => {
    try {
        const students = await getAllStudents();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/students", async (req, res) => {
    try {
        const newStudent = await createStudent(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put("/students/:id", async (req, res) => {
    const studentId = req.params.id;
    try {
        await editStudentById(studentId, req.body);
        res.status(200).json({ message: "Student updated successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/students/:id", async (req, res) => {
    const studentId = req.params.id;
    try {
        await deleteStudentById(studentId);
        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

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





