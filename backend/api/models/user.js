const pool = require("../../db");

module.exports = {
  get: pool.query("SELECT * FROM person"),
  post: (req) => {
    const { first_name, last_name } = req.body;
    return pool.query(
      "INSERT INTO person (first_name, last_name) VALUES($1, $2) RETURNING *",
      [first_name, last_name]
    );
  },
  delete: (req) => {
    const { person_id } = req.body;
    return pool.query("DELETE FROM person WHERE person_id = $1 RETURNING*", [
      person_id,
    ]);
  },
  patch: (req) => {
    const { person_id, first_name, last_name } = req.body;
    return pool.query(
      "UPDATE person SET first_name = $1, last_name = $2 WHERE person_id = $3 RETURNING*",
      [first_name, last_name, person_id]
    );
  },
};
