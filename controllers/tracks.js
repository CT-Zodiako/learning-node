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
const getItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await tracksModel.findById(id);
    res.send({ data });

  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM")
  }
};

/**
 * Insertar un resgitro
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

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {

    const { id, ...body } = matchedData(req)
    const data = await tracksModel.findOneAndUpdate(
      id, body
    )
    res.send({ data })
  } catch (error) {

    handleHttpError(res, "ERROR_UP_DATE-ITEMS")
  }
};
/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    const data = await tracksModel.delete({_id:id});
    res.send({ data });

  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM")
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
