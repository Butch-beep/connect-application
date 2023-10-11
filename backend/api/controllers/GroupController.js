const group = require("../models/group");

module.exports = {
  get: async (req, res) => {
    try {
      const groups = await group.get;
      res.json(groups.rows);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  post: async (req, res) => {
    try {
      const newGroup = await group.post(req);
      res.json(newGroup.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteGroup = await group.delete(req);
      res.json(deleteGroup.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  patch: async (req, res) => {
    try {
      const updateGroup = await group.patch(req);
      res.json(updateGroup.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
};
