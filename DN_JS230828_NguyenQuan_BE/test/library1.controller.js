const connection = require("../config/db.config");
// const getAllBooks = () => {
//     return new Promise((resolve, reject) => {
//         connection.query("SELECT * FROM books", (error, results) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };

// const createBook = (bookData) => {
//     const { title, author, quantity } = bookData;
//     return new Promise((resolve, reject) => {
//         connection.query("INSERT INTO books (title, author, quantity) VALUES (?, ?, ?)", [title, author, quantity], (error, results) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };

// const editBookById = (id, bookData) => {
//     const { title, author, quantity } = bookData;
//     return new Promise((resolve, reject) => {
//         connection.query("UPDATE books SET title = ?, author = ?, quantity = ? WHERE id = ?", [title, author, quantity, id], (error, results) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };

// const deleteBookById = (id) => {
//     return new Promise((resolve, reject) => {
//         connection.query("DELETE FROM books WHERE id = ?", [id], (error, results) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };
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
    const { title, description, price, created_at, updated_at } = bookData;
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO books (title, description, price, created_at, updated_at) VALUES (?, ?, ?, ?, ?)", [title, description, price, created_at, updated_at], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const editBookById = (id, bookData) => {
    const { title, description, price, created_at, updated_at } = bookData;
    return new Promise((resolve, reject) => {
        connection.query("UPDATE books SET title = ?, description = ?, price = ?, created_at = ?, updated_at = ? WHERE id = ?", [title, description, price, created_at, updated_at, id], (error, results) => {
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


///////////////
// controllers/authorController.js


const createAuthor = (authorData) => {
    const { name, biography } = authorData;
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO authors (name, biography) VALUES (?, ?)", [name, biography], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

const getBooksByAuthor = (authorId) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM books WHERE author_id = ?", [authorId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};




module.exports = { createAuthor, getBooksByAuthor, getAllBooks, createBook, editBookById, deleteBookById };
