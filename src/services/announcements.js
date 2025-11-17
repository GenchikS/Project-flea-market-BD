import { AnnouncementsCollection } from "../db/models/announcement.js";
import { UsersCollection } from "../db/models/user.js";

export const getAllAnnouncements = async () => {
    const announcementsAll = await AnnouncementsCollection.find();
    // console.log('getAllAnnouncements', announcementsAll);
    return announcementsAll;
}

export const postCreateAnnouncement = async (payload) => {
    const announcement = await AnnouncementsCollection.create(payload);
    return announcement
}

export const patchAnnouncementId = async (idAnnoun, payload) => {
//   console.log(`idAnnoun services`, idAnnoun);
//   console.log(`payload services`, payload);
  const announcementResutl = await AnnouncementsCollection.findOneAndUpdate(
    { _id: idAnnoun },
    payload,
    {
      new: true,
    },
  );

    if (!announcementResutl) return null;
    // console.log(`announcementResutl`, announcementResutl);
    return announcementResutl;
};

export const deleteAnnouncementId = async (announId) => {
    // console.log(`announId deleteAnnonucementId`, announId);
    const id = announId;
    console.log(`id deleteAnnonucementId`, id);
  const announcement = await AnnouncementsCollection.findByIdAndDelete(id);
  return;
};
