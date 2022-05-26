import express from "express";

import { createPost, deletePost, getPosts, likePost, updatePost } from "../controllers/posts";

const router = express.Router();

router.delete('/:id', deletePost);
router.get('/', getPosts);
router.patch('/:id', updatePost);
router.patch('/:id/likePost', likePost);
router.post('/', createPost);

export default router;