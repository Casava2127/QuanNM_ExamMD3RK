import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const API_URL = "http://localhost:8081/api/v1";

  // Hàm fetch danh sách Book từ API khi component được render
  useEffect(() => {
    fetchBooks();
  }, []);

  // Hàm lấy danh sách Book từ API
  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/books`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Hàm thêm mới Book
  const addBook = async () => {
    try {
      await axios.post(`${API_URL}/books`, { name, description, price });
      setMessage('Book added successfully');
      fetchBooks();
    } catch (error) {
      console.error('Error adding book:', error);
      setMessage('Failed to add book');
    }
  };

  // Hàm xóa Book
  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/books/${id}`);
      setMessage('Book deleted successfully');
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
      setMessage('Failed to delete book');
    }
  };

  // Hàm chỉnh sửa thông tin Book
  const editBook = async (id, newData) => {
    try {
      await axios.put(`${API_URL}/books/${id}`, newData);
      setMessage('Book updated successfully');
      fetchBooks();
    } catch (error) {
      console.error('Error updating book:', error);
      setMessage('Failed to update book');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Book Management</h1>
      <ul className="list-group mb-4">
        {Array.isArray(books) && books.map(book => (
          <li key={book.id} className="list-group-item">
            {book.name} - {book.description} - ${book.price}
            <button className="btn btn-danger ml-2" onClick={() => deleteBook(book.id)}>Delete</button>
            <button className="btn btn-primary ml-2" onClick={() => editBook(book.id, { name: 'New Name', description: 'New Description', price: 100 })}>Edit</button>
          </li>
        ))}
      </ul>
      <div className="mb-4">
        <input type="text" className="form-control mb-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" className="form-control mb-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="number" className="form-control mb-2" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button className="btn btn-success" onClick={addBook}>Add Book</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default App;
