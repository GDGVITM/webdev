import nodemailer from "nodemailer";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

export const sendMail = async (email, emailType, userId) => {
    try {
        if (!["verify", "forgot"].includes(emailType)) {
            throw new Error("Invalid email type");
        }

        const user = await User.findById(userId);
        if (!user) {
            throw new Error("User not found");
        }

        const token = await bcrypt.hash(userId.toString(), 10);
        user[emailType === "verify" ? "verifyToken" : "forgotPasswordToken"] = token;
        user[emailType === "verify" ? "verifyTokenExpiry" : "forgotPasswordTokenExpiry"] = Date.now() + 3600000;

        await user.save();

        const link = `${process.env.DOMAIN || "http://localhost:3000"}/${emailType}/${token}`;
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: email,
            subject: emailType === "verify" ? "Email Verification" : "Password Reset",
            html: `<h1>${emailType}</h1><p>Click <a href="${link}">here</a> to proceed.</p>`,
        });

    } catch (error) {
        throw new Error(`Failed to send email: ${error.message}`);
    }
};
