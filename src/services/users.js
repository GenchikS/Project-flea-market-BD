import { UsersCollection } from '../db/models/user.js';

// 2.2.12 Створення сервісу користувачів (пошук)
export const getAllUsers = async () => {
    // console.log('getAllUsers');
    const users = await UsersCollection.find();
return users;
}

// 2.2.14 Створення сервісу користувачів (пошук за id)
export const getUserById = async (userId) => {
  console.log('userId2');
  const user = await UsersCollection.findById(userId);
return user;
};

// 2.2.11 Попереднє в файлі db/models/user.js
// 2.2.13 Наступне в файлі server.js

// 2.2.13 Попереднє в файлі server.js
// 2.2.15 Наступне в файлі server.js
