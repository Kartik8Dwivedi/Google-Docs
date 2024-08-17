import { Server } from "socket.io";

const PORT = 4000;

const io = new Server(PORT, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
})

io.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("send-changes", (delta) => {
        socket.broadcast.emit("receive-changes", delta);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});