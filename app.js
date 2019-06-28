require('dotenv').config();
express = require('express');
app = express();
port = process.env.PORT || process.argv[2] || 3000;

app.get('/', (req, res) => res.send('Hello DevOps Bootcamp!'));
app.use('/roll', require('./controllers/roll_controller'));

if (module.parent === null) {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
} else {
  // Export our app for testing purposes
  exports.app = app;
}
