import express from "express";
import asyncHandler from "express-async-handler";
import Alert from "../models/alertModel.js";

// @desc    Login
// @route   POST /api/users/login
// @access  Public

// const authUser = asyncHandler(async (req, res) => {
//   const { name, email, phone, username, image } = req.body;

//   const userExists = await User.findOne({ email });

//   if (!userExists) {
//     const user = await User.create({
//       name,
//       email,
//       phone,
//       username,
//       image,
//     });

//     if (user) {
//       res.status(201).json(user);
//     }
//   }
//   if (userExists) {
//     res.status(200).json(userExists);
//   } else {
//     res.status(400);
//     throw new Error("Error Occured");
//   }
// });

const postAlerts = asyncHandler(async (req, res) => {
  const alerts = await Alert.create(req.body);
  console.log(req.body);
  res.send(req.body);
});

const getAlerts = asyncHandler(async (req, res) => {
  const alerts = await Alert.find({});
  res.json(alerts);
});

export { getAlerts, postAlerts };
