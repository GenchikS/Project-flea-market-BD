import createHttpError from "http-errors";
import { findSession } from "../services/auth.js";

export const authenticate = async (req, res, next) => {
//   const { authorization } = req.headers;
  // або
    const authHeader = req.get("Authorization")
    if (!authHeader) {
        return next(createHttpError(401, "Неавторизований заголовок користувача!"))
    }
    // console.log('authHeader:', authHeader);

    const [bearer, token] = authHeader.split(" ")

    if (bearer !== "Bearer") {
        return next(
          createHttpError(401, 'Заголовок має мати тип Bearer!'),
        );
    }

    const session = await findSession({ accessToken: token });

    if (!session) {
        return next(createHttpError(401, 'Сесія не існує!'));
    }

    // перевірка токена на валідність (чи час життя не сплинув)
    if (Date.now() > session.accessTokenValidUntil) {
        return next(createHttpError(401, 'Час сесії сплинув!'));
    }

}
