import { Server } from "socket.io";
import connection from "./database/db.js";

const PORT = 4000;

connection();

const io = new Server(PORT, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) => {
  socket.on("get-document", (documentId) => {
    const data = "";
    socket.join(documentId);
    socket.emit("load-document", data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
});