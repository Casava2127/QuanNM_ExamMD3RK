const connection = require("../config/db.config");

const getAllStudents = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM students", (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const createStudent = (studentData) => {
    const { name, grade, book_id, book_title } = studentData;
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO students (name, grade, book_id, book_title) VALUES (?, ?, ?, ?)", [name, grade, book_id, book_title], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const editStudentById = (id, studentData) => {
    const { name, grade, book_id, book_title } = studentData;
    return new Promise((resolve, reject) => {
        connection.query("UPDATE students SET name = ?, grade = ?, book_id = ?, book_title = ? WHERE id = ?", [name, grade, book_id, book_title, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const deleteStudentById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM students WHERE id = ?", [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const getAllBooks = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM books", (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const createBook = (bookData) => {
    const { title, author, quantity } = bookData;
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO books (title, author, quantity) VALUES (?, ?, ?)", [title, author, quantity], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const editBookById = (id, bookData) => {
    const { title, author, quantity } = bookData;
    return new Promise((resolve, reject) => {
        connection.query("UPDATE books SET title = ?, author = ?, quantity = ? WHERE id = ?", [title, author, quantity, id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const deleteBookById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM books WHERE id = ?", [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = { getAllStudents, createStudent, editStudentById, deleteStudentById, getAllBooks, createBook, editBookById, deleteBookById };
