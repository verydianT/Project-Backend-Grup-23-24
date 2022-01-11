const express = require("express");

const ReviewController = require("../controllers/review.controller");

// creates a new router instance.
const router = express.Router();

router.post("/hotel/:placeId/addreview", ReviewController.createNewReview);
router.get("/hotel/:placeId/reviews", ReviewController.getReviewByLoc);
router.post("/wisata/:placeId/addreview", ReviewController.createNewReview);
router.get("/wisata/:placeId/reviews", ReviewController.getReviewByLoc);

module.exports = router;
