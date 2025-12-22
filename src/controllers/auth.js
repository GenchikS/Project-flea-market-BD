import createHttpError from 'http-errors';
import { logoutUser, postLoginUser, postRegisterUser } from '../services/auth.js';

export const registerUserControllers = async (req, res) => {
  const createUser = await postRegisterUser(req.body);

    // console.log(`createUser`, createUser);
  res.status(201).json({
    status: 201,
    message: `Користувача зареєстровано!`,
    data: createUser,
  });
};


export const loginUserControllers = async (req, res) => {
  // const loginUser = await postLoginUser(req.body);
  const session = await postLoginUser(req.body);
  // console.log(`loginUser`, loginUser);

  // console.log(`session`, session);
  res.cookie(`refreshToken`, session.refreshToken, {
    httpOnly: true,
    expires: session.refreshTokenValidUntil,
  });
  res.cookie('sessionId', session.sessionId, {
    httpOnly: true,
    expires: session.refreshTokenValidUntil,
  });

  res.status(200).json({
    status: 200,
    massege: `Found user!`,
    data: {
      sessionId: session.sessionId,
      idUser: session.idUser,
      accessToken: session.accessToken,
      role: session.role,
      name: session.name,
      email: session.email,
      phone: session.phone,
    },
  });
}


export const logoutUserControllers = async (req, res, next) => {
  // console.log(`req.cookies`, req.cookies);
  // console.log(`req.body`, req.body);
  const { sessionId } = req.body;

  if (!sessionId) {
    throw createHttpError(401, `Помилка авторизації!`);
  }

  if (sessionId) {
     await logoutUser(sessionId);
  }

  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');

  res.status(201).json({
    status: 201,
    massege: `Вихід виконано!`,
  });
};


