import { Router } from "express";
import { createAnnouncementControllers, deleteAnnouncementControllers, getAnnouncementsControllers, getAnnouncementsIdControllers, patchUpdateControllers } from "../controllers/announcements.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";



const router = Router();

router.get(`/announcements`, getAnnouncementsControllers);
router.get(`/announcements/:id`, ctrlWrapper(getAnnouncementsIdControllers));
router.post(`/announcement/add`, createAnnouncementControllers);
router.patch(`/announcement/updata/:announId`, patchUpdateControllers);
router.delete(`/announcement/delete/:announId`, deleteAnnouncementControllers);

export default router;
