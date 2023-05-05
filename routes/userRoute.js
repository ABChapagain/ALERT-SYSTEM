import express from 'express'

const router = express.Router()

import { authUser, getUsers } from '../controllers/userController.js'

router.route('/auth').post(authUser).get(getUsers)

export default router
