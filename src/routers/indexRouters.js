import { Router } from 'express';
import users from '../routers/users.js'
import announcements from '../routers/announcements.js'
import authRouter from '../routers/auth.js';
// import { authenticate } from '../middlewares/authenticate.js';


const router = Router();
// router.use(authenticate)
router.use(users);
// router.use(announcements);
router.use(authRouter);

export default router;
