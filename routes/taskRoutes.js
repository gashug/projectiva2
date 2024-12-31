import express from 'express';
import pool from '../db/db.js';

const router = express.Router();

// Create a new task
router.post('/', async (req, res) => {
    const { name, description = null, status = 'To Do', priority = 'Medium', due_date = null, project_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO tasks (name, description, status, priority, due_date, project_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [name, description, status, priority, due_date, project_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create task" });
    }
});

// Get all tasks for a project
router.get('/project/:projectId', async (req, res) => {
    const { projectId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM tasks WHERE project_id = $1', [projectId]);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch tasks" });
    }
});

// Update a task
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, status, priority, due_date } = req.body;
    try {
        const result = await pool.query(
            'UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *',
            [name, description, status, priority, due_date, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to update task" });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to delete task" });
    }
});

export default router;