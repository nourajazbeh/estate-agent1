import express from 'express';
import { google, googleCallback, signup, signin, signOut } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup",signup)
router.post("/signin", signin)
router.get("/signout", signOut)
router.get("/google", google)
router.get("/google/callback", googleCallback)

export default router;