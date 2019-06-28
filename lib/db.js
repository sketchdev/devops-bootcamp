const pgp = require('pg-promise')();
const cn = {
  host: process.env.PGHOST || process.argv[3],
  port: process.env.PGPORT || process.argv[4],
  database: process.env.PGDATABASE || process.argv[5],
  user: process.env.PGUSER || process.argv[6],
  password: process.env.PGPASSWORD || process.argv[7],
  schema: process.env.PGUSER || process.argv[6],
};
const db = pgp(cn);

module.exports = {
  pgp, db
};
