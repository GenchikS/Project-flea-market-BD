import { SessionsCollection } from "../db/models/session.js";
import { UsersCollection } from "../db/models/user.js";

export const getSessionUser = async (payload) => {
//   console.log(`payload token`, payload);
  const response = await SessionsCollection.findOne({
    accessToken: payload.accessToken,
  });
    // console.log(`response accessToken`, response);

    if (response) {
        const user = await UsersCollection.findOne({ idUser: payload.idUser });
        // console.log(`user`, user);
        const userSession = {
          _id: user._id,
          name: user.name,
          role: user.role,
          email: user.email,
          phone: user.phone,
        };
        return userSession;
    }

    if (!response) {
        return null;
    }

return usersSession;
};
