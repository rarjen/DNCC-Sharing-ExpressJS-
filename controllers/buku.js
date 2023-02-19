const { Book } = require("../models");

const create = async (req, res, next) => {
  try {
    const { title, author, year, stock } = req.body;

    const checking = await Book.findOne({ where: { title } });
    if (checking) {
      return res.status(400).json({
        status: false,
        message: "Data Duplicate",
      });
    }

    const result = await Book.create({
      title,
      author,
      year,
      stock,
    });

    return res.status(201).json({
      status: false,
      message: "Data Created",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await Book.findAll({});
    return res.status(200).json({
      status: false,
      message: "Get All Data Success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Book.findOne({ where: { id } });

    if (!result) {
      return res.status(400).json({
        status: false,
        message: "Data Not Found",
      });
    }

    return res.status(200).json({
      status: false,
      message: "Get Book Success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, year, stock } = req.body;

    const checking = await Book.findOne({ where: { id } });
    if (!checking) {
      return res.status(400).json({
        status: false,
        message: "Data Not Found",
      });
    }

    const exist = await Book.findOne({ where: { title } });

    if (exist) {
      return res.status(400).json({
        status: false,
        message: "Data Duplicate",
      });
    }

    const result = await Book.update(
      {
        title,
        author,
        year,
        stock,
      },
      { where: { id } }
    );

    return res.status(200).json({
      status: false,
      message: "Success Update Data",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Book.destroy({ where: { id } });
    return res.status(200).json({
      status: false,
      message: "Data Deleted",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, index, show, update, destroy };
