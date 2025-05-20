import express from "express";
import { craeteReview } from "../controllers/reviewController.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:tourId", verifyUser, craeteReview);

export default router;
