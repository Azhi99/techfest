const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = process.env.TOKEN_SECRET;

module.exports = function(req, res, next) { 
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({message: 'Auth Error'});
    }
    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();
    } catch (e) {
        res.status(500).send({message: 'Invalid Token'});
    }
}