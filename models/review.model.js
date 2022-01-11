const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    placeId: {
      type: String,
    },
    judul: {
      type: String,
    },
    ulasan: {
      type: String,
    },
    rating: {
      type: Number,
    },
    fasilitas: {
      bukti_vaksin: {
        type: String,
      },
      jarak_fisik: {
        type: String,
      },
      cuci_tangan: {
        type: String,
      },
      parkir: {
        type: String,
      },
      unik: {
        type: String,
      },
      multilanguage: {
        type: String,
      },
      pelayanan: {
        type: String,
      },
    },
    penilaian: {
      layanan: {
        type: Number,
      },
      kebersihan: {
        type: Number,
      },
      nilai: {
        type: Number,
      },
    },
    harga: {
      type: String,
    },
    foto: {
      type: String,
    },
    saran: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ReviewModel = mongoose.model("review", reviewSchema);
module.exports = ReviewModel;
