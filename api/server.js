const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const path = require('path');
require('dotenv').config({ path: __dirname + '/../.env' });
// require('dotenv').config();

const port = process.env.PORT || 8000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// coonect to mysql database
const pool = mysql.createPool({
    host: 'localhost',
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});


app.get('/test', (req, res) => {
    res.json({ message: 'Hello World!' });
});
app.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(rows);
    });
});
app.post('/user', (req, res) => {
    const { first_name, last_name, user_name, password} = req.body;
    console.log('data to be inserted', req.body);
    pool.query(
         "INSERT INTO users (first_name, last_name, user_name, password) VALUES (?, ?, ?, ?)", [first_name, last_name, user_name, password],
         (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('Internal Server Error');
                return;
            }
            console.log('Result', result);
            res.json({ status: 'ok', message: 'User added successfully', user_id: result.insertId });
    });
});
app.get ('/memos', (req, res) => {
    pool.query('SELECT * FROM memos', (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(rows);
    });
});
app.post('/memo', (req, res) => {
  const { user_id, memo, title, subject, catagory } = req.body;
  console.log('data to be inserted', req);
  pool.query(
    "INSERT INTO memos (user_id, memo, title, subject, catagory ) VALUES (?, ?, ?, ?, ?)", [user_id, memo, title, subject, catagory],
    (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log('Result', result);
        res.json({ status: 'ok', message: 'Memo added successfully', memo_id: result.insertId });

    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
