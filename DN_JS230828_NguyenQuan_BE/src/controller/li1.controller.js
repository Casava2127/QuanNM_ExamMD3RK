// const connection = require("../config/db.config");

// // Controller cho route GET /api/v1/books: Trả về danh sách tất cả các books
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

// // Controller cho API tìm kiếm book theo tên
// const searchBooksByName = (searchTerm) => {
//     return new Promise((resolve, reject) => {
//         connection.query("SELECT * FROM books WHERE name LIKE ?", [`%${searchTerm}%`], (error, results) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };

// // Controller cho route GET /api/v1/books/:id: Trả về thông tin một record của book
// const getBookById = (id) => {
//     return new Promise((resolve, reject) => {
//         connection.query("SELECT * FROM books WHERE id = ?", [id], (error, results) => {
//             if (error) {
//                 reject(error);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// };

// // Controller cho route POST /api/v1/book: Thêm một book mới vào database
// const createBook = (bookData) => {
//     const { name, description, price } = bookData;
//     const createdAt = new Date(); // Lấy thời gian hiện tại
//     return new Promise((resolve, reject) => {
//         if (!name || !description || !price) {
//             reject("Thông tin không được để trống");
//         } else if (name.length > 50) {
//             reject("Name không được quá 50 ký tự");
//         } else if (description.length > 200) {
//             reject("Description không được quá 200 ký tự");
//         } else {name, description, price, created_at
//             connection.query("INSERT INTO books () VALUES (?, ?, ?)", [name, description, price], (error, results) => {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         }
//     });
// };

// // Controller cho route PUT /api/v1/book/:id: Cập nhật thông tin một book cụ thể dựa trên id
// const updateBookById = (id, bookData) => {
//     const { name, description, price } = bookData;
//     const updatedAt = new Date(); // Lấy thời gian hiện tại
//     return new Promise((resolve, reject) => {
//         if (!name || !description || !price) {
//             reject("Thông tin không được để trống");
//         } else if (name.length > 50) {
//             reject("Name không được quá 50 ký tự");
//         } else if (description.length > 200) {
//             reject("Description không được quá 200 ký tự");
//         } else {
//             connection.query("UPDATE books SET name = ?, description = ?, price = ? WHERE id = ?", [name, description, price, id], (error, results) => {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         }
//     });
// };

// // Controller cho route DELETE /api/v1/book/:id: Xóa một book cụ thể của người dùng dựa trên id
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

// // Export các hàm controller
// module.exports = {
//     getAllBooks,
//     searchBooksByName,
//     getBookById,
//     createBook,
//     updateBookById,
//     deleteBookById
// };

const connection = require("../config/db.config");

// 1. GET /api/v1/books: Trả về danh sách tất cả các books
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

// 2. API tìm kiếm book theo tên
const searchBooksByName = (searchTerm) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM books WHERE name LIKE ?", [`%${searchTerm}%`], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// 3. GET /api/v1/books/:id: Trả về thông tin một record của book
const getBookById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM books WHERE id = ?", [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

// 4. POST /api/v1/book: Thêm một book mới vào database

const createBook = (bookData) => {
    const { name, description, price } = bookData;
    const createdAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Lấy thời gian hiện tại
    return new Promise((resolve, reject) => {
        if (!name || !description || !price) {
            reject("Thông tin không được để trống");
        } else if (name.length > 50) {
            reject("Name không được quá 50 ký tự");
        } else if (description.length > 200) {
            reject("Description không được quá 200 ký tự");
        } else {
            connection.query("INSERT INTO books (name, description, price, created_at) VALUES (?, ?, ?, ?)", [name, description, price, createdAt], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        }
    });
};


// 5. PUT /api/v1/book/:id: Cập nhật thông tin một book cụ thể dựa trên id
const updateBookById = (id, bookData) => {
    const { name, description, price } = bookData;
    const updatedAt = new Date().toISOString().slice(0, 19).replace('T', ' '); // Lấy thời gian hiện tại
    return new Promise((resolve, reject) => {
        if (!name || !description || !price) {
            reject("Thông tin không được để trống");
        } else if (name.length > 50) {
            reject("Name không được quá 50 ký tự");
        } else if (description.length > 200) {
            reject("Description không được quá 200 ký tự");
        } else {
            connection.query("UPDATE books SET name = ?, description = ?, price = ?, updated_at = ? WHERE id = ?", [name, description, price, updatedAt, id], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        }
    });
};

// 6. DELETE /api/v1/book/:id: Xóa một book cụ thể của người dùng dựa trên id
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

// 7. POST /api/v1/author: Thêm một author mới vào database
const createAuthor = (authorData) => {
    const { name, biography } = authorData;
    return new Promise((resolve, reject) => {
        if (!name || !biography) {
            reject("Thông tin không được để trống");
        } else {
            connection.query("INSERT INTO authors (name, biography) VALUES (?, ?)", [name, biography], (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        }
    });
};

// 8. GET /api/v1/author/:id/books: trả về danh sách các book theo author
const getBooksByAuthorId = (authorId) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT books.* FROM books JOIN book_author ON books.id = book_author.book_id WHERE book_author.author_id = ?", [authorId], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    getAllBooks,
    searchBooksByName,
    getBookById,
    createBook,
    updateBookById,
    deleteBookById,
    createAuthor,
    getBooksByAuthorId
};
