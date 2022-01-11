const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    userId: [{ type: Schema.Types.ObjectId, ref: "Users" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const MapsModel = mongoose.model("Maps", mapsSchema);
module.exports = MapsModel;
