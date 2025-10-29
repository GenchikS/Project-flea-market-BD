// 2.2.12 Створення сервісу користувачів

import { UsersCollection } from '../db/models/user.js';

export const getAllUsers = async () => {
    console.log('getAllUsers');
    const users = await UsersCollection.find();
    console.log('users');
    return users;
}


// 2.2.11 Попереднє в файлі db/models/user.js
// 2.2.13 Наступне в файлі server.js
