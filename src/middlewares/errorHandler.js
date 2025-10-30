import HttpError from 'http-errors';
// 3.1.10 Створення кастомної мідлвари для обробок помилок та видалемо її з server.js
export const errorHandler = (err, req, res, next) => {
  // 3.1.15 Допрацюємо обробник помилок з 500 на 404
  // console.log(`err errorHandler`, err);
  // console.log(`err.status errorHandler`, err.status);
  // console.log(`err instanceof HttpError`, err instanceof HttpError);

  if (err) {
        res.status(err.status).json({
            status: err.status,
            message: err.name,
          });
        return;
  }

  res.status(500).json({
    message: `Something went wrong`,
    error: err.message,
  });
};


// 3.1.9 Попереднє в файлі src/routers/users.js
// 3.1.11 Наступне в файлі server.js

// 3.1.14 Попереднє в файлі src/controllers/users.js
// 3.1.15 Останнє
// 3.2.1 Наступне в файлі server.js
