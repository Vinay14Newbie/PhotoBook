import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 3
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      validate: {
        validator: function (emailValue) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue);
        },
        message: 'Invalid email format'
      }
    },
    role: {
      type: String,
      dfault: 'user',
      enum: ['user', 'admin']
    },
    password: {
      type: String,
      required: true,
      minLength: 3
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
