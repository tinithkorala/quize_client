const express = require('express');

const router = express.Router();

const getAllUsers = (req, res) => {
    console.log('Hello');
}

router.route('/')
    .get(getAllUsers)




module.exports = router;