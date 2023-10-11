const user = require("../models/user");
const pool = require("../../db");

module.exports = {
  get: async (req, res) => {
    try {
      const users = await user.get;
      res.json(users.rows);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  post: async (req, res) => {
    try {
      const newUser = await user.post(req);
      res.json(newUser.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteUser = await user.delete(req);
      res.json(deleteUser.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  patch: async (req, res) => {
    try {
      const updateUser = await user.patch(req);
      res.json(updateUser.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
};
