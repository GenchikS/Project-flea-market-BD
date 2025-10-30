// 2.2.1 Перенесли данні в файл server.js
import pino from 'pino-http';
import cors from 'cors';
import express from 'express';
import { getEnvVar } from './utils/getEnvVar.js';
// import { getAllUsers, getUserById } from './services/users.js';
import usersRouter from './routers/users.js'
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundRouter } from './middlewares/notFoundRourer.js';

// видаляємо імпорти, бо були перенесені
// import dotenv from 'dotenv';


// 2.2.5 Добавляємо dotenv.config
    // dotenv.config();

// 2.2.6 Видалення константи PORT та зчитування через dotenv
// const PORT = 3000;
// const PORT = Number(process.env.PORT);

// 2.2.8 Наступне створення утіліти getEnvVar та видалення 2.2.5, 2.2.6
const PORT = Number(getEnvVar('PORT', '3000'))

export const startServer = () => {
  const app = express();

  app.use(cors());

  app.use(
    pino({
      transport: {
        target: `pino-pretty`,
      },
    }),
  );

  // 3.1.1.1 Переносимо  маршрути в src/routers/users.js
  //  app.get(`/users`, async (req, res) => {
  //   const usersAll = await getAllUsers();
  //   // console.log('usersAll', usersAll);
  //   res.status(200).json({
  //     data: usersAll
  //   });
  //  });

  // // 2.2.13 Створюємо маршрут user:ById
  // app.get(`/user/:userId`, async (req, res) => {
  //   const {userId} = req.params;
  //   console.log('userId1', userId);
  //    const userById = await getUserById(userId);
  //   res.status(200).json({
  //      data: userById,
  //    });
  //  });

  // 3.1.2 На заміну 3.1.1.1 строрюємо мідлвару та імпортуємо роути з src/routers/users.js
  app.use(usersRouter);

  // app.use('', (req, res, next) => {
  //   res.status(404).json({
  //     message: 'Route not found',
  //   });
  // });
  // 3.1.12 Видаляємо маршрут app.use('', (req, res, next)) та змінюємо його на використання мідлвари notFoundRouter
  app.use(notFoundRouter);

  // 3.1.11.1 Видалення маршруту обробки помилок (створена для цього кастомна мідлвара errorHandler)
  // app.use((err, req, res, next) => {
  //   res.status(500).json({
  //     message: 'Something went wrong!',
  //     error: err.message,
  //   });
  // });
  // 3.1.11.2 На зміну app.use((err, req, res, next)) робимо через мідлвару errorHandler
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Start server on port ${PORT}`);
  });
}

// 2.1.15 Попереднє в файлі index.js
// 2.2.2 Створення папок .env та .envexample
// 2.2.3 Наступне в файлах .env та .envexample
// 2.2.4 Встановлюємо npm install dotenv для зчитування змінних оточення

// 2.2.7 Наступне створення утіліти utils/getEnvVar.js

// 2.2.7 Попереднє створення утіліти utils/getEnvVar.js
// 2.2.9 Наступне створення файлу підключення до MongoDB db/initMongoDB.js

// 2.2.12 Попереднє в файлі service/users.js
// 2.2.14 Наступне в файлі services/users.js

// 2.2.14 Попереднє в файлі service/users.js
// останнє 2.2.14 service/user.js
// 3.1.1 Наступне в файлі src/routers/users.js

// 3.1.1 Попереднє в файлі src/routers/users.js
// 3.1.3 Наступне в файлі src/controllers/users.js

// 3.1.10 Попереднє в файлі src/middlwares/errorHandler.js
// 3.1.12 Наступне в файлі src/middlwares/notFoundRouret.js

// 3.1.12 Попереднє в файлі src/middlwares/notFoundRouret.js
// 3.1. Наступне в файлі src/middlwares/notFoundRouret.js

// останнє 2.2.15 service/user.js
