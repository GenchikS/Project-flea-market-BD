import { AnnouncementsCollection } from "../db/models/announcement.js";

export const getAllAnnouncements = async () => {
    const announcementsAll = await AnnouncementsCollection.find();
    console.log('getAllAnnouncements', announcementsAll);
    return announcementsAll;
}
