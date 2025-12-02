import bcrypt from 'bcrypt';
import { UsersCollection } from '../db/models/user.js';
import createHttpError from 'http-errors';

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
    // console.log(`user`, user);
    if (!user) {
        throw createHttpError(401, `Користувача з даним email не знайдено!`)
    }
    const isPassword = await bcrypt.compare(payload.password, user.password);
    if (!isPassword) {
        throw createHttpError(401, `Не вірний пароль!`)
    }
    return user;
}
