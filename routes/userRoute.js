import express from "express";

const router = express.Router();

import {
  authUser,
  getUsers,
  updatePhone,
  getCurrentUser,
  fetchSingleUser,
  updateUserRole,
} from "../controllers/userController.js";

router.route("/auth").post(authUser);
router.route("/").get(getUsers);

router.route("/:email").get(getCurrentUser);
router.route("/single/:id").get(fetchSingleUser);
router.route("/updatePhone").post(updatePhone);

router.route("/:id").put(updateUserRole);

export default router;
