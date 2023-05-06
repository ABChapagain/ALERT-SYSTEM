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

// @desc    get all users
// @route   POST /api/users
// @access  Public
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc    get single user
// @route   POST /api/user
// @access  Public
const getUser = asyncHandler(async (req, res) => {
  const email = req.params.email;
  const users = await User.find({ email: email });
  res.json(users[0]);
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

export { authUser, getUsers, updatePhone, getUser };
