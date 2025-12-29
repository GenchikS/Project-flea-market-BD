import createHttpError from 'http-errors';
import {
  deleteAnnouncementId,
  getAllAnnouncements,
  getAllAnnouncementsPagination,
  getAnnouncementById,
  patchAnnouncementId,
  postCreateAnnouncement,
} from '../services/announcements.js';

export const getAnnouncementsControllers = async (req, res, next) => {
  // console.log(`req.query`, req.query);
  // const source = req.query;
  // console.log(`source`, source);
  let { perPage, page } = req.query;
  perPage = perPage ?? 4;
  page = page ?? 1;
  const announcementsAll = await getAllAnnouncements(req.query);
  // console.log('announcementsAll', announcementsAll);
  const paginationData = await getAllAnnouncementsPagination(
    announcementsAll,
    perPage,
    page,
  );
  res.json({
    status: 200,
    message: 'Successfully found announcement',
    data: paginationData,
  });
};

export const getAnnouncementsIdControllers = async (req, res, next) => {
  // console.log(`req.params`, req.params);
  // const {id} = req.paramas;
  // console.log(`id`, id);
  const announcementsAll = await getAnnouncementById(req.params);
  if (!announcementsAll) {
    throw createHttpError(404, `Нажаль ваших оголошень не знайдено!`);
  }
  // console.log('getAnnouncementsControllers', announcementsAll);
  res.json({
    status: 200,
    message: 'Знайдені оголошення!',
    data: announcementsAll,
  });
};

export const createAnnouncementControllers = async (req, res, next) => {
  const response = await postCreateAnnouncement(req.body);
  // console.log(`response create`, response);
  if (!response) {
    throw createHttpError(404, `Користувача з данним id не знайдено!`);
  }
    res.status(201).json({
      status: 201,
      message: 'Successffully create announcent',
      data: response,
    });
};

export const patchUpdateControllers = async (req, res, next) => {
  const idAnnoun = req.params.announId;
  //   console.log(`idAnnoun`, idAnnoun);
  //   console.log(`userId patchUpdateControllers`, _id);
  //   console.log(`req.body patchUpdateControllers`, req.body);
  const patchAnnouncement = await patchAnnouncementId(idAnnoun, req.body, {
    upsert: true,
  });

  if (!patchAnnouncement) {
    throw (createHttpError(404, `Оголошення з данним id не знайдено!`));
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
    throw createHttpError(404, `Оголошення з данним id не знайдено!`);
  }
  res.status(204).send();
};
