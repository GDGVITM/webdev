import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { generateJwt, verifyJwt } from "../utils/jwt.js";
import { userVerify } from "../utils/auth.js";
import { validationResult } from "express-validator";
import { sendMail } from "../utils/mailer.js";

export const createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        const token = generateJwt(email, user._id);
        await sendMail(email, "verify", user._id);

        res.status(201).json({ message: "User created. Verification email sent." });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};

export const verifyUser = async (req, res) => {
    const { token } = req.params;
    try {
        const user = await userVerify(token, "verify");
        res.status(200).json({ message: "User verified", user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = generateJwt(email, user._id);

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
};
