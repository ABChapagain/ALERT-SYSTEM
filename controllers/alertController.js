import asyncHandler from 'express-async-handler'
import Alert from '../models/alertModel.js'

const postAlerts = asyncHandler(async (req, res) => {
  const alerts = await Alert.create(req.body)
  res.send(alerts)
})

const getAlerts = asyncHandler(async (req, res) => {
  const alerts = await Alert.find({}).populate('user', 'id name phone image')
  res.json(alerts)
})

const getSingleAlert = asyncHandler(async (req, res) => {
  const alert = await Alert.findById(req.params.id).populate(
    'user',
    'id name phone image'
  )
  res.json(alert)
})

export { getAlerts, postAlerts, getSingleAlert }
