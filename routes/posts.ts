import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send('<strong>THIS WORKS</strong>');
});

export default router;