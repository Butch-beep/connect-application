const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "cortez.03!!!",
  host: "localhost",
  port: 5432,
  database: "connect",
});

module.exports = pool;
