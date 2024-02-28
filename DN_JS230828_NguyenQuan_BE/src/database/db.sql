/* 
-- Tạo cơ sở dữ liệu
CREATE DATABASE library_management;
-- Sử dụng cơ sở dữ liệu
USE library_management;
-- Bảng quản lý học sinh
-- Tạo cơ sở dữ liệu
CREATE DATABASE library_management;
-- Sử dụng cơ sở dữ liệu
USE library_management;
-- Bảng quản lý học sinh
CREATE TABLE Students (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
grade VARCHAR(50),
book_id INT,
book_title VARCHAR(255)
);
-- Bảng quản lý sách
CREATE TABLE Books (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255),
author VARCHAR(255),
quantity INT
);
select * from students; */



-- Tạo bảng Books
CREATE DATABASE library;

-- Sử dụng cơ sở dữ liệu
USE library;
CREATE TABLE Books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    price INT,
    created_at DATE,
    updated_at DATE
);

-- Tạo bảng Authors
CREATE TABLE Authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    biography TEXT
);

-- Tạo bảng Book_Author
CREATE TABLE Book_Author (
    id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT,
    author_id INT,
    FOREIGN KEY (book_id) REFERENCES Books(id),
    FOREIGN KEY (author_id) REFERENCES Authors(id)
);
