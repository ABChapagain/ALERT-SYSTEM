import asyncHandler from 'express-async-handler'
import Alert from '../models/alertModel.js'

const postAlerts = asyncHandler(async (req, res) => {
  const alerts = await Alert.create(req.body)
  // pushing to telegram

  let message = `ALERT!!! ${alerts.title}. \n\n ${alerts.message} `

  fetch(
    `https://api.telegram.org/bot6237365052:AAHOBEefMik-06KVwcPGDXaNCPM_2KtT05c/sendMessage?chat_id=5032853081&text=${message}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
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
