const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Die = require('./models/die');
let die = new Die(9);

app.get('/', (req, res) => res.send('Hello DevOps Bootcamp!'));
app.get('/roll', (req, res) => res.send(`A die with ${die.sides} sides just rolled a ${die.roll()}.`));

if (module.parent === null) {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
} else {
  // Export our app for testing purposes
  exports.app = app;
}
