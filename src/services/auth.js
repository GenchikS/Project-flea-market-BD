import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { UsersCollection } from '../db/models/user.js';
import createHttpError from 'http-errors';
import { SessionsCollection } from '../db/models/session.js';
import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/index.js';

export const postRegisterUser = async (payload) => {
  // console.log(`createUser`, payload);
  const { email } = payload;
  // console.log(`email`, email);
  const userEmail = await UsersCollection.findOne({ email: email });
  // console.log('userEmail', userEmail);

   if (userEmail) {
     throw createHttpError(
       409,
       `Користувача з данним email вже зареєстровано!`,
     );
   }
    const encryptedPassword = await bcrypt.hash(payload.password, 10);
  return await UsersCollection.create({
      ...payload,
      password: encryptedPassword,
    });
};


export const postLoginUser = async (payload) => {
    // const { email } = payload;
    // console.log(`email`, payload.email);
    const user = await UsersCollection.findOne({ email: payload.email });
    // console.log(`user`, user);
    if (!user) {
        throw createHttpError(401, `Користувача з даним email не знайдено!`)
    }
     const isPassword = await bcrypt.compare(payload.password, user.password);
     if (!isPassword) {
       throw createHttpError(401, `Не вірний пароль!`);
     }

  await SessionsCollection.deleteOne({ idUser: user._id })

  const accessToken = randomBytes(30).toString(`base64`);
  const refreshToken = randomBytes(30).toString(`base64`);

   const sessionUser = await SessionsCollection.create({
      idUser: user._id,
      accessToken,
      refreshToken,
      accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
      refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
    });

  return {
    sessionId: sessionUser._id,
    idUser: sessionUser.idUser,
    accessToken: sessionUser.accessToken,
    refreshToken: sessionUser.refreshToken,
    name: user.name,
    role: user.role,
    email: user.email,
    phone: user.phone,
  };
}


export const logoutUser = async (sessionId) => {
  // console.log(`sessionId`, sessionId);
  const sessionUserId = await SessionsCollection.findOne({ _id: sessionId });
  if (sessionUserId) {
     await SessionsCollection.deleteOne({ _id: sessionId });
  }
return;
};


export const findSession = (filter) => SessionsCollection.findOne(filter);
