import { model, Schema } from 'mongoose';

const announcementSchema = new Schema({
  idUser: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  purchaseSale: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
});

export const AnnouncementsCollection = model('announcements', announcementSchema);
