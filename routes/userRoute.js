import express from 'express'

const router = express.Router()

import { authUser } from '../controllers/userController.js'
import { checkControl } from '../controllers/checkControl.js'

router.route('/auth').post(authUser)
router.route('/').get((req, res) => {
    res.send('Hello World!')
})

export default router
