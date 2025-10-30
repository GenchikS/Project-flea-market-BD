// 3.1.8 Створюємо обгортку на перевірку помилки запиту в контроллері на try..catch..

export const ctrlWrapper = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (error) {
            console.log('error Wrapper', error);
            next(error);
        }
   }
}

// 3.1.7 Попереднє в файлі src/controllers/users.js
// 3.1.9 Наступне в файлі src/routers/users.js
