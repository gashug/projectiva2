// // analytics.js

// import { fetchProjects } from './api.js';  // Ensure the correct path

// document.addEventListener('DOMContentLoaded', async () => {
//     const progressContainer = document.getElementById('progress-container');
//     const progressTemplate = document.getElementById('progress-template');
    
//     try {
//         // Fetch the projects from the backend
//         const projects = await fetchProjects();
        
//         if (projects.length === 0) {
//             progressContainer.innerHTML = '<p class="text-warning">No projects available.</p>';
//             return;
//         }

//         // Iterate through the fetched projects and render them
//         projects.forEach(project => {
//             // Clone the template for each project
//             const cardClone = progressTemplate.content.cloneNode(true);
//             const card = cardClone.querySelector('.card');
//             const title = card.querySelector('.card-title');
//             const description = card.querySelector('.card-text');
//             const progressBar = card.querySelector('.progress-bar');
            
//             // Set the project data in the card
//             title.textContent = project.name;
//             description.textContent = project.description;
            
//             // Here, we assume 'progress' is calculated as a percentage (you might need to adjust based on your data model)
//             const projectProgress = project.progress || 0;  // Default to 0 if no progress is provided
//             progressBar.style.width = `${projectProgress}%`;
//             progressBar.setAttribute('aria-valuenow', projectProgress);
//             progressBar.textContent = `${projectProgress}%`;

//             // Append the cloned card to the progress container
//             progressContainer.appendChild(cardClone);
//         });
//     } catch (error) {
//         console.error('Error fetching project data:', error);
//         progressContainer.innerHTML = '<p class="text-danger">Failed to load project data.</p>';
//     }
// });

// // Function to display task completion rate
// const displayTaskCompletion = (projects) => {
//     const completionContainer = document.getElementById('completion-container');
//     const completionTemplate = document.getElementById('progress-template');

//     projects.forEach(project => {
//         const clone = completionTemplate.content.cloneNode(true);
//         clone.querySelector('.card-title').textContent = project.name;
//         clone.querySelector('.card-text').textContent = `${project.completionRate}% of tasks completed`;
//         clone.querySelector('.progress-bar').style.width = `${project.completionRate}%`;
//         clone.querySelector('.progress-bar').setAttribute('aria-valuenow', project.completionRate);
//         clone.querySelector('.progress-bar').textContent = `${project.completionRate}%`;

//         completionContainer.appendChild(clone);
//     });
// };

// // Fetch and display data
// const fetchAndDisplayAnalytics = async () => {
//     try {
//         const projects = await fetchProjects();  // Fetch all projects (with progress and completion rate)
//         displayProjectProgress(projects);        // Display project progress
//         displayTaskCompletion(projects);        // Display task completion rate
//     } catch (error) {
//         console.error('Error fetching and displaying analytics:', error);
//     }
// };

// fetchAndDisplayAnalytics();


// analytics.js

// import { fetchProjects } from './api.js';  // Ensure the correct path

// document.addEventListener('DOMContentLoaded', async () => {
//     const progressContainer = document.getElementById('progress-container');
//     const progressTemplate = document.getElementById('progress-template');
    
//     try {
//         // Fetch the projects from the backend
//         const projects = await fetchProjects();
        
//         if (projects.length === 0) {
//             progressContainer.innerHTML = '<p class="text-warning">No projects available.</p>';
//             return;
//         }

//         // Iterate through the fetched projects and render them
//         projects.forEach(project => {
//             // Clone the template for each project
//             const cardClone = progressTemplate.content.cloneNode(true);
//             const card = cardClone.querySelector('.card');
//             const title = card.querySelector('.card-title');
//             const description = card.querySelector('.card-text');
//             const progressBar = card.querySelector('.progress-bar');
            
//             // Set the project data in the card
//             title.textContent = project.name;
//             description.textContent = project.description;
            
//             // Here, we assume 'progress' is calculated as a percentage (you might need to adjust based on your data model)
//             const projectProgress = project.progress || 0;  // Default to 0 if no progress is provided
//             progressBar.style.width = `${projectProgress}%`;
//             progressBar.setAttribute('aria-valuenow', projectProgress);
//             progressBar.textContent = `${projectProgress}%`;

//             // Append the cloned card to the progress container
//             progressContainer.appendChild(cardClone);
//         });
//     } catch (error) {
//         console.error('Error fetching project data:', error);
//         progressContainer.innerHTML = '<p class="text-danger">Failed to load project data.</p>';
//     }
// });

// // Function to display task completion rate
// const displayTaskCompletion = (projects) => {
//     const completionContainer = document.getElementById('completion-container');
//     const completionTemplate = document.getElementById('progress-template');

//     projects.forEach(project => {
//         const clone = completionTemplate.content.cloneNode(true);
//         clone.querySelector('.card-title').textContent = project.name;
//         clone.querySelector('.card-text').textContent = `${project.completionRate}% of tasks completed`;
//         clone.querySelector('.progress-bar').style.width = `${project.completionRate}%`;
//         clone.querySelector('.progress-bar').setAttribute('aria-valuenow', project.completionRate);
//         clone.querySelector('.progress-bar').textContent = `${project.completionRate}%`;

//         completionContainer.appendChild(clone);
//     });
// };

// // Fetch and display data
// const fetchAndDisplayAnalytics = async () => {
//     try {
//         const projects = await fetchProjects();  // Fetch all projects (with progress and completion rate)
//         displayProjectProgress(projects);        // Display project progress
//         displayTaskCompletion(projects);        // Display task completion rate
//     } catch (error) {
//         console.error('Error fetching and displaying analytics:', error);
//     }
// };

// fetchAndDisplayAnalytics();



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

//         // Display Project Progress
//         projects.forEach(project => {
//             const cardClone = progressTemplate.content.cloneNode(true);
//             const card = cardClone.querySelector('.card');
//             const title = card.querySelector('.card-title');
//             const description = card.querySelector('.card-text');
//             const progressBar = card.querySelector('.progress-bar');
            
//             title.textContent = project.name;
//             description.textContent = project.description;

//             const projectProgress = project.progress || 0;  // Default to 0 if no progress is provided
//             progressBar.style.width = `${projectProgress}%`;
//             progressBar.setAttribute('aria-valuenow', projectProgress);
//             progressBar.textContent = `${projectProgress}%`;

//             progressContainer.appendChild(cardClone);
//         });

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
    try {
        // Fetch the projects data
        const projects = await fetchProjects();
        console.log('Fetched Projects:', projects);  // Debugging line

        if (projects.length === 0) {
            console.log('No projects available');
            return;
        }

        // Data for the charts
        const projectNames = projects.map(project => project.name);
        const projectProgressData = projects.map(project => project.progress || 0); // Ensure progress defaults to 0
        const taskCompletionData = projects.map(project => project.completionRate || 0); // Ensure completion rate defaults to 0
        const timeSpentData = projects.map(project => project.timeSpent || 0); // Assuming 'timeSpent' is a field in your project data

        // Project Progress Chart
        const ctxProjectProgress = document.getElementById('projectProgressChart').getContext('2d');
        const projectProgressChart = new Chart(ctxProjectProgress, {
            type: 'bar',
            data: {
                labels: projectNames,
                datasets: [{
                    label: 'Project Progress',
                    data: projectProgressData,
                    backgroundColor: 'rgba(0, 123, 255, 0.6)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        // Task Completion Chart
        const ctxTaskCompletion = document.getElementById('taskCompletionChart').getContext('2d');
        const taskCompletionChart = new Chart(ctxTaskCompletion, {
            type: 'bar',
            data: {
                labels: projectNames,
                datasets: [{
                    label: 'Task Completion',
                    data: taskCompletionData,
                    backgroundColor: 'rgba(40, 167, 69, 0.6)',
                    borderColor: 'rgba(40, 167, 69, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        // // Time Tracking Chart (if timeSpent is available)
        // const ctxTimeTracking = document.getElementById('timeTrackingChart').getContext('2d');
        // const timeTrackingChart = new Chart(ctxTimeTracking, {
        //     type: 'bar',
        //     data: {
        //         labels: projectNames,
        //         datasets: [{
        //             label: 'Time Spent (hrs)',
        //             data: timeSpentData,
        //             backgroundColor: 'rgba(255, 193, 7, 0.6)',
        //             borderColor: 'rgba(255, 193, 7, 1)',
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         }
        //     }
        // });

    } catch (error) {
        console.error('Error fetching project data:', error);
        // Optionally handle the error by displaying a message
    }
});

