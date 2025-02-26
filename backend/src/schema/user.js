import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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
      minLength: 3,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exists'],
      match: [
        // eslint-disable-next-line no-useless-escape
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address'
      ]
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

userSchema.pre('save', function modifyPassword(next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const hashedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = hashedPassword;

  next();
});

const User = mongoose.model('User', userSchema);

export default User;
