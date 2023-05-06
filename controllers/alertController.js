import asyncHandler from 'express-async-handler'
import Alert from '../models/alertModel.js'
import Users from '../models/userModel.js'
import axios from 'axios'

const postAlerts = asyncHandler(async (req, res) => {
  const alerts = await Alert.create(req.body)

  const users = await Users.find()

  const tokens = users.map((user) => {
    return user.fcm_token
  })

  let message = `ALERT!!! ${alerts.title}. \n\n ${alerts.message}.`
  const messages = {
    // registration_ids: tokens,
    registration_ids: [
      'eMx2hRvIzTSQKZL-l8fDo0:APA91bF1cABTuiXB0zpQxW1HY428-IOZiVtxnBpSr0K_GgaX6N_a6qaIXssUcD9yt7DJKjwZLosD1XprlfInn-iXXnvt1sdkUapB3NOn0XlMtQsnrn9B_3rHYdTdnqa3JyN2AO1pYD8i',
      'eW1NPaNQfm1GW0m3aCqnOC:APA91bHQbwYD5NkWtOKYjd3KohMrDV9WY9-PNvDa5aRc2TX4p69MtC6Mmp1j0Q_9VF5DB5S7D9G5nMqNqkCa3dRendEDSVqLSVFoeliZASe0k2Qg5ye27pPZ4aIvtbAsWKs1Z-eMllox',
    ],
    notification: {
      body: message,
      title: 'Elephant Near you',
    },
  }

  const options = {
    method: 'POST',
    url: 'https://fcm.googleapis.com/fcm/send',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'key=AAAAScc7SHI:APA91bEBjDx7coO6YNnckoBi6qhvbXjynnl59dbE7oLhpKlyoS0BhhJFkMBQAPyrn8iPoP-ATZA8gsk6DDiqjIBu9mqDL6rFh32dOz_lweIMgYMUaOXyWiT10yJoV6EVQgQONLt8VsS-',
    },
    data: messages,
  }

  await axios(options)

  // pushing to telegram
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
