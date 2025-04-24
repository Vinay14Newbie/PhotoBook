import { postRepository } from '../repositories/postRepository';

export async function createPostService(data) {
  try {
    const caption = data.caption?.trim();
    const image = data.image;
    const user = data.user;

    const post = await postRepository.create({ caption, image, user });

    return post;
  } catch (error) {
    return error;
  }
}

export async function deletePostService(id, user) {
  try {
    const post = await postRepository.findById(id);

    if (post.user.toString() != user) {
      throw {
        status: 401,
        message: 'Unauthorized'
      };
    }

    const response = await postRepository.delete(id);
    return response;
  } catch (error) {
    return error;
  }
}
