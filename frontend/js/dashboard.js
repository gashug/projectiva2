// import { fetchProjects, fetchTasks, createProject, addTask } from './api.js';

// const projectsContainer = document.getElementById('projects-container');
// const tasksContainer = document.getElementById('tasks-container');

// // Load projects and tasks on page load
// async function loadDashboard() {
//     try {
//         const projects = await fetchProjects();
//         const tasks = await fetchTasks();

//         // Render projects
//         projectsContainer.innerHTML = projects.map(project => `
//             <div class="project-card">
//                 <h3>${project.name}</h3>
//                 <p>${project.description}</p>
//             </div>
//         `).join('');

//         // Render tasks
//         tasksContainer.innerHTML = tasks.map(task => `
//             <div class="task-card">
//                 <h4>${task.title}</h4>
//                 <p>${task.description}</p>
//                 <small>Due: ${task.dueDate}</small>
//             </div>
//         `).join('');
//     } catch (error) {
//         console.error('Error loading dashboard:', error);
//     }
// }

// loadDashboard();

// // Example: Add a new project
// const projectForm = document.getElementById('project-form');
// projectForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const formData = new FormData(projectForm);
//     const newProject = {
//         name: formData.get('name'),
//         description: formData.get('description'),
//     };

//     try {
//         await createProject(newProject);
//         loadDashboard(); // Reload dashboard after adding project
//     } catch (error) {
//         console.error('Error creating project:', error);
//     }
// });

// import { fetchProjects, fetchTasks, createProject, addTask } from './api.js';

// const projectsContainer = document.getElementById('projects-container');

// // Load projects and tasks on page load
// async function loadDashboard() {
//     try {
//         const projects = await fetchProjects();
        
//         // Render projects
//         projectsContainer.innerHTML = projects.map(project => `
//             <div class="card border-primary mb-3" style="max-width: 18rem;">
//                 <div class="card-header">${project.name}</div>
//                 <div class="card-body text-primary">
//                     <p class="card-text">${project.description}</p>
//                 </div>
//             </div>
//         `).join('');
//     } catch (error) {
//         console.error('Error loading dashboard:', error);
//     }
// }

// // Add New Project Button functionality
// const addProjectBtn = document.getElementById('addProjectBtn');
// addProjectBtn.addEventListener('click', async () => {
//     const name = prompt('Enter project name:');
//     const description = prompt('Enter project description:');
    
//     if (name && description) {
//         try {
//             await createProject({ name, description });
//             alert('Project added successfully!');
//             loadDashboard(); // Refresh the project list
//         } catch (error) {
//             console.error('Error adding project:', error);
//             alert('Failed to add project. Please try again.');
//         }
//     } else {
//         alert('Project name and description are required.');
//     }
// });

// loadDashboard();

// import { fetchProjects, fetchTasks, createProject, addTask } from './api.js';

// const projectsContainer = document.getElementById('projects-list'); // Updated to match the correct ID

// // Load projects and tasks on page load
// async function loadDashboard() {
//     try {
//         const projects = await fetchProjects();

//         // Clear existing projects and display "No ongoing projects" if none exist
//         projectsContainer.innerHTML = '';
//         if (projects.length === 0) {
//             projectsContainer.innerHTML = `
//                 <li class="list-group-item text-muted" id="no-projects">No ongoing projects. Start by adding one!</li>
//             `;
//         } else {
//             // Render projects dynamically
//             projectsContainer.innerHTML = projects.map(project => `
//                 <li class="list-group-item">
//                     <strong>${project.name}</strong> - ${project.description} 
//                     <span class="text-muted">(Due: ${project.dueDate || 'N/A'})</span>
//                 </li>
//             `).join('');
//         }
//     } catch (error) {
//         console.error('Error loading dashboard:', error);
//     }
// }

// // Handle form submission for adding a new project
// document.getElementById('project-form').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const projectName = document.getElementById('projectName').value;
//     const projectDescription = document.getElementById('projectDescription').value;
//     const dueDate = document.getElementById('dueDate').value;

//     if (projectName && projectDescription && dueDate) {
//         try {
//             await createProject({ name: projectName, description: projectDescription, dueDate });
//             alert('Project added successfully!');

//             // Refresh the project list
//             loadDashboard();

//             // Reset form and close modal
//             document.getElementById('project-form').reset();
//             const modal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
//             modal.hide();
//         } catch (error) {
//             console.error('Error adding project:', error);
//             alert('Failed to add project. Please try again.');
//         }
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// // Initialize the dashboard
// loadDashboard();

// // Import necessary functions
// import { fetchProjects, fetchTasks, createProject, addTask } from './api.js';

// // Select elements
// const projectsContainer = document.getElementById('projects-list');
// const addProjectButton = document.getElementById('addProjectButton'); // Button to trigger the modal

// // Load projects and tasks on page load
// async function loadDashboard() {
//     try {
//         const projects = await fetchProjects();

//         console.log('Fetched Projects:', projects); // Debugging line

//         // Clear existing projects and display "No ongoing projects" if none exist
//         projectsContainer.innerHTML = '';
//         if (projects.length === 0) {
//             projectsContainer.innerHTML = `
//                 <li class="list-group-item text-muted" id="no-projects">No ongoing projects. Start by adding one!</li>
//             `;
//         } else {
//             // Render projects dynamically
//             projectsContainer.innerHTML = projects.map(project => `
//                 <li class="list-group-item">
//                     <strong>${project.name}</strong> - ${project.description} 
//                     <span class="text-muted">(Due: ${project.dueDate || 'N/A'})</span>
//                 </li>
//             `).join('');
//         }
//     } catch (error) {
//         console.error('Error loading dashboard:', error);
//     }
// }

// // Event listener to show the Add Project modal
// addProjectButton.addEventListener('click', function () {
//     const modal = new bootstrap.Modal(document.getElementById('projectModal'));
//     modal.show();
// });

// // Handle form submission for adding a new project
// document.getElementById('project-form').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const projectName = document.getElementById('projectName').value;
//     const projectDescription = document.getElementById('projectDescription').value;
//     const dueDate = document.getElementById('dueDate').value;

//     if (projectName && projectDescription && dueDate) {
//         try {
//             await createProject({ name: projectName, description: projectDescription, dueDate });
//             alert('Project added successfully!');

//             // Refresh the project list
//             loadDashboard();

//             // Reset form and close modal
//             document.getElementById('project-form').reset();
//             const modal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
//             modal.hide();
//         } catch (error) {
//             console.error('Error adding project:', error);
//             alert('Failed to add project. Please try again.');
//         }
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// // Initialize the dashboard
// loadDashboard();

// import { fetchProjects, fetchTasks, createProject, addTask } from './api.js';

// // Select elements
// const projectsContainer = document.getElementById('projects-list');
// const addProjectButton = document.getElementById('addProjectButton'); // Button to trigger the modal
// const projectModal = document.getElementById('projectModal');
// const closeModalButton = document.getElementById('closeModalButton'); // Close button in the modal
// const projectForm = document.getElementById('project-form');

// // Load projects and tasks on page load
// async function loadDashboard() {
//     try {
//         const projects = await fetchProjects();

//         console.log('Fetched Projects:', projects); // Debugging line

//         // Clear existing projects and display "No ongoing projects" if none exist
//         projectsContainer.innerHTML = '';
//         if (projects.length === 0) {
//             projectsContainer.innerHTML = `
//                 <li class="list-group-item text-muted" id="no-projects">No ongoing projects. Start by adding one!</li>
//             `;
//         } else {
//             // Render projects dynamically
//             projectsContainer.innerHTML = projects.map(project => `
//                 <li class="list-group-item">
//                     <strong>${project.name}</strong> - ${project.description} 
//                     <span class="text-muted">(Due: ${project.dueDate || 'N/A'})</span>
//                 </li>
//             `).join('');
//         }
//     } catch (error) {
//         console.error('Error loading dashboard:', error);
//     }
// }

// // Event listener to show the Add Project modal
// addProjectButton.addEventListener('click', function () {
//     projectModal.classList.remove('fade', 'hidden'); // Remove 'fade' and 'hidden' to show modal
//     projectModal.style.display = 'block'; // Make modal visible
// });

// // Event listener to close the modal
// closeModalButton.addEventListener('click', function () {
//     projectModal.classList.add('fade'); // Add 'fade' class back
//     projectModal.style.display = 'none'; // Hide modal
// });

// // Handle form submission for adding a new project
// projectForm.addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const projectName = document.getElementById('projectName').value;
//     const projectDescription = document.getElementById('projectDescription').value;
//     const dueDate = document.getElementById('dueDate').value;

//     if (projectName && projectDescription && dueDate) {
//         try {
//             await createProject({ name: projectName, description: projectDescription, dueDate });
//             alert('Project added successfully!');

//             // Refresh the project list
//             loadDashboard();

//             // Reset form and close modal
//             projectForm.reset();
//             projectModal.classList.add('fade'); // Add 'fade' class back
//             projectModal.style.display = 'none'; // Hide modal
//         } catch (error) {
//             console.error('Error adding project:', error);
//             alert('Failed to add project. Please try again.');
//         }
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// // Initialize the dashboard
// loadDashboard();

// import { fetchProjects, createProject } from './api.js';

// // Select elements
// const projectsContainer = document.getElementById('projects-list');
// const projectForm = document.getElementById('project-form');

// // Load projects and tasks on page load
// async function loadDashboard() {
//     try {
//         const projects = await fetchProjects();
//         console.log('Fetched Projects:', projects); // Debugging line

//         // Clear existing projects and display "No ongoing projects" if none exist
//         projectsContainer.innerHTML = '';
//         if (projects.length === 0) {
//             projectsContainer.innerHTML = `
//                 <li class="list-group-item text-muted" id="no-projects">No ongoing projects. Start by adding one!</li>
//             `;
//         } else {
//             projectsContainer.innerHTML = projects.map(project => `
//                 <li class="list-group-item">
//                     <strong>${project.name}</strong> - ${project.description} 
//                     <span class="text-muted">(Due: ${project.dueDate || 'N/A'})</span>
//                 </li>
//             `).join('');
//         }
//     } catch (error) {
//         console.error('Error loading dashboard:', error);
//     }
// }

// // Handle form submission for adding a new project
// projectForm.addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const projectName = document.getElementById('projectName').value;
//     const projectDescription = document.getElementById('projectDescription').value;
//     const dueDate = document.getElementById('dueDate').value;

//     if (projectName && projectDescription && dueDate) {
//         try {
//             await createProject({ name: projectName, description: projectDescription, dueDate });
//             alert('Project added successfully!');

//             // Refresh the project list
//             loadDashboard();

//             // Reset form fields
//             projectForm.reset();
//         } catch (error) {
//             console.error('Error adding project:', error);
//             alert('Failed to add project. Please try again.');
//         }
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// // Initialize the dashboard
// loadDashboard();

// Import API functions
import { fetchProjects, fetchTasks, createProject, addTask } from './api.js';

// Select elements
const projectsContainer = document.getElementById('projects-list');// const toggleFormButton = document.getElementById('toggleFormButton'); // Add New button
const addProjectForm = document.getElementById('projectModal'); // Add Project form// const cancelFormButton = document.getElementById('cancelFormButton'); // Cancel button inside the form
const projectForm = document.getElementById('project-form'); // Form element

// Load projects and tasks on page load
async function loadDashboard() {
    try {
        const projects = await fetchProjects();

        console.log('Fetched Projects:', projects); // Debugging line

        // Clear existing projects and display "No ongoing projects" if none exist
        projectsContainer.innerHTML = '';
        if (projects.length === 0) {
            projectsContainer.innerHTML = `
                <li class="list-group-item text-muted" id="no-projects">No ongoing projects. Start by adding one!</li>
            `;
        } else {
            // Render projects dynamically
            projectsContainer.innerHTML = projects.map(project => `
                <li class="list-group-item">
                    <strong>${project.name}</strong> - ${project.description} 
                    <span class="text-muted">(Due: ${project.dueDate || 'N/A'})</span>
                </li>
            `).join('');
        }
    } catch (error) {
        console.error('Error loading dashboard:', error);
    }
}

// Handle form submission for adding a new project
projectForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const projectName = document.getElementById('projectName').value;
    const projectDescription = document.getElementById('projectDescription').value;
    const dueDate = document.getElementById('dueDate').value;

    if (projectName && projectDescription && dueDate) {
        try {
            await createProject({ name: projectName, description: projectDescription, dueDate });
            alert('Project added successfully!');

            // Refresh the project list
            loadDashboard();

            // Reset form and close modal
            projectForm.reset();
            const modalInstance = bootstrap.Modal.getInstance(addProjectForm);
            modalInstance.hide(); // Close the modal
        } catch (error) {
            console.error('Error adding project:', error);
            alert('Failed to add project. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

// Initialize the dashboard
loadDashboard();
