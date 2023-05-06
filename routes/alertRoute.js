import express from 'express'

const router = express.Router()

import {
  getAlerts,
  postAlerts,
  getSingleAlert,
} from '../controllers/alertController.js'

router.route('/').get(getAlerts).post(postAlerts)
router.route('/:id').get(getSingleAlert)

export default router
