const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const appRoutes = require("./routes");

const http = require("http");
const { Server } = require("socket.io");

const app = express();

//start code for socket
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // socket.on('send_message', (message) => {
  //   console.log('📨 Relaying message:', message);
  //   socket.broadcast.emit('receive_message', message); // send to others
  // });

  socket.on('send_message', (message) => {
    const data = {
      text: message,
      senderId: socket.id,
    };
    io.emit('receive_message', data); // send to everyone including sender
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
//End code for socket


// Connect to the database
connectDB();

// Middleware, routes, etc.
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use("/api", appRoutes);

// Start server
const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.listen(PORT, () => console.log(`🚀 Server + Socket.IO running on http://localhost:${PORT}`));
