import bcrypt from "bcryptjs";
import { verifyJwt } from "./jwt.js";
import User from "../model/user.model.js";

export async function hashPassword(password) {
    return await bcrypt.hash(password, 12);
}

export async function verifyPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

export async function userVerify(token, emailType, password = null) {
    const decodedToken = verifyJwt(token);
    let user;

    if (emailType === "verify") {
        user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            throw new Error("Invalid or expired token");
        }

        user.isVerified = true;
        user.verifyToken = null;
        user.verifyTokenExpiry = null;

        await user.save();
        return user;
    } else if (emailType === "forgot") {
        if (!password) {
            throw new Error("Password is required");
        }

        user = await User.findOne({
            forgotPasswordToken: token,
            forgotPasswordTokenExpiry: { $gt: Date.now() },
        });

        if (!user) {
            throw new Error("Invalid or expired token");
        }

        user.password = await hashPassword(password);
        user.forgotPasswordToken = null;
        user.forgotPasswordTokenExpiry = null;

        await user.save();
        return user;
    }
}
