import { deleteAnnouncementId, getAllAnnouncements, getAnnouncementById, patchAnnouncementId, postCreateAnnouncement } from "../services/announcements.js";


export const getAnnouncementsControllers = async (req, res, next) => {
  // console.log(`req.query`, req.query);
  // const source = req.query;
  // console.log(`source`, source);
  const announcementsAll = await getAllAnnouncements(req.query);
    // console.log('getAnnouncementsControllers', announcementsAll);
    res.json({
        status: 200,
        message: 'Successfully found announcement',
        data: announcementsAll,
    });
}


export const getAnnouncementsIdControllers = async (req, res, next) => {
  console.log(`req.params`, req.params);
  // const {id} = req.paramas;
  // console.log(`id`, id);
  const announcementsAll = await getAnnouncementById(req.params);
  // console.log('getAnnouncementsControllers', announcementsAll);
  res.json({
    status: 200,
    message: 'Successfully found announcement',
    data: announcementsAll,
  });
};


export const createAnnouncementControllers = async (req, res, next) => {
    const response = await postCreateAnnouncement(req.body);
    res.status(201).json({
        status: 201,
        message: "Successffully create announcent",
        data: response
    })
}


export const patchUpdateControllers = async (req, res, next) => {
  const idAnnoun = req.params.announId;
//   console.log(`idAnnoun`, idAnnoun);
//   console.log(`userId patchUpdateControllers`, _id);
//   console.log(`req.body patchUpdateControllers`, req.body);
  const patchAnnouncement = await patchAnnouncementId(idAnnoun, req.body, {
    upsert: true,
  });

  if (!patchAnnouncement) {
    next(createHttpError(404, `User not found!`));
    return;
  }

  res.status(201).json({
    status: 201,
    message: `Successfully patched a user!`,
    data: patchAnnouncement,
  });
};


export const deleteAnnouncementControllers = async (req, res, next) => {
  const { announId } = req.params;
//   console.log(`announId deleteUserControllers`, announId);
  const deleteAnnouncement = await deleteAnnouncementId(announId);
  if (!deleteAnnouncement) {
    next(createHttpError(404, `Not found user`));
    return;
  }
  res.status(204).send();
}

