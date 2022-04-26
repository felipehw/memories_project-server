import express from "express";

import PostMessage from "../models/postMessage";

const getPosts = async (req: express.Request, res: express.Response) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error: any) {
        res.status(404).json({ message: error.message || error});
    }
};

const createPost = async (req: express.Request, res: express.Response) => {
    const postData = req.body;
    const newPost = new PostMessage(postData);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error: any) {
        res.status(409).json({ message: error.message || error});
    }
};

export { createPost, getPosts };
