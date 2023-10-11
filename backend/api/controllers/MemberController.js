const member = require("../models/member");

module.exports = {
  get: async (req, res) => {
    try {
      const members = await member.get;
      res.json(members.rows);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  post: async (req, res) => {
    try {
      const newMember = await member.post(req);
      res.json(newMember.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const removeMember = await member.delete(req);
      res.json(removeMember.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
};
