import express from "express";

const router = express.Router();

import { getAlerts, postAlerts } from "../controllers/alertController.js";

router.route("/").get(getAlerts).post(postAlerts);

export default router;
