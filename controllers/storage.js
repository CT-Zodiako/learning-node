const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const fs = require('fs')

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname }/../storage`
/**
 * Obtener lista de base de datos
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
  try {
    
    const data = await storageModel.find({});
    res.send({ data });
    
    
  } catch (error) {
    handleHttpError(res, "Error en getItems")
    
  }
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    const {id} = matchedData(req)
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
    
    console.log(error)
  }
};

/**
 * insertar un resgitro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const { body, file } = req
  console.log(file)
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}}`
  }
  const data = await storageModel.create(fileData)
  res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error en CreateItem")
  }
  
};

const updateItem = async (req, res) => { };
/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => { 
  try {
    const {id} = matchedData(req)
    const dataFile = await storageModel.findById(id);
    await storageModel.delete({_id:id})
    const {filename} = dataFile
    const filePath = `${MEDIA_PATH}/${filename}`
    // fs.unlinkSync(filePath)
    const data={
      filePath,
      delete:1
    }
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "Error en DeleteItem")
    console.log(error)
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
