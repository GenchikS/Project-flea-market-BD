import { AnnouncementsCollection } from "../db/models/announcement.js";

export const getAllAnnouncements = async () => {
    const announcementsAll = await AnnouncementsCollection.find();
    console.log('getAllAnnouncements', announcementsAll);
    return announcementsAll;
}

export const postCreateAnnouncement = async (payload) => {
    const announcement = await AnnouncementsCollection.create(payload);
    return announcement
}
