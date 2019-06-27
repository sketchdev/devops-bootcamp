module.exports = {
  flywayArgs: {
    url: `jdbc:postgresql://localhost/bootcamp`,
    schemas: 'bootcampuser',
    locations: 'filesystem:sql',
    user: 'bootcampuser',
    password: 'abc123def456'
    // sqlMigrationSuffix: '.sql',  // deprecated with the newer beta version
  },
  version: '6.0.0-beta2'
};
