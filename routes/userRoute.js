import express from 'express'

const router = express.Router()

import {
  authUser,
  getUsers,
  updatePhone,
} from '../controllers/userController.js'

router.route('/auth').post(authUser)
router.route('/').get(getUsers)
router.route('/updatePhone').post(updatePhone)

export default router
