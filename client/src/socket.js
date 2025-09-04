// src/socket.js
import { io } from "socket.io-client";

export const socket = io("https://wellcrew.onrender.com", {
  withCredentials: true,
  autoConnect: false, // you control when it connects
});
