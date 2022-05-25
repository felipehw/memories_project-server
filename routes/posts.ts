import express from "express";

import { createPost, deletePost, getPosts, updatePost } from "../controllers/posts";

const router = express.Router();

router.delete('/:id', deletePost);
router.get('/', getPosts);
router.patch('/:id', updatePost);
router.post('/', createPost);

export default router;