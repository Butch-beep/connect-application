const express = require("express");

const router = express.Router();

const controller = require("../controllers/GroupController");

// GET all chats
router.get("/", controller.get);

// POST a new chat
router.post("/", controller.post);

// DELETE a chat
router.delete("/", controller.delete);

// UPDATE a chat
router.patch("/", controller.patch);

module.exports = router;
