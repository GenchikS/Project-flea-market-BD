import { Router } from "express";
import { createAnnouncementControllers, getAnnouncementsControllers, patchUpdateControllers } from "../controllers/announcements.js";



const router = Router();

router.get(`/announcements`, getAnnouncementsControllers);

router.post(`/announcement/add`, createAnnouncementControllers);
router.patch(`/announcement/updata/:announId`, patchUpdateControllers);

export default router;
