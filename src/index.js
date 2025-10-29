// 1.1.1 npm init -y
// 1.1.2 npm install --save-dev nodemon
// 1.1.3 "scripts": {
//      "dev": "nodemon src/index.js"
//       }
// 1.1.4 npm init @eslint/config@latest
// 1.1.5 Створення файлу editorconfig
// 1.1.6 Створення файлу prettierc
// 1.1.7 Створення файлу eslint.config.mjs
// 1.1.8 Доповнення файлу packege.json (type, lint, start)
// 1.1.9 Створення файлу gitignore
// 2.1.1 npm install express

import { initMongoDB } from "./db/initMongoDB.js";
import { startServer } from "./server.js";

// 2.1.9 npm install pino-http логування запитів (мідлвар)
// 2.1.10 npm i --save-dev pino-pretty форматування логування (мідлвар)
// import pino from 'pino-http';
// // 2.1.12 npm i cors
// import cors from 'cors';

// // const message = "Hello";
// // console.log(message);

// //  2.1.2 Ініціалізація серверу
// import express from 'express';

// const PORT = 3000;

// // 2.1.3 Запуск серверу
// const app = express();

// // 2.1.13 Додавання мідлвари cors
// app.use(cors());

// // 2.1.11 Додавання мідлвари логування (необхідно якомога вище у файлі)
// app.use(pino({
//     transport: {
//         target: `pino-pretty`,
//     }
// }))


// // 2.1.5 Побудова маршруту запиту (req - інформація про запит, res - відповідь)
// app.get('/', (req, res) => {
// // 2.1.6 Побудова відповіді res (Postman)
//     res.json({
//     message: 'Get'
// })
// });

// // 2.1.7 Додавання мідлвари роуту (якщо не знайдено жодного маршруту)
// app.use('', (req, res, next) => {
//   res.status(404).json({
//     message: 'Route not found',
//   });
// });

// // 2.1.8 Додавання мідлвари 500 помилки
// app.use((err, req, res, next) => {
//     res.status(500).json({
//         message: 'Something went wrong!',
//         error: err.message
//     })
// })



// //  2.1.4 Зчитування слухача
// app.listen(PORT, () => {
//     console.log(`Start server on port ${PORT}`)
// })

// 2.1.14 Перенесення коду в server.js
// 2.1.15 Створення старту сервера
// startServer();

// 2.2.10 Видаляємо 2.1.15 та створюємо нову ф-цію запуски сервера
const bootstrap = async () => {
    await initMongoDB();
    startServer();
}

bootstrap();

// 2.2.1 Наступне в файлі server.js

// 2.2.9 Попереднє в файлі db/initMongoDB.js

// 2.2.11 Наступне в файлі db/models/user.js
