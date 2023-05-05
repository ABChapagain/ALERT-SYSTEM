import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: Number },
    username: { type: String, required: true },
    image: { type: String, required: true },
    role: { type: String, required: true, default: 'user' },
    fcm_token: { type: String },
    isVerified: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.models.users || mongoose.model('users', userSchema)

export default User
