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

  if(userEmail) return null;

    const encryptedPassword = await bcrypt.hash(payload.password, 10);
    const user = await UsersCollection.create({
      ...payload,
      password: encryptedPassword,
    });

  return user;
};


export const postLoginUser = async (payload) => {
    // const { email } = payload;
    // console.log(`email`, payload.email);
    const user = await UsersCollection.findOne({ email: payload.email });
    console.log(`user`, user);
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
  return await SessionsCollection.create({
    idUser: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY)
    })
}
