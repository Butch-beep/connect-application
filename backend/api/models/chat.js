const pool = require("../../db");

module.exports = {
  get: pool.query(
    'SELECT message.*, person.first_name, person.last_name FROM message JOIN "person" ON person.person_id = message."person_id"'
  ),
  post: (req) => {
    const { message_body, conversation_id, person_id } = req.body;
    return pool.query(
      "INSERT INTO message (message_body, conversation_id, person_id) VALUES($1, $2, $3) RETURNING *",
      [message_body, conversation_id, person_id]
    );
  },
  delete: (req) => {
    const { message_id } = req.body;
    return pool.query("DELETE FROM message WHERE message_id = $1 RETURNING*", [
      message_id,
    ]);
  },
  patch: (req) => {
    const { message_id, message_body } = req.body;
    return pool.query(
      "UPDATE message SET message_body = $1 WHERE message_id = $2 RETURNING*",
      [message_body, message_id]
    );
  },
};
