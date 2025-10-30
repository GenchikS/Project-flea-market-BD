import { UsersCollection } from '../db/models/user.js';

// 2.2.12 Створення сервісу користувачів (пошук)
export const getAllUsers = async () => {
    // console.log('getAllUsers');
    const users = await UsersCollection.find();
return users;
}

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
  const user = await UsersCollection.create(payload)
  return user;;
};

// 3.2.1 Попереднє в файлі server.js
// 3.2.3 Наступне в файлі src/routers/users.js

export const deleteUserId = async (userId) => {
  const user = await UsersCollection.findByIdAndDelete({ _id: userId });
  return user;
}

// 3.2.4 Попереднє в файлі src/controllers/users.js
// 3.2.5.2 Наступне в файлі src/routers/users.js, src/controllers/users.js

