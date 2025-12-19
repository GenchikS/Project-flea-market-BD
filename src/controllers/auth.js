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
      name: session.name,
      email: session.email,
      role: session.role,
    },
    // sessionId: session._id,
    // data: {
    // accessToken: session.accessToken
    // },
  });
}


// export const logoutUserControllers = async (req, res, next) => {
//   const { sessionId } = req.body;
//   // console.log(`sessionId:`, sessionId);
//   const response = await logoutUser(sessionId);

//     if (!sessionId) {
//       throw createHttpError(401, `Помилка авторизації!`);
//     }

//   res.clearCookie('sessionId');
//   res.clearCookie('refreshToken');
//   res.status(201).json({
//     status: 201,
//     massege: `Вихід виконано!`,
//     error: response,
//   });
// }

export const logoutUserControllers = async (req, res, next) => {
  // console.log(`req.cookies.sessionId:`, req.cookies);
  if (req.cookies.sessionId) {
    await logoutUser(req.cookies.sessionId);
  }

      if (!req.cookies.sessionId) {
        throw createHttpError(401, `Помилка авторизації!`);
      }

  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');

  res.status(204).send();
};


