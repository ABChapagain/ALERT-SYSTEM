import express from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Login
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { name, email, phone, username, image } = req.body;

  const userExists = await User.findOne({ email });

  if (!userExists) {
    const user = await User.create({
      name,
      email,
      phone,
      username,
      image,
    });

    if (user) {
      res.status(201).json(user);
    }
  }
  if (userExists) {
    res.status(200).json(userExists);
  } else {
    res.status(400);
    throw new Error("Error Occured");
  }
});

// @desc    fetches all users
// @route   POST /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// @desc    get single user
// @route   POST /api/users/:email
// @access  Public
const getCurrentUser = asyncHandler(async (req, res) => {
  const email = req.params.email;
  const users = await User.find({ email: email });
  res.status(200).json(users[0]);
});

// @desc    Login
// @route   POST /api/users/login
// @access  Public

const updatePhone = asyncHandler(async (req, res) => {
  const { phone, email } = req.body;

  const user = await User.findOne({ email });
  user.phone = phone;
  await user.save();
  res.status(200).json({ status: "success", message: "Phone number updated" });
});

// @desc    fetch single user data
// @route   get /api/users/single/:id
// @access  Public

const fetchSingleUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.status(200).json(user);
});

// @desc    edit user role
// @route   put /api/users/
// @access  Public
const updateUserRole = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { role } = req.body;

  const user = await User.findOne({ _id: id });
  user.role = role;
  await user.save();
  res.status(202).send(user);
});

const updateToken = asyncHandler(async (req, res) => {
  console.log(req.params.email);

  const { token } = req.body;
  console.log(token);
  const response = await User.findOneAndUpdate(
    { email: req.params.email },
    { $set: { fcm_token: token } },
    { new: true }
  );
  // res.send(response);
  console.log(response);
});

export {
  authUser,
  getUsers,
  updatePhone,
  getCurrentUser,
  fetchSingleUser,
  updateUserRole,
  updateToken,
};
