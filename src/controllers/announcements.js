import { getAllAnnouncements } from "../services/announcements.js";


export const getAnnouncementsControllers = async (req, res, next) => {
    const announcementsAll = await getAllAnnouncements();
    console.log('getAnnouncementsControllers', announcementsAll);
    res.json({
        status: 200,
        message: 'Successfully found announcement',
        data: announcementsAll,
    });
}
