// import express from 'express';
// import pool from '../db/db.js';

// const router = express.Router();

// // Create a new task
// router.post('/', async (req, res) => {
//     const { name, description = null, status = 'To Do', priority = 'Medium', due_date = null, project_id } = req.body;
//     try {
//         const result = await pool.query(
//             'INSERT INTO tasks (name, description, status, priority, due_date, project_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
//             [name, description, status, priority, due_date, project_id]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         next(err);
//     } finally {
//         client.release();
//     }
// });

// // Get all tasks for a project
// router.get('/project/:projectId', async (req, res) => {
//     const { projectId } = req.params;
//     try {
//         const result = await pool.query('SELECT * FROM tasks WHERE project_id = $1', [projectId]);
//         res.json(result.rows);
//     }  catch (err) {
//         next(err);
//     } finally {
//         client.release();
//     }
// });

// // Update a task
// router.put('/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, description, status, priority, due_date } = req.body;
//     try {
//         const result = await pool.query(
//             'UPDATE tasks SET title = $1, description = $2, status = $3 WHERE id = $4 RETURNING *',
//             [name, description, status, priority, due_date, id]
//         );
//         res.json(result.rows[0]);
//     } catch (err) {
//         next(err);
//     } finally {
//         client.release();
//     }
// });

// // Delete a task
// router.delete('/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//         await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
//         res.json({ message: "Task deleted successfully" });
//     } catch (err) {
//         next(err);
//     } finally {
//         client.release();
//     }
// });

// export default router;

import express from 'express';
import pool from '../db/db.js';

const router = express.Router();

// Create a new task
router.post('/', async (req, res, next) => {
    const { name, description = null, status = 'To Do', priority = 'Medium', due_date = null, project_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO tasks (name, description, status, priority, due_date, project_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [name, description, status, priority, due_date, project_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        next(err);
    }
});

// Get all tasks for a project
router.get('/project/:projectId', async (req, res, next) => {
    const { projectId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM tasks WHERE project_id = $1', [projectId]);
        res.json(result.rows);
    } catch (err) {
        next(err);
    }
});

// Get all tasks with project names
router.get('/', async (req, res, next) => {
    try {
        const result = await pool.query(`
            SELECT 
                tasks.id, 
                tasks.name AS task_name, 
                tasks.description, 
                tasks.status, 
                tasks.priority, 
                tasks.due_date, 
                projects.name AS project_name
            FROM tasks
            JOIN projects ON tasks.project_id = projects.id
            ORDER BY tasks.status, tasks.due_date
        `);
        res.json(result.rows);
    } catch (err) {
        next(err);
    }
});

// Update a task
router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { name, description, status, priority, due_date } = req.body;
    try {
        const result = await pool.query(
            'UPDATE tasks SET name = $1, description = $2, status = $3, priority = $4, due_date = $5 WHERE id = $6 RETURNING *',
            [name, description, status, priority, due_date, id]
        );
        res.json(result.rows[0]);
    } catch (err) {
        next(err);
    }
});

// Delete a task
router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
        res.json({ message: "Task deleted successfully" });
    } catch (err) {
        next(err);
    }
});

export default router;
