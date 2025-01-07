// // api.js

// const API_BASE_URL = 'http://localhost:5001/'; // Update this with your backend URL

// // Fetch all projects
// export const fetchProjects = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/projects`);
//         if (!response.ok) throw new Error('Failed to fetch projects');
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching projects:', error);
//         return [];
//     }
// };

// // Fetch all tasks
// export const fetchTasks = async () => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/tasks`);
//         if (!response.ok) throw new Error('Failed to fetch tasks');
//         return await response.json();
//     } catch (error) {
//         console.error('Error fetching tasks:', error);
//         return [];
//     }
// };

// // Create a new project
// export const createProject = async (project) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/projects`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(project),
//         });
//         if (!response.ok) throw new Error('Failed to create project');
//         return await response.json();
//     } catch (error) {
//         console.error('Error creating project:', error);
//     }
// };

// // Add a new task
// export const addTask = async (task) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/tasks`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(task),
//         });
//         if (!response.ok) throw new Error('Failed to add task');
//         return await response.json();
//     } catch (error) {
//         console.error('Error adding task:', error);
//     }
// };

// api.js

const API_BASE_URL = 'http://localhost:5001/api'; // Ensure this matches your backend URL

// Fetch all projects
export const fetchProjects = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`);
        if (!response.ok) throw new Error(`Error ${response.status}: Failed to fetch projects`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching projects:', error.message);
        return []; // Return an empty array as a fallback
    }
};

// Fetch all tasks
export const fetchTasks = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks`);
        if (!response.ok) throw new Error(`Error ${response.status}: Failed to fetch tasks`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching tasks:', error.message);
        return []; // Return an empty array as a fallback
    }
};

// Create a new project
export const createProject = async (project) => {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project),
        });
        if (!response.ok) throw new Error(`Error ${response.status}: Failed to create project`);
        return await response.json();
    } catch (error) {
        console.error('Error creating project:', error.message);
        return null; // Return null to indicate failure
    }
};

// Add a new task
export const addTask = async (task) => {
    try {
        const response = await fetch(`${API_BASE_URL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task),
        });
        if (!response.ok) throw new Error(`Error ${response.status}: Failed to add task`);
        return await response.json();
    } catch (error) {
        console.error('Error adding task:', error.message);
        return null; // Return null to indicate failure
    }
};