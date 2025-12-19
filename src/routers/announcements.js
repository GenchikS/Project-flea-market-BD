import { Router } from "express";
import { createAnnouncementControllers, deleteAnnouncementControllers, getAnnouncementsControllers, getAnnouncementsIdControllers, patchUpdateControllers } from "../controllers/announcements.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { authenticate } from "../middlewares/authenticate.js";



const router = Router();

// необхідно для перевірки всіх роутерів на авторизованого користувача
// router.use(authenticate);

router.get(`/announcements`, getAnnouncementsControllers);
router.get(`/announcements/:id`, ctrlWrapper(getAnnouncementsIdControllers));
router.post(`/announcement/add`, ctrlWrapper(createAnnouncementControllers));
router.patch(
  `/announcement/updata/:announId`,
  ctrlWrapper(patchUpdateControllers),
);
router.delete(
  `/announcement/delete/:announId`,
  ctrlWrapper(deleteAnnouncementControllers),
);

export default router;
