import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function generateJwt(email, userId) {
    return jwt.sign({ email, userId }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
}

export function verifyJwt(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
}
