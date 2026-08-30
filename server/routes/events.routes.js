const { Router } = require('express');
const { eventsController } = require('../controllers');

const eventsRouter = Router();

eventsRouter.post('/', eventsController.create);

module.exports = eventsRouter;
