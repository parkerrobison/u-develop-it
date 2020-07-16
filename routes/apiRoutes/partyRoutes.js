const express = require('express');
const router = express.Router();
const db = require('../../db/database');

// to get all of the parties.
router.get('/parties', (req, res) => {
    const sql = `SELECT * FROM parties`;
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: rows
        });
    });
});

// to get a party
router.get('/party/:id', (req, res) => {
    const sql = `SELECT * FROM parties WHERE id = ?`;
    const params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.json({ 
            message: 'success',
            data: row
        });
    });
});

// deletes a party
router.delete('/party/:id', (req, res) => {
    const sql = `DELETE FROM parties WHERE id = ?`;
    const params = req.params.id;
    db.run(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: res.message });
            return;
        }

        res.json({ message: 'sucessfully deleted', changes: this.changes });
    });
});

module.exports = router;