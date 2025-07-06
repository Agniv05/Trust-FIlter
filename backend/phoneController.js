const db = require('../config/db');
const axios = require('axios');

exports.addPhoneNumber = (req, res) => {
  const { phone_number } = req.body;
  const sql = 'INSERT INTO phone_numbers (phone_number) VALUES (?)';
  db.query(sql, [phone_number], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ success: true, id: result.insertId });
  });
};

exports.listPhoneNumbers = (req, res) => {
  db.query('SELECT * FROM phone_numbers', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.analyzeMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const response = await axios.post('http://localhost:5001/analyze', { message });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'AI Service Failed' });
  }
};
