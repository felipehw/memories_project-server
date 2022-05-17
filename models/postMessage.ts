import mongoose from "mongoose";

interface IDraftPost {
    title: string,
    message: string,
    creator: string,
    tags: string[],
    selectedFile: string,
};

interface IPost {
    title: string,
    message: string,
    creator: string,
    tags: string[],
    selectedFile: string,
    likeCount: number,
    createdAt: Date,
};

const postSchema = new mongoose.Schema<IPost>({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const PostMessage = mongoose.model<IPost>('PostMessage', postSchema);

export {PostMessage as default, IDraftPost};