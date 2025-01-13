const express = require('express');
const router = express.Router();
const {
    getList, 
    updateList,
    viewList,
    writeList, 
    deleteList} = require('../controllers/comment.control')


router.get('/list',getList);

router.get('/update/:id',viewList);

router.post('/update/:id',updateList);

router.post('/write',writeList);

router.post('/delete/:id',deleteList);

module.exports = router;