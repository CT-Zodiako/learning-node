
const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage')
const {validtadorGetItem} = require('../validators/storage')
const {createItem,getItem,getItems,updateItem,deleteItem} = require('../controllers/storage')


//TODO htpp://localhost:3000/storage

router.get('/', getItems)
router.get('/:id', validtadorGetItem,getItem)
router.delete('/:id', validtadorGetItem,deleteItem)
router.post('/', uploadMiddleware.single("myfile"),createItem)


module.exports = router