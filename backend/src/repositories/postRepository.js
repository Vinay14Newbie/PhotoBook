import Post from '../schema/post.js';
import crudRepository from './crudRepository.js';

export const postRepository = {
  ...crudRepository(Post),

  getPaginatedPosts: async (offset, limit) => {
    try {
      const posts = await Post.find()
        .sort({ createdAt: -1 })
        .skip(offset)
        .limit(limit)
        .populate('user', '_id username email');

      return posts;
    } catch (error) {
      return error;
    }
  }
};
