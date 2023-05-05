import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Login
// @route   POST /api/users/login
// @access  Public

const authUser = asyncHandler(async (req, res) => {
  const { data } = req.body
  const { name, email, phone, nickname, picture } = data

  const userExists = await User.findOne({ email })

  if (!userExists) {
    const user = await User.create({
      name,
      email,
      phone,
      username: nickname,
      image: picture,
    })

    if (user) {
      res.status(201).json(user)
    }
  }
  if (userExists) {
    res.status(200).json(userExists)
  } else {
    res.status(400)
    throw new Error('Error Occured')
  }
})

export { authUser }
