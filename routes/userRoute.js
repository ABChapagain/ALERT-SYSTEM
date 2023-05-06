import express from "express";

const router = express.Router();

import {
  authUser,
  getUsers,
  updatePhone,
  getCurrentUser,
  fetchSingleUser,
} from "../controllers/userController.js";

router.route("/auth").post(authUser);
router.route("/").get(getUsers);

router.route("/:email").get(getCurrentUser);
router.route("/single/:id").get(fetchSingleUser);
router.route("/updatePhone").post(updatePhone);

export default router;
