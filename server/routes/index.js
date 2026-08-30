const { Router } = require('express');
const eventsRouter = require('./events.routes');

const router = Router();

router.use('/events', eventsRouter);

module.exports = router;
