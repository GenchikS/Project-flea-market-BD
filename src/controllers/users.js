// 3.1.3 Створюємо контроллери запитів (забираємо з routers/users.js запити)

import createHttpError from "http-errors";
import { getAllUsers, getUserById, postCreateUser } from "../services/users.js";

// 3.1.3.1 Створюємо контроллер запиту
export const getUsersControllers = async (req, res, next) => {
  // 3.1.6 Добавляємо next та try..catch.. для обробок помилок
  // try {
  //      const usersAll = await getAllUsers();
  //      // console.log('usersAll', usersAll);
  //      res.json({
  //        status: 200,
  //        message: 'Successfully found users!',
  //        data: usersAll,
  //      });
  // } catch (error) {
  //     next(error);
  // }
  // 3.1.7 Щоб постійно не оготрати всі виклики в try..catch.. створюєсться обгортка перевірки в src/utils/ctrlWrapper.js. видаляємо 3.1.6
  const usersAll = await getAllUsers();
  // console.log('usersAll', usersAll);
  res.json({
    status: 200,
    message: 'Successfully found users!',
    data: usersAll,
  });
}

// 3.1.14 Видалим next та встановимо npm install http-errors для зміни помилки з 500 на 404
// 3.1.3.2 Створюємо контроллер запиту
export const getUserControllersById = async (req, res, next) => {
    const { userId } = req.params;
    const userById = await getUserById(userId);
  if (!userById) {
    console.log(`Not userById`);
              // res.status(404).json({
                  // message: `User not found`
              // });
              // 3.1.5 Замінемо обробку на мідлвару Error, якак в serser.js перехопить помилку та massage.error
              // next(new Error(`User not found`));
              // return;
              // 3.1.14 Видалим next для зміни помилки з 500 на 404 + в файлі src/middlwares/errorHandler.js
              throw createHttpError(404, `User not found!`);
            }
        res.json({
          status: 200,
          message: `Successfully found user with id ${userId}`,
          data: userById,
        });
}

// 3.1.2 Попереднє в файлі server.js
// 3.1.4 Наступне в файлі src/routers/users.js

// 3.1.2 Попереднє в файлі src/routers/users.js
// 3.1.8 Наступне в файлі src/utils/ctrlWrapper.js

// 3.1.13 Попереднє в файлі server.js
// 3.1.15 Наступне в файлі src/middlwares/errorHandler.js

// 3.2.4 Створюємо контроллер POST запиту
export const createUserControllers = async (req, res, next) => {
  const createUser = await postCreateUser(req.body);
  res.status(201).json({
    status: 201,
    message: `Successfully created a user!`,
    data: createUser,
  });
}


// 3.2.3 Попереднє в файлі src/routers/users.js
// 3.2.5 Наступне в файлі src/services/users.js
