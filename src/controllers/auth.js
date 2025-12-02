import createHttpError from 'http-errors';
import { postLoginUser, postRegisterUser } from '../services/auth.js';

export const registerUserControllers = async (req, res, next) => {
  const createUser = await postRegisterUser(req.body);
  if (!createUser) {
    throw createHttpError(409, `Користувача з данним email вже зареєстровано!`)
  }
    // console.log(`createUser`, createUser);
  res.status(201).json({
    status: 201,
    message: `Successfully created a user!`,
    data: createUser,
  });
};


export const loginUserControllers = async (req, res, next) => {
  const loginUser = await postLoginUser(req.body);
  // console.log(`loginUser`, loginUser);
  res.status(200).json({
    status: 200,
    massege: `Found user!`,
    data: loginUser,
  });
}
