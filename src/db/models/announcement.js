import { model, Schema } from 'mongoose';

const announcementSchema = new Schema(
  {
    idUser: {
      type: String,
      required: false,
    },
    chapter: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    purchaseSale: {
      type: String,
      required: false,
    },
    yar: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const AnnouncementsCollection = model('announcements', announcementSchema);
