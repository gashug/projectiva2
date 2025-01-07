// analytics.js

import { fetchProjects } from './api.js';  // Ensure the correct path

document.addEventListener('DOMContentLoaded', async () => {
    const progressContainer = document.getElementById('progress-container');
    const progressTemplate = document.getElementById('progress-template');
    
    try {
        // Fetch the projects from the backend
        const projects = await fetchProjects();
        
        if (projects.length === 0) {
            progressContainer.innerHTML = '<p class="text-warning">No projects available.</p>';
            return;
        }

        // Iterate through the fetched projects and render them
        projects.forEach(project => {
            // Clone the template for each project
            const cardClone = progressTemplate.content.cloneNode(true);
            const card = cardClone.querySelector('.card');
            const title = card.querySelector('.card-title');
            const description = card.querySelector('.card-text');
            const progressBar = card.querySelector('.progress-bar');
            
            // Set the project data in the card
            title.textContent = project.name;
            description.textContent = project.description;
            
            // Here, we assume 'progress' is calculated as a percentage (you might need to adjust based on your data model)
            const projectProgress = project.progress || 0;  // Default to 0 if no progress is provided
            progressBar.style.width = `${projectProgress}%`;
            progressBar.setAttribute('aria-valuenow', projectProgress);
            progressBar.textContent = `${projectProgress}%`;

            // Append the cloned card to the progress container
            progressContainer.appendChild(cardClone);
        });
    } catch (error) {
        console.error('Error fetching project data:', error);
        progressContainer.innerHTML = '<p class="text-danger">Failed to load project data.</p>';
    }
});
