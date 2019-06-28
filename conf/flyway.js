require('dotenv').config();

module.exports = {
  flywayArgs: {
    url: `jdbc:postgresql://${process.env.PGHOST}/${process.env.PGDATABASE}`,
    schemas: process.env.PGUSER,
    locations: 'filesystem:sql',
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    baselineOnMigrate: true
    // sqlMigrationSuffix: '.sql',  // deprecated with the newer beta version
  },
  version: '6.0.0-beta2' // need to pull beta for postgres 11 support; omitting this option normally pulls latest stable version
};
