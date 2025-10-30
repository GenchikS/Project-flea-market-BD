// 3.1.1 Створення роуту користувачів

import { Router } from "express";
// import { getAllUsers, getUserById } from "../services/users.js";
import { createUserControllers, getUserControllersById, getUsersControllers } from "../controllers/users.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

// 3.1.1.1 Пререносимо маршрути пов'язані з user з server.js
//    router.get(`/users`, async (req, res) => {
//      const usersAll = await getAllUsers();
//      // console.log('usersAll', usersAll);
//      res.status(200).json({
//        data: usersAll,
//      });
//    });

// 3.1.4.1 Видаляємо 3.1.1.1 та переносимо запит в src/controllers/users.js

// 3.1.9.1 Добавляємо обгортку ctrlWrapper для перевірки на помилку в try..catch..
router.get(`/users`, ctrlWrapper(getUsersControllers));

//     router.get(`/user/:userId`, async (req, res) => {
//      const { userId } = req.params;
//     //  console.log('userId1', userId);
//         const userById = await getUserById(userId);
//         if (!userById) {
//             res.status(404).json({
//                 message: `User not found`
//             });
//             return;
//         }
//           res.status(200).json({
//             data: userById,
//           });
//    });
// 3.1.4.2 Видаляємо 3.1.1.1 та переносимо запит в src/controllers/users.js

// 3.1.9.2 Добавляємо обгортку ctrlWrapper для перевірки на помилку в try..catch..
router.get(`/users/:userId`, ctrlWrapper(getUserControllersById));

// 3.2.3 Створюємо маршрут додавання користувача та контроллер
router.post(`/users`, createUserControllers)


export default router;

// 2.2.14 Попереднє в файлі service/users.js
// 3.1.2 Наступне в файлі server.js

// 3.1.3 Попереднє в файлі src/controllers/users.js
// 3.1.5 Наступне в файлі src/controllers/users.js

// 3.1.8 Попереднє в файлі src/utils/ctrlWrapper.js
// 3.1.10 Наступне в файлі src/middlwares/errorHandler.js

// 3.2.2 Попереднє в файлі src/services/users.js
// 3.2.4 Наступне в файлі src/controllers/users.js
