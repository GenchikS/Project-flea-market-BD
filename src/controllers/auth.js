import createHttpError from 'http-errors';
import { logoutUser, postLoginUser, postRegisterUser } from '../services/auth.js';
import { ONE_DAY } from '../constants/index.js';

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
  // const loginUser = await postLoginUser(req.body);
  const session = await postLoginUser(req.body);

  // console.log(`loginUser`, loginUser);
  res.cookie(`refreshToken`, session.createNewSession.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });
  res.cookie('sessionId', session.createNewSession._id, {
    httpOnly: true,
    expires: new Date(Date.now() + ONE_DAY),
  });

  // console.log(`session`, session);

  res.status(200).json({
    status: 200,
    massege: `Found user!`,
    data: session.user,
    sessionId: session.createNewSession._id,
    token: session.createNewSession.accessToken,
  });
}


export const logoutUserControllers = async (req, res) => {
  // console.log(`req`, req.params);
  // const {sessionId} = req.cookies;
  // console.log(`sessionId`, sessionId);

  // if (sessionId)
    // if (req.cookies.sessionId) {
      // console.log(`req.cookies.sessionId`, req.cookies.sessionId);

      // await logoutUser(req.cookies.sessionId);
    // }
  // if (!req.cookies.sessionId) {
      await logoutUser(req.body);
  //     // throw createHttpError(401, `Помилка авторизації!`);
  //   }
  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');
  res.status(204).send();
}
