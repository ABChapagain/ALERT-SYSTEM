import express from 'express'

const router = express.Router()

import { authUser } from '../controllers/userController.js'
import { checkControl } from '../controllers/checkControl.js'
import { updatePhone } from '../controllers/updatePhoneController.js'

router.route('/auth').post(authUser)
router.route('/update/phone').post(updatePhone)


export default router
