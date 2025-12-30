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
  perPage = perPage ?? "6";
  page = page ?? "1";
  const announcementsAll = await getAllAnnouncements(req.query);
  // console.log('announcementsAll', announcementsAll);
  const paginationData = await getAllAnnouncementsPagination(
    announcementsAll,
    perPage,
    page,
  );
    res.json({
      status: 200,
      message: 'Знайдено оголошень:',
      data: paginationData,
    });
};

export const getAnnouncementsIdControllers = async (req, res, next) => {
  // console.log(`req.params`, req.params);
    let { perPage, page } = req.query;
    perPage = perPage ?? "6";
    page = page ?? "1";
  const announcementsAll = await getAnnouncementById(req.params);
  // console.log('getAnnouncementsControllers', announcementsAll);
  const paginationData = await getAllAnnouncementsPagination(
    announcementsAll,
    perPage,
    page,
  );

  res.json({
    status: 200,
    message: 'Знайдено оголошень:',
    data: paginationData,
  });
};

export const createAnnouncementControllers = async (req, res, next) => {
  const response = await postCreateAnnouncement(req.body);
  // console.log(`response create`, response);
  res.status(201).json({
      status: 201,
      message: 'Оголошення створено!',
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
    message: 'Оголошення оновлено!',
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
