// 2.2.7 Створення утіліти для перевірки наявності порту
import dotenv from 'dotenv';

dotenv.config();

export const getEnvVar = (name, defaultValue) => {
    const value = process.env[name];

    if (value)
        return value;

    if (defaultValue) return defaultValue;

    throw new Error(`Missing process.env['${name}'].`)
}

// 2.2.6 Попереднє в файлі server.js
// 2.2.8 Наступне в файлі server.js
