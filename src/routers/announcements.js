import { Router } from "express";
import { getAnnouncementsControllers } from "../controllers/announcements.js";



const router = Router();

router.get(`/announcements`, getAnnouncementsControllers);

export default router;
