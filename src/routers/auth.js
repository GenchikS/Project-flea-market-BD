import { Router } from "express";
import { loginUserControllers, registerUserControllers } from "../controllers/auth.js";




const router = Router();

// router.get(`/announcements`, getAnnouncementsControllers);
// router.get(`/announcements/:id`, getAnnouncementsIdControllers);
router.post(`/auth/register`, registerUserControllers);
router.post(`/auth/login`, loginUserControllers);

// router.patch(`/announcement/updata/:announId`, patchUpdateControllers);
// router.delete(`/announcement/delete/:announId`, deleteAnnouncementControllers);

export default router;
