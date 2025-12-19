import { Router } from "express";
import { loginUserControllers, logoutUserControllers, registerUserControllers } from "../controllers/auth.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { loginUserSchema, registerUserSchema } from "../validation/auth.js";
import { validateBody } from "../middlewares/validateBody.js";


const authRouter = Router();

authRouter.post(
  `/auth/register`,
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserControllers),
);
authRouter.post(
  `/auth/login`,
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserControllers),
);
authRouter.post(`/auth/logout`, ctrlWrapper(logoutUserControllers));

export default authRouter;
