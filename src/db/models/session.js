
import { Schema, model } from "mongoose";

const sessionsSchema = new Schema(
  {
    idUser: { type: Schema.Types.ObjectId, ref: `users`, required: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const SessionsCollection = model(`sessions`, sessionsSchema);

//  ref: `users` - з якої таблиці брати id
