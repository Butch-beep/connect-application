const express = require("express");

const router = express.Router();

const controller = require("../controllers/MemberController");

// GET all chats
router.get("/", controller.get);

// POST a new chat
router.post("/", controller.post);

// DELETE a chat
router.delete("/", controller.delete);

module.exports = router;
