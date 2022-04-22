import express from "express";

const getPosts = (req: express.Request, res: express.Response) => {
    res.send('<strong>THIS WORKS</strong>');
};

export { getPosts };
