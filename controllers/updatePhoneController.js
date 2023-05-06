import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Login
// @route   POST /api/users/login
// @access  Public

const updatePhone = asyncHandler(async (req, res) => {
    const { phone, email } = req.body

    const user = await User.findOne({ email })
    user.phone = phone
    await user.save()
    res.status(200).json({ status: 'success', message: 'Phone number updated' })
})

export { updatePhone }
