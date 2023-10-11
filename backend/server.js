require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

// define routes
const chatRoute = require("./api/routes/chat");
const userRoute = require("./api/routes/user");
const groupRoute = require("./api/routes/group");
const memberRoute = require("./api/routes/member");

// .on listens on connection event and detects if someone is connected
io.on("connection", (socket) => {
  socket.on("join-room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
    console.log(data);
  });

  socket.on("send_new_message", (data) => {
    socket.to(data["conversation_id"]).emit("receive_new_message", data);
    console.log(data);
  });
});

// middleware
app.use(cors());

// Data sent to server is attached to request object "req.body"
app.use(express.json());

// routes
app.use("/chat", chatRoute);
app.use("/user", userRoute);
app.use("/group", groupRoute);
app.use("/member", memberRoute);

// establish a connection
server.listen(5000, () => {
  console.log("server has started");
});
