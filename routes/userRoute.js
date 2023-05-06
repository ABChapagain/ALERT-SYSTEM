import express from "express";

const router = express.Router();

import {
  authUser,
  getUsers,
  updatePhone,
  getUser,
} from "../controllers/userController.js";

router.route("/auth").post(authUser);
router.route("/").get(getUsers);
router.route("/:email").get(getUser);
router.route("/updatePhone").post(updatePhone);

export default router;
