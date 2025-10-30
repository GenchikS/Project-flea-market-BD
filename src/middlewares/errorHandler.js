// 3.1.10 Створення кастомної мідлвари для обробок помилок та видалемо її з server.js

export const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        message: `Something went wrong`,
        error: err.message,
    })
}

// 3.1.9 Попереднє в файлі src/routers/users.js
// 3.1.11 Наступне в файлі server.js
