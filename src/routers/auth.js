import { Router } from "express";
import { loginUserControllers, registerUserControllers } from "../controllers/auth.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { loginUserSchema, registerUserSchema } from "../validation/auth.js";
import { validateBody } from "../middlewares/validateBody.js";




const router = Router();

// router.get(`/announcements`, getAnnouncementsControllers);
// router.get(`/announcements/:id`, getAnnouncementsIdControllers);
router.post(
  `/auth/register`,
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserControllers),
);
router.post(`/auth/login`, validateBody(loginUserSchema), ctrlWrapper(loginUserControllers));

// router.patch(`/announcement/updata/:announId`, patchUpdateControllers);
// router.delete(`/announcement/delete/:announId`, deleteAnnouncementControllers);

export default router;
