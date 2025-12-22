import { Router } from 'express';
import { getSessionUserControllers } from '../controllers/session.js';

const sessionRouter = Router();

sessionRouter.get(`/session/refresh`, getSessionUserControllers);

export default sessionRouter;
