  // models/User.js
  import mongoose from 'mongoose';

  const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    image: String,

    // Auth / system-related
    timeLogin: {
      type: Date,
      default: Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },

      loginHistory: [
      {
        type: Date,
      },
    ],
  });

  // Middleware to update lastUpdated automatically
  UserSchema.pre('save', function (next) {
    this.lastUpdated = new Date(Date.now());
    next();
  });

  export default mongoose.models.User || mongoose.model('User', UserSchema);
