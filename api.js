const express = require('express');


const router = express.Router();
const db = require(__dirname + '/conn');
const cors = require('cors');

router.use(cors());

// Get all customers
router.get('/customer', (req, res) => {
    const sql = "SELECT * FROM customer";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ results });
    });
});

// Customer login
router.post('/customer/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM customer WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.length > 0) {
            res.status(200).json({ message: 'Login successful', user: results[0] });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    });
});

// Register new customer
router.post('/customer/register', (req, res) => {
    const { nama, email, password, telepon, alamat } = req.body;
    const sql = "INSERT INTO customer (nama, email, password, telepon, alamat) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [nama, email, password, telepon, alamat], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Customer added', customerId: results.insertId });
    });
}); 

// Get customer by ID
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

// Get customer by Email
router.get('/customer/email/:email', (req, res) => {
    const customerEmail = req.params.email;
    const sql = "SELECT * FROM customer WHERE email = ?";   
    db.query(sql, [customerEmail], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ results });
    });
});

// Update customer by ID
router.put('/customer/update/:id', (req, res) => {
    const customerId = req.params.id;
    const { nama, email, password, telepon, alamat } = req.body;
    const sql = "UPDATE customer SET nama = ?, email = ?, password = ?, telepon = ?, alamat = ? WHERE id = ?";
    db.query(sql, [nama, email, password, telepon, alamat, customerId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Customer updated' });
    });
});

// get all purchase history
router.get('/purchase-history', (req, res) => {
    const sql = "SELECT * FROM purchasehistory";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ results });
    });
});

// add new purchase history
router.post('/purchase-history/add', (req, res) => {
    const {customer_id, purchase_details, purchase_date} = req.body;
    const sql = "INSERT INTO purchasehistory (customer_id, purchase_details, purchase_date) VALUES (?, ?, ?)";
    db.query(sql, [customer_id, purchase_details, purchase_date], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Customer added', customerId: results.insertId });
    });
}); 

// get purchase history by customer ID
router.get('/purchase-history/:id', (req, res) => {
    const customerId = req.params.id;
    const sql = "SELECT * FROM purchasehistory WHERE customer_id = ?";
    db.query(sql, [customerId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ results });
    });
}); 

// update purchase history by ID
router.put('/purchase-history/:id', (req, res) => {
    const historyId = req.params.id;
    const { customer_id, purchase_details, purchase_date } = req.body;
    const sql = "UPDATE purchasehistory SET customer_id = ?, purchase_details = ?, purchase_date = ? WHERE id = ?";
    db.query(sql, [customer_id, purchase_details, purchase_date, historyId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Purchase history updated' });
    });
});

router.delete('/purchase-history/:id', (req, res) => {
    const historyId = req.params.id;
    const sql = "DELETE FROM purchasehistory WHERE id = ?";
    db.query(sql, [historyId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Purchase history deleted' });
    });
});

module.exports = router


