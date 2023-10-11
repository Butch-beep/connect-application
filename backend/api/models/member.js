const pool = require("../../db");

module.exports = {
  get: pool.query("SELECT * FROM group_member"),
  post: (req) => {
    const { person_id, conversation_id } = req.body;
    return pool.query(
      "INSERT INTO group_member (person_id, conversation_id) VALUES($1, $2) RETURNING *",
      [person_id, conversation_id]
    );
  },
  delete: (req) => {
    const { conversation_id, person_id } = req.body;
    return pool.query(
      "DELETE FROM group_member WHERE conversation_id = $1 AND person_id = $2 RETURNING*",
      [conversation_id, person_id]
    );
  },
};
