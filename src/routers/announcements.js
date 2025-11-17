import { Router } from "express";
import { createAnnouncementControllers, deleteAnnouncementControllers, getAnnouncementsControllers, patchUpdateControllers } from "../controllers/announcements.js";



const router = Router();

router.get(`/announcements`, getAnnouncementsControllers);

router.post(`/announcement/add`, createAnnouncementControllers);
router.patch(`/announcement/updata/:announId`, patchUpdateControllers);
router.delete(`/announcement/delete/:announId`, deleteAnnouncementControllers);

export default router;
