import { AnnouncementsCollection } from "../db/models/announcement.js";
import { UsersCollection } from "../db/models/user.js";




// const parseSourceChapter = (announcementsAll, chapter) =>
//   announcementsAll.filter((announcement) => announcement.chapter === chapter);

export const getAllAnnouncements = async (payload) => {
  const announcementsAll = await AnnouncementsCollection.find();
  // console.log(`announcementsAll length`, announcementsAll.length);
  // console.log(`announcementsAll`, announcementsAll);
  // console.log(`source`, source);
  const { chapter, category, purchaseSale } = payload;
  // console.log(`chapter`, chapter);
  // console.log(`category`, category);
  // console.log(`purchaseSale`, purchaseSale);
  const chapterFilter = announcementsAll.filter((announcement) =>
    chapter ? announcement.chapter === chapter : true
  );
  // console.log(`chapterFilter`, chapterFilter);
  const categoryFilter = chapterFilter.filter((announcement) =>
    category ? announcement.category === category : true
  );
  // console.log(`categoryFilter`, categoryFilter);
const purchaseSaleFilter = categoryFilter.filter((announcement) =>
    purchaseSale ? announcement.purchaseSale === purchaseSale : true
  );
  // console.log(`purchaseSaleFilter`, purchaseSaleFilter);
  return purchaseSaleFilter;
};


export const getAnnouncementById = async (payload) => {
  const { id } = payload;
  // console.log(`id services`, id);
  const announcementById = await AnnouncementsCollection.findById(id);
  if (announcementById) {
    // console.log(`announcementById`, announcementById);
    return announcementById;
  }
  if (!announcementById) {
    // console.log(`id services 2`, id);
    const announcementByIdUser = await AnnouncementsCollection.find({ idUser: id });
    // console.log(`announcementByIdUser`, announcementByIdUser);
    if (announcementByIdUser.length > 0) return announcementByIdUser;
    return null;
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
