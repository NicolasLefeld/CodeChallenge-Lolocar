const router = require('express').Router();
const { exampleController } = require('./controller');

router

  .post('/', async (req, res) => {
    const { name } = req.body;

    const response = await exampleController(name);

    res.json(response);
  })

module.exports = router;
