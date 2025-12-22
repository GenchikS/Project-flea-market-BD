import createHttpError from "http-errors";
import { getSessionUser } from "../services/session.js";

export const getSessionUserControllers = async (req, res, next) => {
    // console.log(`req.body`, req.body);
    // const accessToken = req.body.accessToken;
    const usersSession = await getSessionUser(req.body);
  console.log('usersSession', usersSession);
  if (!usersSession) {
    // console.log(`Not userById`);
    throw createHttpError(404, `Авторизуйтеся!`);
  }
    res.json({
      status: 200,
      message: 'Successfully found users!',
      data: usersSession,
    });
}
