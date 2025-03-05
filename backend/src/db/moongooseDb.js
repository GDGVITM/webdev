import mongoose from "mongoose";

export async function dbConnect(url, port) {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connected successfully at port ${port}`);
    } catch (err) {
        console.error("Database connection error:", err);
        throw err;
    }
}
