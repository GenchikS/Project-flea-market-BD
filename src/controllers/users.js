// 3.1.3 Створюємо контроллери запитів (забираємо з routers/users.js запити)

import { getAllUsers, getUserById } from "../services/users.js";

// 3.1.3.1 Створюємо контроллери запиту
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

// 3.1.3.2 Створюємо контроллери запиту
export const getUserControllersById = async (req, res, next) => {
     const { userId } = req.params;
        //  console.log('userId1', userId);
            const userById = await getUserById(userId);
            if (!userById) {
                // res.status(404).json({
                //     message: `User not found`
                // });
// 3.1.5 Замінемо обробку на мідлвару Error, якак в serser.js перехопить помилку та massage.error
                next(new Error(`User not found`));
                return;
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

