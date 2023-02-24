const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

/**
 * Obtener lista de base de datos
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {

  try {
    const data = await tracksModel.find({});
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
const getItem = (req, res) => { };

/**
 * insertar un resgitro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await tracksModel.create(body)
    res.send({ data })
  } catch (error) {

    handleHttpError(res, "Error en createItems")
  }

};

const updateItem = (req, res) => { };
/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => { };

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
