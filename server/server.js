// server.js
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const initializeSocket = require("../socket/index");

const app = express();
const server = http.createServer(app);

// ⚠️ Initialize Socket.IO ONCE and keep a reference
const io = initializeSocket(server);

// Make io available inside route handlers as req.io
app.use((req, _res, next) => {
  req.io = io;
  next();
});

const _dirname = path.resolve();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

require('./config/database').connect();

// routes
const userRoutes = require('./routes/user');
const chatRoutes = require('./routes/chat');
const messageRoutes = require('./routes/message');
const communityRoutes = require('./routes/community');

app.use('/api/auth', userRoutes);
app.use('/chat', chatRoutes);
app.use('/message', messageRoutes);
app.use('/community', communityRoutes);

// static (if you’re serving client from here)
app.use(express.static(path.join(_dirname, "/client/build")));
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
