import { createPostService, deletePostService } from '../services/postService';

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

export async function deletePostController(req, res) {
  try {
    const response = await deletePostService(req.params.id, req.user._id);

    if (!response) {
      return res.status(404).json({
        status: false,
        message: 'Post not found'
      });
    }

    return res.status(200).json({
      status: true,
      message: 'Post deleted successfully',
      data: response
    });
  } catch (error) {
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message
      });
    }
    return res.status(500).json({
      status: false,
      message: 'Internal error'
    });
  }
}
