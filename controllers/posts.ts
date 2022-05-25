import express from "express";
import mongoose from "mongoose";

import PostMessage, { IDraftPost } from "../models/postMessage";

const getPosts = async (req: express.Request, res: express.Response) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error: any) {
        res.status(404).json({ message: error.message || error});
    }
};

const createPost = async (req: express.Request, res: express.Response) => {
    const postData = (req.body as IDraftPost);
    const newPost = new PostMessage(postData);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error: any) {
        res.status(409).json({ message: error.message || error});
    }
};

const updatePost = async (req: express.Request, res: express.Response) => {
    const { id : _id } = req.params;
    const post = (req.body as Partial<IDraftPost>);

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id');
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
};

export { createPost, getPosts, updatePost };
