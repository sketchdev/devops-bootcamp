const express = require('express');
const router = express.Router();
const Die = require('../models/die');
const { db } = require('../lib/db');

router.get('/', async (req, res) => {
  let die = new Die(req.query.sides);
  let roll = die.roll();
  try {
    await db.none(`INSERT INTO roll_history(die_sides, result) VALUES (${die.sides}, ${roll});`);
  } catch (e) {
    console.log('Failed to log roll history.');
    console.log(e);
  }
  res.send(`A die with ${die.sides} sides just rolled a ${roll}.`)
});


module.exports = router;
