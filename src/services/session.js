import { SessionsCollection } from "../db/models/session.js";
import { UsersCollection } from "../db/models/user.js";

export const getSessionUser = async (payload) => {
  // console.log(`payload token`, payload);
  const response = await SessionsCollection.findOne({
    accessToken: payload.accessToken,
  });

 if (!response) {
    return null;
  }

   const { idUser } = response;
  //  console.log(`idUser`, idUser);
  if (response) {
    const user = await UsersCollection.findOne({ _id: idUser });
      if (!user) {
        return null;
        }

    const userSession = {
      _id: user._id,
      name: user.name,
      role: user.role,
      email: user.email,
      phone: user.phone,
    };
    return userSession;
  }
return userSession;
};
