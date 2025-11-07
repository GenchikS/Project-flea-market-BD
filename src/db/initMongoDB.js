import { getEnvVar } from '../utils/getEnvVar.js';
import mongoose from 'mongoose';
// 2.2.9 Створення файлу підключення до MongoDB
// 2.2.9.1 інсталюємо бібліотеку npm install mongoose

export const initMongoDB = async (name) => {
  try {
    const user = getEnvVar('MONGODB_USER');
    const pwd = getEnvVar('MONGODB_PASSWORD');
    const url = getEnvVar('MONGODB_URL');
    const db = getEnvVar('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?appName=Cluster0&name=${name}`,
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log(`Error while setting up mongo connection`, error);
  }
};

// 2.2.8 Попереднє в файлі server.js
// 2.2.10 Наступне в файлі src/index.js



