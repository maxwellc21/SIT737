const data = require('../models/data');
const path = require('path');

exports.home = (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
};

exports.getMessage = (req, res) => {
    res.json({ message: data.message });
};
