import { Router } from 'express';
import users from '../routers/users.js'
import announcements from '../routers/announcements.js'


const router = Router();
router.use(users);
router.use(announcements);

export default router;
