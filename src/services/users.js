import { UsersCollection } from '../db/models/user.js';

// 2.2.12 Створення сервісу користувачів (пошук)
export const getAllUsers = async (filter) => {
  // console.log('filter', filter);
  const { name, email } = filter;

  // console.log(`email`, email);




  if (name) {
    const userName = await UsersCollection.find({ name: name });
    // console.log('userName', userName.data);
    return userName;
  }

  if (email) {
    const userEmail = await UsersCollection.find({ email: email });
    // console.log('userEmail', userEmail);
    return userEmail;
  }

  const users = await UsersCollection.find();

  return filter && users;

};

// 2.2.14 Створення сервісу користувачів (пошук за id)
export const getUserById = async (userId) => {
  const user = await UsersCollection.findById(userId);
  // console.log('user', user);
  return user;
};


// 2.2.11 Попереднє в файлі db/models/user.js
// 2.2.13 Наступне в файлі server.js

// 2.2.13 Попереднє в файлі server.js
// 3.1.1 Наступне в файлі server.js (створення роутів)


// 3.2.2. Створюємо ф-цію додавання користувача
export const postCreateUser = async (payload) => {
  // console.log(`createUser`, payload);
  const user = await UsersCollection.create(payload);

  return user;;
};

// 3.2.1 Попереднє в файлі server.js
// 3.2.3 Наступне в файлі src/routers/users.js

// 3.2.5. Створюємо ф-цію видалення користувача
export const deleteUserId = async (userId) => {
  // console.log(`userId deleteUserId`, userId);
  const user = await UsersCollection.findByIdAndDelete({ _id: userId });
  return user;
}

// 3.2.4 Попереднє в файлі src/controllers/users.js
// 3.2.5.1 Наступне в файлі src/routers/users.js, src/controllers/users.js

// 3.2.6.1 Створюємо ф-цію редагування користувача
export const patchUserId = async (userId, payload) => {
  // console.log(`payload`, payload);
  const userResutl = await UsersCollection.findOneAndUpdate(
    { _id: userId },
    payload,
    {
      new: true,
    },
  );

  if (!userResutl) return null;

  return userResutl;
};

// 3.2.5 Попереднє в файлі src/services/users.js
// 3.2.6.2 Наступне в файлі src/routers/users.js, src/controllers/users.js
