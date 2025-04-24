import { createPostService } from '../services/postService';

export async function createPostController(req, res) {
  if (!req.file || !req.file.location) {
    return res.status(400).json({
      success: false,
      message: 'Image is required'
    });
  }

  const post = await createPostService({
    caption: req.body.caption,
    image: req.file.location,
    user: req.user._id
  });

  return req.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: post
  });
}
