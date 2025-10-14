const express = require('express');
const router = express.Router();
const db = require(__dirname + '/conn');
const cors = require('cors');

router.use(cors());

router.get('/customer', (req, res) => {
    const sql = "SELECT * FROM customer";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ results });
    });
});

router.post('/customer', (req, res) => {
    const { nama, email, password, telepon, alamat } = req.body;
    const sql = "INSERT INTO customer (nama, email, password, telepon, alamat) VALUES (?, ?, ?)";
    db.query(sql, [nama, email, password, telepon, alamat], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Customer added', customerId: results.insertId });
    });
}); 

router.get('/customer/:id', (req, res) => {
    const customerId = req.params.id;
    const sql = "SELECT * FROM customer WHERE id = ?";
    db.query(sql, [customerId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ results });
    });
});

router.get('/purchase-history', (req, res) => {
    const sql = "SELECT * FROM purchase_history";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ results });
    });
});

router.post('/purchase-history', (req, res) => {
    const {customer_id, purchase_details, purchase_date} = req.body;
    const sql = "INSERT INTO customer (customer_id, purchase_details, purchase_date) VALUES (?, ?, ?)";
    db.query(sql, [customer_id, purchase_details, purchase_date], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Customer added', customerId: results.insertId });
    });
}); 

router.get('/purchase-history/:id', (req, res) => {
    const customerId = req.params.id;
    const sql = "SELECT * FROM purchase_history WHERE customer_id = ?";
    db.query(sql, [customerId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ results });
    });
}); 


module.exports = router
