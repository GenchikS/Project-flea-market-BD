import { Router } from 'express';
import { getSessionUserControllers } from '../controllers/session.js';

const sessionRouter = Router();

sessionRouter.post(`/session/refresh`, getSessionUserControllers);
// sessionRouter.get(`/session/refresh`, getSessionUserControllers);

export default sessionRouter;
