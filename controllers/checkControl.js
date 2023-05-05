import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Login
// @route   POST /api/users/login
// @access  Public

const checkControl = asyncHandler(async (req, res) => {
    const { data } = req.body

    res.status(200).json({ data })
})

export { checkControl }
