const { Event } = require('../models');

module.exports.create = async (req, res, next) => {
  const { body } = req;
  try {
    const event = await Event.create(body);

    res.status(201).json(event);
  } catch (error) {
    next(error);
  }
};
