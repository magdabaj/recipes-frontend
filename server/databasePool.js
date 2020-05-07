const { Pool } = require('pg');
const database = require('./secrets/databaseConfiguration');

const pool = new Pool(database);

module.exports = pool;
