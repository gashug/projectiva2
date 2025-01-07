// import { fetchProjects } from './api.js';

// document.addEventListener('DOMContentLoaded', async () => {
//     const progressContainer = document.getElementById('progress-container');
//     const completionContainer = document.getElementById('completion-container');
//     const progressTemplate = document.getElementById('progress-template');
    
//     try {
//         // Fetch the projects from the backend
//         const projects = await fetchProjects();
//         console.log('Fetched Projects:', projects);  // Debugging line

//         if (projects.length === 0) {
//             progressContainer.innerHTML = '<p class="text-warning">No projects available.</p>';
//             completionContainer.innerHTML = '<p class="text-warning">No tasks available.</p>';
//             return;
//         }

//         // Display Task Completion Rate
//         const completionTemplate = document.getElementById('progress-template');
//         projects.forEach(project => {
//             console.log(`Project: ${project.name}, Completion Rate: ${project.completionRate}`); // Debugging line

//             const clone = completionTemplate.content.cloneNode(true);
//             clone.querySelector('.card-title').textContent = project.name;
//             clone.querySelector('.card-text').textContent = `${project.completionRate}% of tasks completed`;
//             clone.querySelector('.progress-bar').style.width = `${project.completionRate}%`;
//             clone.querySelector('.progress-bar').setAttribute('aria-valuenow', project.completionRate);
//             clone.querySelector('.progress-bar').textContent = `${project.completionRate}%`;

//             completionContainer.appendChild(clone);
//         });

//     } catch (error) {
//         console.error('Error fetching project data:', error);
//         progressContainer.innerHTML = '<p class="text-danger">Failed to load project data.</p>';
//     }
// });

import { fetchProjects } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const completionContainer = document.getElementById('completion-container');
    const completionTemplate = document.getElementById('completion-template');
    
    try {
        // Fetch the projects from the backend
        const projects = await fetchProjects();
        console.log('Fetched Projects:', projects);  // Debugging line

        if (projects.length === 0) {
            completionContainer.innerHTML = '<p class="text-warning">No projects available.</p>';
            return;
        }

        // Display Task Completion Rate
        projects.forEach(project => {
            console.log(`Project: ${project.name}, Completion Rate: ${project.completionRate}`); // Debugging line

            const clone = completionTemplate.content.cloneNode(true);
            clone.querySelector('.card-title').textContent = project.name;
            clone.querySelector('.card-text').textContent = `${project.completionRate}% of tasks completed`;
            clone.querySelector('.progress-bar').style.width = `${project.completionRate}%`;
            clone.querySelector('.progress-bar').setAttribute('aria-valuenow', project.completionRate);
            clone.querySelector('.progress-bar').textContent = `${project.completionRate}%`;

            completionContainer.appendChild(clone);
        });

    } catch (error) {
        console.error('Error fetching project data:', error);
        completionContainer.innerHTML = '<p class="text-danger">Failed to load project data.</p>';
    }
});