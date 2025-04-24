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
