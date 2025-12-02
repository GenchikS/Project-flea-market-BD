import createHttpError from 'http-errors';
import { postCreateUser } from '../services/users.js';

export const registerUserControllers = async (req, res, next) => {
  const createUser = await postCreateUser(req.body);
  if (!createUser) {
    throw createHttpError(404, `Користувача з данним email вже зареєстровано!`)
  }
    console.log(`createUser`, createUser);
  res.status(201).json({
    status: 201,
    message: `Successfully created a user!`,
    data: createUser,
  });
};


export const loginUserControllers = async (req, res, next) => {
    console.log(`login`)
}
