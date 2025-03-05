import { Router } from "express";
import { createUser, loginUser, verifyUser } from "../controllers/user.js";

const router = Router();

router.post("/login", loginUser);
router.post("/register", createUser);
router.get("/verify/:token", verifyUser);

export default router;
