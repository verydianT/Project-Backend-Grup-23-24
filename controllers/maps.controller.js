const MapsModel = require("../models/maps");

class MapsController {
  static async saveMaps(req, res) {
    try {
      const body = req.body;

      const name = body.name;
      const address = body.address;

      const maps = new MapsModel({
        name: name,
        address: address,
      });
      const saved = await maps.save();
      res.status(201).send(saved);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getAllMaps(req, res) {
    try {
      const mapsList = await MapsModel.find();
      res.status(200).send(mapsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async getMapsByIdUser(req, res) {
    try {
      const id = req.params.id;

      const mapsList = await MapsModel.find({ userId: { $elemMatch: { $in: [id] } } });
      res.status(200).send(mapsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }

  static async deleteMaps(req, res) {
    try {
      const id = req.params.id;
      await MapsModel.deleteOne({ _id: id });
      res.status(200).send({ message: `${id} has been Deleted` });
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = MapsController;
