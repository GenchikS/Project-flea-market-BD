import { Router } from 'express';
import { getSessionUserControllers } from '../controllers/session.js';

const sessionRouter = Router();

sessionRouter.post(`/session/refresh`, getSessionUserControllers);

export default sessionRouter;
