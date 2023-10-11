const pool = require("../../db");

module.exports = {
  get: pool.query("SELECT * FROM conversation"),
  post: (req) => {
    const { conversation_name } = req.body;
    return pool.query(
      "INSERT INTO conversation (conversation_name) VALUES($1) RETURNING *",
      [conversation_name]
    );
  },
  delete: (req) => {
    const { conversation_id } = req.body;
    return pool.query(
      "DELETE FROM conversation WHERE conversation_id = $1 RETURNING*",
      [conversation_id]
    );
  },
  patch: (req) => {
    const { conversation_name, conversation_id } = req.body;
    return pool.query(
      "UPDATE person SET convesation_name = $1 WHERE conversation_id = $2 RETURNING*",
      [conversation_name, conversation_id]
    );
  },
};
