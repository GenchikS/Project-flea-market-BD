import { Router } from "express";
import { createAnnouncementControllers, getAnnouncementsControllers } from "../controllers/announcements.js";



const router = Router();

router.get(`/announcements`, getAnnouncementsControllers);

router.post(`/announcement/add`, createAnnouncementControllers);

export default router;
