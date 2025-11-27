import { Router } from 'express';
import users from '../routers/users.js'
import announcements from '../routers/announcements.js'
import auth from '../routers/auth.js';


const router = Router();
router.use(users);
router.use(announcements);
router.use(auth);

export default router;
