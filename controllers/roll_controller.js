const express = require('express');
const router = express.Router();
const Die = require('../models/die');

router.get('/', (req, res) => {
  let die = new Die(req.query.sides);
  res.send(`A die with ${die.sides} sides just rolled a ${die.roll()}.`)
});


module.exports = router;
