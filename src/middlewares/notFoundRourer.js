// 3.1.12 Створення кастомної мідлвари для помилки маршруру
export const notFoundRouter = (req, res, next) => {
    res.status(404).json({
      message: `Route not found`,
    });
}

// 3.1.11 Попереднє в файлі server.js
// 3.1.13 Наступне в файлі server.js
