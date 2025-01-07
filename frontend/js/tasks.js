// // Import API functions
// import { fetchTasks, createTask } from './api.js';

// // Select elements
// const todoList = document.getElementById('todo-list');
// const inProgressList = document.getElementById('in-progress-list');
// const completedList = document.getElementById('completed-list');
// const taskForm = document.getElementById('task-form');
// const taskModal = document.getElementById('taskModal');

// // Load tasks on page load
// async function loadTasks() {
//     try {
//         const tasks = await fetchTasks();

//         // Clear current task lists
//         todoList.innerHTML = '';
//         inProgressList.innerHTML = '';
//         completedList.innerHTML = '';

//         // Populate task lists based on status
//         tasks.forEach(task => {
//             const taskItem = `
//                 <li class="list-group-item">
//                     <strong>${task.name}</strong> - ${task.description}
//                     <span class="text-muted">[${task.status}]</span>
//                 </li>
//             `;

//             if (task.status === 'todo') {
//                 todoList.innerHTML += taskItem;
//             } else if (task.status === 'in-progress') {
//                 inProgressList.innerHTML += taskItem;
//             } else if (task.status === 'completed') {
//                 completedList.innerHTML += taskItem;
//             }
//         });
//     } catch (error) {
//         console.error('Error loading tasks:', error);
//     }
// }

// // Handle task form submission
// taskForm.addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const taskName = document.getElementById('taskName').value;
//     const taskDescription = document.getElementById('taskDescription').value;
//     const taskStatus = document.getElementById('taskStatus').value;

//     if (taskName && taskDescription && taskStatus) {
//         try {
//             await createTask({ name: taskName, description: taskDescription, status: taskStatus });
//             alert('Task added successfully!');
//             taskForm.reset();
//             const modalInstance = bootstrap.Modal.getInstance(taskModal);
//             modalInstance.hide();
//             loadTasks();
//         } catch (error) {
//             console.error('Error adding task:', error);
//             alert('Failed to add task. Please try again.');
//         }
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

// // Initialize task list
// loadTasks();

// // tasks.js
// import { fetchProjects, fetchTasks, createProject, addTask } from './api.js';

// document.addEventListener("DOMContentLoaded", () => {
//     fetchProjects();
//     fetchTasks();
    
//     // Handle task form submission
//     const taskForm = document.getElementById("task-form");
//     taskForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         addTask();
//     });
// });

// // Fetch all projects and populate the project dropdown
// async function fetchProjects() {
//     try {
//         const response = await fetch('/api/projects'); // Adjust endpoint if necessary
//         const projects = await response.json();
        
//         const projectDropdown = document.getElementById("taskProject");
//         projectDropdown.innerHTML = ""; // Clear existing options
        
//         projects.forEach(project => {
//             const option = document.createElement("option");
//             option.value = project.id;
//             option.textContent = project.name;
//             projectDropdown.appendChild(option);
//         });
//     } catch (error) {
//         console.error("Error fetching projects:", error);
//     }
// }

// // Fetch all tasks and group them by status
// async function fetchTasks() {
//     try {
//         const response = await fetch('/api/tasks'); // Adjust endpoint if necessary
//         const tasks = await response.json();
        
//         // Clear existing task lists
//         document.getElementById("todo-tasks").innerHTML = "";
//         document.getElementById("inprogress-tasks").innerHTML = "";
//         document.getElementById("completed-tasks").innerHTML = "";
        
//         tasks.forEach(task => {
//             const taskItem = createTaskItem(task);
//             const statusList = document.getElementById(`${task.status.toLowerCase().replace(" ", "")}-tasks`);
//             statusList.appendChild(taskItem);
//         });
//     } catch (error) {
//         console.error("Error fetching tasks:", error);
//     }
// }

// // Create a task item element
// function createTaskItem(task) {
//     const li = document.createElement("li");
//     li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
    
//     const content = `
//         <div>
//             <div class="fw-bold">${task.name}</div>
//             <small>Project: ${task.project_name}</small>
//         </div>
//         <span class="badge bg-secondary">${task.due_date}</span>
//     `;
//     li.innerHTML = content;
//     return li;
// }

// // Add a new task
// async function addTask() {
//     const taskName = document.getElementById("taskName").value.trim();
//     const taskDescription = document.getElementById("taskDescription").value.trim();
//     const taskDueDate = document.getElementById("taskDueDate").value;
//     const taskStatus = document.getElementById("taskStatus").value;
//     const taskProject = document.getElementById("taskProject").value;
    
//     if (!taskName || !taskDescription || !taskDueDate || !taskProject) {
//         alert("Please fill in all fields.");
//         return;
//     }
    
//     const newTask = {
//         name: taskName,
//         description: taskDescription,
//         due_date: taskDueDate,
//         status: taskStatus,
//         project_id: taskProject
//     };
    
//     try {
//         const response = await fetch('/api/tasks', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(newTask)
//         });
        
//         if (response.ok) {
//             alert("Task added successfully!");
//             fetchTasks(); // Refresh task list
//             document.getElementById("task-form").reset(); // Clear form
//             const taskModal = bootstrap.Modal.getInstance(document.getElementById("taskModal"));
//             taskModal.hide();
//         } else {
//             console.error("Failed to add task:", response.statusText);
//         }
//     } catch (error) {
//         console.error("Error adding task:", error);
//     }
// }

// tasks.js

import { fetchProjects, fetchTasks, addTask } from './api.js';

// Select elements
const taskForm = document.getElementById('task-form');
const taskModal = document.getElementById('taskModal');
const taskProjectDropdown = document.getElementById('taskProject');
const taskOverviewContainer = document.getElementById('tasks-overview');

// Fetch and populate project dropdown
async function populateProjectDropdown() {
    try {
        const projects = await fetchProjects();
        taskProjectDropdown.innerHTML = ''; // Clear existing options

        if (projects.length === 0) {
            taskProjectDropdown.innerHTML = `
                <option value="" disabled>No projects available</option>
            `;
            taskProjectDropdown.disabled = true;
        } else {
            taskProjectDropdown.disabled = false;
            projects.forEach(project => {
                const option = document.createElement('option');
                option.value = project.id;
                option.textContent = project.name;
                taskProjectDropdown.appendChild(option);
            });
        }
    } catch (error) {
        console.error('Error populating project dropdown:', error);
    }
}

function generateTaskHTML(task) {
    return `
        <li class="list-group-item">
            <strong>${task.task_name || 'Unnamed Task'}</strong>
            <br>
            <small>Project: ${task.project_name || 'N/A'}</small>
            <br>
            <small>Due: ${task.due_date || 'No due date'}</small>
        </li>
    `;
}


async function loadTasksOverview() {
    const todoColumn = document.getElementById('todo-tasks');
    const inProgressColumn = document.getElementById('inprogress-tasks');
    const completedColumn = document.getElementById('completed-tasks');

    // Clear previous content
    todoColumn.innerHTML = '';
    inProgressColumn.innerHTML = '';
    completedColumn.innerHTML = '';

    try {
        const tasks = await fetchTasks();

        tasks.forEach(task => {
            const taskHTML = generateTaskHTML(task);

            // Populate tasks based on their status
            switch (task.status) {
                case 'To Do':
                    todoColumn.innerHTML += taskHTML;
                    break;
                case 'In Progress':
                    inProgressColumn.innerHTML += taskHTML;
                    break;
                case 'Done':
                    completedColumn.innerHTML += taskHTML;
                    break;
                default:
                    console.warn(`Unknown task status: ${task.status}`);
            }
        });
    } catch (error) {
        console.error('Error loading tasks overview:', error);
    }
}


// Handle task form submission
taskForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('taskName').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const status = document.getElementById('taskStatus').value;
    const projectId = taskProjectDropdown.value;

    if (name && description && dueDate && status && projectId) {
        try {
            await addTask({ name, description, due_date: dueDate, status, project_id: projectId });
            alert('Task added successfully!');

            // Refresh tasks overview
            loadTasksOverview();

            // Reset form and close modal
            taskForm.reset();
            const modalInstance = bootstrap.Modal.getInstance(taskModal);
            modalInstance.hide(); // Close the modal
        } catch (error) {
            console.error('Error adding task:', error);
            alert('Failed to add task. Please try again.');
        }
    } else {
        alert('Please fill in all fields.');
    }
});

// Initialize tasks page
async function initializeTasksPage() {
    await populateProjectDropdown();
    await loadTasksOverview();
}

document.addEventListener('DOMContentLoaded', initializeTasksPage);