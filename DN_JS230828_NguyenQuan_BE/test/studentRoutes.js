const express = require('express');
const router = express.Router();

const connection = require("../config/thdb-config");

const getAllStudent = () => {
    const query = "SELECT * FROM hocsinh";
    return new Promise((resolve, reject) => {
        connection.query(query, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

const getStudentById = (id) => {
    const query = `SELECT * FROM hocsinh WHERE id = ${id}`;
    return new Promise((resolve, reject) => {
        connection.query(query, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
};

const updateStudentById = (id, updateStudentData) => {
    const { HOTENHS, GIOITINH, HoTenPH, MaLop, DIACHI } = updateStudentData;
    const updateQuery = `UPDATE hocsinh 
        SET HOTENHS='${HOTENHS}', GIOITINH='${GIOITINH}', HoTenPH='${HoTenPH}', MaLop='${MaLop}', DIACHI='${DIACHI}'
        WHERE id=${id}`;

    return new Promise((resolve, reject) => {
        connection.query(updateQuery, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

// Định nghĩa các route và middleware ở đây
router.get('/students', async (req, res) => {
    try {
        const students = await getAllStudent();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Export router
module.exports = router;
