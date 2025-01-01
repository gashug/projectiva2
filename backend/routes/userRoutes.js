import express from 'express';

const router = express.Router();

// Sample endpoint to fetch user data (Clerk integration later)
router.get('/', (req, res) => {
    res.json({ message: "User routes will go here." });
});

export default router;