const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem, updateItem,deleteItem } = require("../controllers/tracks")
const { validatorCreateItem, validtadorGetItem } = require('../validators/tracks')
const customHeader = require("../middleware/customHeader")

//lista items
router.get("/", getItems)
//crea un item
router.post("/", validatorCreateItem, createItem)
//obtener detalle de item
router.get("/:id", validtadorGetItem, getItem)
//actualizar un registro\
router.put("/:id", validtadorGetItem, validatorCreateItem, updateItem)
//delete
router.delete("/:id", validtadorGetItem, deleteItem)
module.exports = router