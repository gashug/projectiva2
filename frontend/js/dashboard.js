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

// // Import API functions
// import { fetchProjects, fetchTasks, createProject, addTask } from './api.js';

// // Select elements
// const projectsContainer = document.getElementById('projects-list');// const toggleFormButton = document.getElementById('toggleFormButton'); // Add New button
// const addProjectForm = document.getElementById('projectModal'); // Add Project form// const cancelFormButton = document.getElementById('cancelFormButton'); // Cancel button inside the form
// const projectForm = document.getElementById('project-form'); // Form element

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
//             const modalInstance = bootstrap.Modal.getInstance(addProjectForm);
//             modalInstance.hide(); // Close the modal
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

// // Import API functions
// import { fetchProjects, fetchTasks, createProject, updateProject, deleteProject } from './api.js';

// // Select elements
// const projectsContainer = document.getElementById('projects-container');
// const addProjectForm = document.getElementById('projectModal');
// const projectForm = document.getElementById('project-form');
// const projectDetailsModal = new bootstrap.Modal(document.getElementById('projectDetailsModal'));
// const editProjectModal = new bootstrap.Modal(document.getElementById('editProjectModal'));
// const projectDetailsContainer = document.getElementById('project-details');

// // Load projects on page load
// async function loadDashboard() {
//     try {
//         const projects = await fetchProjects();

//         // Clear existing projects and display "No ongoing projects" if none exist
//         projectsContainer.innerHTML = '';
//         if (projects.length === 0) {
//             projectsContainer.innerHTML = `
//                 <div class="col-12">
//                     <div class="card text-center">
//                         <div class="card-body text-muted">
//                             No ongoing projects. Start by adding one!
//                         </div>
//                     </div>
//                 </div>
//             `;
//         } else {
//             // Render projects dynamically as cards with rounded corners
//             projectsContainer.innerHTML = projects.map(project => `
//                 <div class="col-md-4 mb-4">
//                     <div class="card shadow-sm rounded-3">
//                         <div class="card-body">
//                             <h5 class="card-title">${project.name}</h5>
//                             <p class="card-text">${project.description}</p>
//                             <button class="btn btn-primary view-project-btn" data-id="${project.id}">View</button>
//                             <button class="btn btn-warning edit-project-btn" data-id="${project.id}">Edit</button>
//                             <button class="btn btn-danger delete-project-btn" data-id="${project.id}">Delete</button>
//                         </div>
//                     </div>
//                 </div>
//             `).join('');

//             // Attach event listeners to buttons
//             document.querySelectorAll('.view-project-btn').forEach(button => {
//                 button.addEventListener('click', handleViewProject);
//             });

//             document.querySelectorAll('.edit-project-btn').forEach(button => {
//                 button.addEventListener('click', handleEditProject);
//             });

//             document.querySelectorAll('.delete-project-btn').forEach(button => {
//                 button.addEventListener('click', handleDeleteProject);
//             });
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

//             // Reset form and close modal
//             projectForm.reset();
//             const modalInstance = bootstrap.Modal.getInstance(addProjectForm);
//             modalInstance.hide();
//         } catch (error) {
//             console.error('Error adding project:', error);
//             alert('Failed to add project. Please try again.');
//         }
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// // Handle "View Project" button click
// async function handleViewProject(event) {
//     const projectId = event.target.dataset.id;
//     try {
//         const response = await fetch(`http://localhost:5001/api/projects/${projectId}`);
//         if (!response.ok) throw new Error(`Error ${response.status}: Failed to fetch project details`);
//         const project = await response.json();

//         projectDetailsContainer.innerHTML = `
//             <h6>Project Name:</h6>
//             <p>${project.name}</p>
//             <h6>Description:</h6>
//             <p>${project.description}</p>
//             <h6>Due Date:</h6>
//             <p>${project.due_date || 'N/A'}</p>
//         `;
//         projectDetailsModal.show();
//     } catch (error) {
//         console.error('Error fetching project details:', error);
//         alert('Failed to load project details.');
//     }
// }

// // Handle "Edit Project" button click
// async function handleEditProject(event) {
//     const projectId = event.target.dataset.id;
//     try {
//         const response = await fetch(`http://localhost:5001/api/projects/${projectId}`);
//         if (!response.ok) throw new Error(`Error ${response.status}: Failed to fetch project details`);
//         const project = await response.json();

//         document.getElementById('editProjectName').value = project.name;
//         document.getElementById('editProjectDescription').value = project.description;
//         document.getElementById('editDueDate').value = project.due_date;

//         document.getElementById('saveEditProject').onclick = async () => {
//             const updatedProject = {
//                 name: document.getElementById('editProjectName').value,
//                 description: document.getElementById('editProjectDescription').value,
//                 dueDate: document.getElementById('editDueDate').value,
//             };

//             await updateProject(projectId, updatedProject);
//             alert('Project updated successfully!');
//             editProjectModal.hide();
//             loadDashboard();
//         };

//         editProjectModal.show();
//     } catch (error) {
//         console.error('Error editing project:', error);
//     }
// }

// // Handle "Delete Project" button click
// async function handleDeleteProject(event) {
//     const projectId = event.target.dataset.id;
//     if (confirm('Are you sure you want to delete this project?')) {
//         try {
//             await deleteProject(projectId);
//             alert('Project deleted successfully!');
//             loadDashboard();
//         } catch (error) {
//             console.error('Error deleting project:', error);
//             alert('Failed to delete project.');
//         }
//     }
// }

// // Initialize the dashboard
// loadDashboard();

// // Import API functions
// import { fetchProjects, fetchTasks, createProject, updateProject, deleteProject } from './api.js';

// // Select elements
// const projectsContainer = document.getElementById('projects-container');
// const addProjectForm = document.getElementById('projectModal');
// const projectForm = document.getElementById('project-form');
// const projectDetailsModal = new bootstrap.Modal(document.getElementById('projectDetailsModal'));
// const editProjectModal = new bootstrap.Modal(document.getElementById('editProjectModal'));
// const projectDetailsContainer = document.getElementById('project-details');

// // Load projects on page load
// async function loadDashboard() {
//     try {
//         const projects = await fetchProjects();
//         console.log(projects);

//         // Clear existing projects and display "No ongoing projects" if none exist
//         projectsContainer.innerHTML = '';
//         if (projects.length === 0) {
//             projectsContainer.innerHTML = `
//                 <div class="col-12">
//                     <div class="card text-center">
//                         <div class="card-body text-muted">
//                             No ongoing projects. Start by adding one!
//                         </div>
//                     </div>
//                 </div>
//             `;
//         } else {
//             // Render projects dynamically as cards with rounded corners
//             projectsContainer.innerHTML = projects.map(project => `
//                 <div class="col-md-4 mb-4">
//                     <div class="card shadow-sm rounded-3">
//                         <div class="card-body">
//                             <h5 class="card-title">${project.name}</h5>
//                             <p class="card-text">${project.description}</p>
//                             <button class="btn btn-primary view-project-btn" data-id="${project.id}">View</button>
//                             <button class="btn btn-warning edit-project-btn" data-id="${project.id}">Edit</button>
//                             <button class="btn btn-danger delete-project-btn" data-id="${project.id}">Delete</button>
//                         </div>
//                     </div>
//                 </div>
//             `).join('');

//             // Attach event listeners to buttons
//             document.querySelectorAll('.view-project-btn').forEach(button => {
//                 button.addEventListener('click', handleViewProject);
//             });

//             document.querySelectorAll('.edit-project-btn').forEach(button => {
//                 button.addEventListener('click', handleEditProject);
//             });

//             document.querySelectorAll('.delete-project-btn').forEach(button => {
//                 button.addEventListener('click', handleDeleteProject);
//             });
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

//             // Reset form and close modal
//             projectForm.reset();
//             const modalInstance = bootstrap.Modal.getInstance(addProjectForm);
//             modalInstance.hide();
//         } catch (error) {
//             console.error('Error adding project:', error);
//             alert('Failed to add project. Please try again.');
//         }
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// // Handle "View Project" button click
// async function handleViewProject(event) {
//     const projectId = event.target.dataset.id;
//     try {
//         const response = await fetch(`http://localhost:5001/api/projects/${projectId}`);
//         if (!response.ok) throw new Error(`Error ${response.status}: Failed to fetch project details`);
//         const project = await response.json();

//         projectDetailsContainer.innerHTML = `
//             <h6>Project Name:</h6>
//             <p>${project.name}</p>
//             <h6>Description:</h6>
//             <p>${project.description}</p>
//             <h6>Due Date:</h6>
//             <p>${project.due_date || 'N/A'}</p>
//         `;
//         projectDetailsModal.show();
//     } catch (error) {
//         console.error('Error fetching project details:', error);
//         alert('Failed to load project details.');
//     }
// }

// // Handle "Edit Project" button click
// async function handleEditProject(event) {
//     const projectId = event.target.dataset.id;
//     try {
//         const response = await fetch(`http://localhost:5001/api/projects/${projectId}`);
//         if (!response.ok) throw new Error(`Error ${response.status}: Failed to fetch project details`);
//         const project = await response.json();

//         document.getElementById('editProjectName').value = project.name;
//         document.getElementById('editProjectDescription').value = project.description;
//         document.getElementById('editDueDate').value = project.due_date;

//         document.getElementById('saveEditProject').onclick = async () => {
//             const updatedProject = {
//                 name: document.getElementById('editProjectName').value,
//                 description: document.getElementById('editProjectDescription').value,
//                 dueDate: document.getElementById('editDueDate').value,
//             };

//             await updateProject(projectId, updatedProject);
//             alert('Project updated successfully!');
//             editProjectModal.hide();
//             loadDashboard();
//         };

//         editProjectModal.show();
//     } catch (error) {
//         console.error('Error editing project:', error);
//     }
// }

// // Handle "Delete Project" button click
// async function handleDeleteProject(event) {
//     const projectId = event.target.dataset.id;
//     if (confirm('Are you sure you want to delete this project?')) {
//         try {
//             await deleteProject(projectId);
//             alert('Project deleted successfully!');
//             loadDashboard();
//         } catch (error) {
//             console.error('Error deleting project:', error);
//             alert('Failed to delete project.');
//         }
//     }
// }

// // Initialize the dashboard
// loadDashboard();


// Import API functions
import { fetchProjects, fetchTasks, createProject, addTask } from './api.js';

// Select elements
const projectsContainer = document.getElementById('projects-container');
const addProjectForm = document.getElementById('projectModal');
const projectForm = document.getElementById('project-form');
const projectDetailsModal = new bootstrap.Modal(document.getElementById('projectDetailsModal'));
const projectDetailsContainer = document.getElementById('project-details');

// Load projects on page load
async function loadDashboard() {
    try {
        const projects = await fetchProjects();

        // Clear existing projects and display "No ongoing projects" if none exist
        projectsContainer.innerHTML = '';
        if (projects.length === 0) {
            projectsContainer.innerHTML = `
                <div class="col-12">
                    <div class="card text-center">
                        <div class="card-body text-muted">
                            No ongoing projects. Start by adding one!
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Render projects dynamically as cards with rounded corners
            projectsContainer.innerHTML = projects.map(project => `
                <div class="col-md-4 mb-4">
                    <div class="card shadow-sm rounded-3">
                        <div class="card-body">
                            <h5 class="card-title">${project.name}</h5>
                            <p class="card-text">${project.description}</p>
                            <button class="btn btn-primary view-project-btn" data-id="${project.id}">View Project</button>
                            <button class="btn btn-secondary edit-project-btn" data-id="${project.id}" data-name="${project.name}" data-description="${project.description}">Edit</button>
                            <button class="btn btn-danger delete-project-btn" data-id="${project.id}">Delete</button>
                        </div>
                    </div>
                </div>
            `).join('');

            // Attach event listeners
            document.querySelectorAll('.view-project-btn').forEach(button => {
                button.addEventListener('click', handleViewProject);
            });
            document.querySelectorAll('.edit-project-btn').forEach(button => {
                button.addEventListener('click', handleEditProject);
            });
            document.querySelectorAll('.delete-project-btn').forEach(button => {
                button.addEventListener('click', handleDeleteProject);
            });
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
            modalInstance.hide();
        } catch (error) {
            console.error('Error adding project:', error);
            alert('Failed to add project. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle "View Project" button click
async function handleViewProject(event) {
    const projectId = event.target.dataset.id;
    try {
        const response = await fetch(`http://localhost:5001/api/projects/${projectId}`);
        if (!response.ok) throw new Error(`Error ${response.status}: Failed to fetch project details`);
        const project = await response.json();

        // Populate modal with project details
        projectDetailsContainer.innerHTML = `
            <h6>Project Name:</h6>
            <p>${project.name}</p>
            <h6>Description:</h6>
            <p>${project.description}</p>
            <h6>Due Date:</h6>
            <p>${project.due_date || 'N/A'}</p>
        `;const projectName = event.target.dataset.name;
        const projectDescription = event.target.dataset.description

        // Show the modal
        projectDetailsModal.show();
    } catch (error) {
        console.error('Error fetching project details:', error);
        alert('Failed to load project details.');
    }
}

// Handle "Edit Project" button click
function handleEditProject(event) {
    const projectId = event.target.dataset.id;
    const projectName = event.target.dataset.name;
    const projectDescription = event.target.dataset.description;

    // Populate the form with existing project details
    document.getElementById('projectName').value = projectName;
    document.getElementById('projectDescription').value = projectDescription;

    // Update form submission handler for editing
    projectForm.onsubmit = async function (e) {
        e.preventDefault();
        const updatedName = document.getElementById('projectName').value;
        const updatedDescription = document.getElementById('projectDescription').value;

        try {
            await fetch(`http://localhost:5001/api/projects/${projectId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: updatedName, description: updatedDescription }),
            });
            alert('Project updated successfully!');
            loadDashboard();
            bootstrap.Modal.getInstance(addProjectForm).hide();
        } catch (error) {
            console.error('Error updating project:', error);
            alert('Failed to update project.');
        }
    };

    // Show the modal
    bootstrap.Modal.getInstance(addProjectForm).show();
}

// Handle "Delete Project" button click
async function handleDeleteProject(event) {
    const projectId = event.target.dataset.id;

    if (confirm('Are you sure you want to delete this project?')) {
        try {
            await fetch(`http://localhost:5001/api/projects/${projectId}`, { method: 'DELETE' });
            alert('Project deleted successfully!');
            loadDashboard();
        } catch (error) {
            console.error('Error deleting project:', error);
            alert('Failed to delete project.');
        }
    }
}

// Initialize the dashboard
loadDashboard();
