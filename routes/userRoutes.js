const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

const getAllUsers = (req, res) => {
    console.log('Hello');
}

router.post('/login', authController.login);


router.route('/')
    .get(getAllUsers)




module.exports = router;