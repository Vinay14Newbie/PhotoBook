import mongoose from 'mongoose';

const likeSchema = mongoose.Schema(
  {
    onModel: {
      type: String,
      required: true,
      enum: ['Comment', 'Post']
    },
    likeableId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: 'onModel'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  },
  { timestamps: true }
);

const Like = mongoose.model('Like', likeSchema);

export default Like;
