const express = require("express");

const MapsController = require("../controllers/maps.controller");

// creates a new router instance.
const router = express.Router();

router.post("/", MapsController.saveMaps);
router.get("/show/:id", MapsController.getMapsByIdUser);
router.get("/show", MapsController.getAllMaps);
router.delete("/show/:id", MapsController.deleteMaps);

module.exports = router;
