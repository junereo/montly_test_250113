const express = require('express');
const router = express.Router();
const {
    getList, 
    updateList, 
    writeList, 
    deleteList} = require('../controllers/comment.control')


router.get('/list',getList);


router.get('/update/:id',updateList);

router.post('/update/:id',writeList);

router.post('/delete/:id',deleteList);

module.exports = router;