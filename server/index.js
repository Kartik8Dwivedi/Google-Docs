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

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});