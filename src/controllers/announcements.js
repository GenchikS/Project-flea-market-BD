import { getAllAnnouncements, postCreateAnnouncement } from "../services/announcements.js";
import { postCreateUser } from "../services/users.js";


export const getAnnouncementsControllers = async (req, res, next) => {
    const announcementsAll = await getAllAnnouncements();
    console.log('getAnnouncementsControllers', announcementsAll);
    res.json({
        status: 200,
        message: 'Successfully found announcement',
        data: announcementsAll,
    });
}


export const createAnnouncementControllers = async (req, res, next) => {
    const response = await postCreateAnnouncement(req.body);
    res.status(201).json({
        status: 201,
        message: "Successffully create announcent",
        data: response
    })
}
