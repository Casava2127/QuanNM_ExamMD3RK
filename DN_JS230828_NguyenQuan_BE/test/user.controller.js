//user.controller.js
const connection = require("../config/db.config")

const getAllUsers = () => {
    const query = "Select * from Users"

    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })
    return resultQuery
}

const createUser = (body) => {
    const { name, address } = body
    const query = `insert into Users (name, address) 
                    values ('${name}','${address}')`
    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })

    return resultQuery
}
const editUserById = (id, body) => {
    console.log(body);
    const { name, address } = body
    const query = `UPDATE Users
SET name = '${name}', address = '${address}'
WHERE id = ${id};`
    console.log(query);
    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })

    return resultQuery
}


const deleteUserById = (id) => {
    const query = `DELETE FROM Users WHERE id = ${id};`
    const resultQuery = new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            resolve(results)
        })
    })

    return resultQuery
}
module.exports = { getAllUsers, createUser, deleteUserById, editUserById }