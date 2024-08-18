import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {
    const URI = process.env.MONGO_URI;

    try {
        await mongoose.connect(URI)
        console.log("Connected to the database");
    } catch (error) {
        console.log("Error while connecting to the database", error);
    }
}

export default connection;