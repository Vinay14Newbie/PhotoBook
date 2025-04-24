import crudRepository from './crudRepository.js';
import Comment from '../schema/comment.js';

export const commentRepository = {
  ...crudRepository(Comment)
};
