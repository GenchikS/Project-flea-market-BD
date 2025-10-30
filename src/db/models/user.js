// 2.2.11 Створення схеми user
import { model, Schema } from 'mongoose';

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    // password: {
    //   type: String,
    //   required: true,
    // },
    phone: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      emun: ['admin', 'user'],
      default: `user`,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const UsersCollection = model('users', usersSchema);

// 2.2.10 Попереднє в файлі server.js
// 2.2.12 Наступне в файлі src/services/user.js
