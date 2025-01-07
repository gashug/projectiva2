import { fetchProjects } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const progressContainer = document.getElementById('progress-container');
    const completionContainer = document.getElementById('completion-container');
    const progressTemplate = document.getElementById('progress-template');
    
    try {
        // Fetch the projects from the backend
        const projects = await fetchProjects();
        console.log('Fetched Projects:', projects);  // Debugging line

        if (projects.length === 0) {
            progressContainer.innerHTML = '<p class="text-warning">No projects available.</p>';
            completionContainer.innerHTML = '<p class="text-warning">No tasks available.</p>';
            return;
        }

        // Display Project Progress
        projects.forEach(project => {
            const cardClone = progressTemplate.content.cloneNode(true);
            const card = cardClone.querySelector('.card');
            const title = card.querySelector('.card-title');
            const description = card.querySelector('.card-text');
            const progressBar = card.querySelector('.progress-bar');
            
            title.textContent = project.name;
            description.textContent = project.description;

            const projectProgress = project.progress || 0;  // Default to 0 if no progress is provided
            progressBar.style.width = `${projectProgress}%`;
            progressBar.setAttribute('aria-valuenow', projectProgress);
            progressBar.textContent = `${projectProgress}%`;

            progressContainer.appendChild(cardClone);
        });

    } catch (error) {
        console.error('Error fetching project data:', error);
        progressContainer.innerHTML = '<p class="text-danger">Failed to load project data.</p>';
    }
});