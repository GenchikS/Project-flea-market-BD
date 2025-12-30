import createHttpError from "http-errors";
import { AnnouncementsCollection } from "../db/models/announcement.js";
import { UsersCollection } from "../db/models/user.js";
import { calculatePagonationData } from "../utils/calculatePagonationData.js";


export const getAllAnnouncements = async (payload) => {
  const { chapter, category, purchaseSale } = payload;
  // console.log(`chapter`, chapter);
  try {
    const announcementsAll = await AnnouncementsCollection.find();
    // console.log(`announcementsAll`, announcementsAll);

    const chapterFilter = announcementsAll.filter((announcement) =>
      chapter ? announcement.chapter === chapter : true,
    );
    // console.log(`chapterFilter`, chapterFilter);
    const categoryFilter = chapterFilter.filter((announcement) =>
      category ? announcement.category === category : true,
    );
    // console.log(`categoryFilter`, categoryFilter);
    const purchaseSaleFilter = categoryFilter.filter((announcement) =>
      purchaseSale ? announcement.purchaseSale === purchaseSale : true,
    );
    // console.log(`purchaseSaleFilter`, purchaseSaleFilter);

    return purchaseSaleFilter;
  } catch (error) {
    throw createHttpError(404, `Оголошеннь не знайдено!`);
  }
};


export const getAllAnnouncementsPagination = async (payload, perPage, page) => {
  console.log(`payload`, payload);
  // console.log(`perPage`, perPage);
  // console.log(`page`, page);

  try {
  const skip = Number((page - 1) * perPage);
    const limit = Number(perPage);

    console.log(`skip`, skip);
    console.log(`limit`, limit);


  const announcementData = payload.slice(skip, skip + limit);
  console.log(`announcementData`, announcementData);

  const announcementsCount = payload.length;
  const paginationData = calculatePagonationData(
    announcementsCount,
    perPage,
    page,
  );

  return {
    data: announcementData,
    ...paginationData,
  };
  } catch (error) {
    throw createHttpError(404, `Оголошеннь не знайдено!`);
  }
};


export const getAnnouncementById = async (payload) => {
  const { id } = payload;
  // console.log(`id services`, id);
  try {
    const announcementById = await AnnouncementsCollection.findById({_id: id});
    if (announcementById) {
      // console.log(`announcementById`, announcementById);
      return [announcementById];
    }
    if (!announcementById) {
      // console.log(`id services 2`, id);
      const announcementByIdUser = await AnnouncementsCollection.find({
        idUser: id,
      });
      return announcementByIdUser;
    }
  } catch (error) {
    if (error) {
      throw createHttpError(404, `Нажаль ваших оголошень не знайдено!`);
    }
  }
}


export const postCreateAnnouncement = async (payload) => {
  const { idUser } = payload;
  // const announcementByIdUser = await AnnouncementsCollection.find({ idUser: idUser });
  const announcementByIdUser = await UsersCollection.findById(idUser);
  // console.log(`announcementByIdUser`, announcementByIdUser);
  if (announcementByIdUser) {
  const announcement = await AnnouncementsCollection.create(payload);
  // console.log(`payload post`, payload);
  return announcement;
  }
  if(!announcementByIdUser) return null
// return null
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
    const id = announId;
    // console.log(`id deleteAnnonucementId`, id);
  const announcement = await AnnouncementsCollection.findByIdAndDelete(id);
  if(announcement) return announcement;
  if (!announcement) return null;
};
