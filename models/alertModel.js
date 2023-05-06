import mongoose from 'mongoose'

const alertSchema = new mongoose.Schema(
  {
    title: { type: String },
    message: { type: String },
    user: { type: mongoose.Schema.ObjectId, ref: 'users' },
    location: { lat: { type: String }, lang: { type: String } },
  },
  {
    timestamps: true,
  }
)

const Alert = mongoose.models.alerts || mongoose.model('alerts', alertSchema)

export default Alert
