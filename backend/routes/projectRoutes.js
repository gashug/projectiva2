import express from 'express';
import pool from '../db/db.js';

const router = express.Router();

// Create a new project
router.post('/', async (req, res) => {
    const { name, description } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO projects (name, description) VALUES ($1, $2) RETURNING *',
            [name, description]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
	next(err);
    }
});

// Get all projects

// router.get('/', async (req, res) => {
//     try {
//         const result = await pool.query(`
//             SELECT p.id, p.name, p.description,
//                 COUNT(t.id) AS total_tasks,
//                 COUNT(CASE WHEN t.status = 'Completed' THEN 1 END) AS completed_tasks
//             FROM projects p
//             LEFT JOIN tasks t ON p.id = t.project_id
//             GROUP BY p.id
//         `);

//         const projects = result.rows.map(project => {
//             const progress = project.total_tasks === 0 ? 0 : Math.round((project.completed_tasks / project.total_tasks) * 100);
//             return {
//                 ...project,
//                 progress: progress, // Add progress field to the project data
//             };
//         });

//         res.json(projects);  // Send projects with progress field included
//     } catch (err) {
//         next(err);
//     }
// });

router.get('/', async (req, res, next) => {
    try {
        const result = await pool.query(`
            SELECT 
                p.id, 
                p.name, 
                p.description, 
                COUNT(t.id) AS total_tasks,
                COUNT(CASE WHEN t.status = 'Done' THEN 1 END) AS completed_tasks
            FROM projects p
            LEFT JOIN tasks t ON p.id = t.project_id
            GROUP BY p.id
        `);

        const projects = result.rows.map(project => {
            const totalTasks = parseInt(project.total_tasks, 10);
            const completedTasks = parseInt(project.completed_tasks, 10);
            const completionRate = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

            return {
                ...project,
                total_tasks: totalTasks,
                completed_tasks: completedTasks,
                completionRate, // Task completion rate
                progress: completionRate // Project progress
            };
        });

        res.json(projects); // Return the projects with additional fields
    } catch (err) {
        next(err);
    }
});


// Get specific project
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Project not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
	next(err);
    }
});

// Update a project
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const result = await pool.query(
            'UPDATE projects SET name = $1, description =$2 WHERE id = $3 RETURNING *',
            [name, description, id]
        );

        if (result.rowCount > 0) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ error: "Project not found" });
        }
    } catch (err) {
	next(err);
    }
});

// Delete a project
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM projects WHERE id = $1', [id]);
        res.json({ message: "Project deleted successfully" });
    } catch (err) {
	next(err);
    }
});

export default router;
