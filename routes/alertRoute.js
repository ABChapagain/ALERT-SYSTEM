import express from "express";

const router = express.Router();

import {
  getAlerts,
  postAlerts,
  postNotification,
} from "../controllers/alertController.js";

router.route("/").get(getAlerts).post(postAlerts);
router.route("/notification").post(postNotification);

export default router;
