const chat = require("../models/chat");
const pool = require("../../db");

module.exports = {
  get: async (req, res) => {
    try {
      const chats = await chat.get;
      res.json(chats.rows);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  post: async (req, res) => {
    try {
      const newChat = await chat.post(req);
      res.json(newChat.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteChat = await chat.delete(req);
      res.json(deleteChat.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
  patch: async (req, res) => {
    try {
      const updateChat = await chat.patch(req);
      res.json(updateChat.rows[0]);
    } catch (error) {
      res.json({ errorMessage: error.message });
    }
  },
};
