// 2.2.1 Перенесли данні в файл server.js
import pino from 'pino-http';
import cors from 'cors';
import express from 'express';
import { getEnvVar } from './utils/getEnvVar.js';

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

    app.get('/', (req, res) => {
      res.json({
        message: 'Get',
      });
    });

    app.use('', (req, res, next) => {
      res.status(404).json({
        message: 'Route not found',
      });
    });

    app.use((err, req, res, next) => {
      res.status(500).json({
        message: 'Something went wrong!',
        error: err.message,
      });
    });

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
