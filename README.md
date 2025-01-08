# Projectiva2

Projectiva2 is a sleek, modern, and minimalistic project management web application designed to help teams and individuals efficiently manage multiple projects simultaneously. Inspired by tools like Notion, Trello, and Asana, Projectiva2 focuses on user-friendliness, functionality, and a visually appealing interface to streamline your workflow.

## Features

### Core Features
1. **User Authentication**  
   - Sign up, log in, log out, and password security to keep your data safe.

2. **Project Management**  
   - Create, view, update, and delete projects.
   - Assign projects to specific users.

3. **Task Management**  
   - Create, view, update, and delete tasks.
   - Categorize tasks by status (e.g., To Do, In Progress, Completed).
   - Associate tasks with specific projects.

4. **Collaboration Tools**  
   - Add comments to tasks.
   - Receive notifications for task updates.

5. **Dashboard and Analytics**  
   - Get an overview of all projects and tasks.
   - Track task completion rates and project progress through visual charts.

### Design Philosophy
- **Minimalistic yet Unique:** Modern UI with vibrant colors and clean typography.
- **Responsive Design:** Fully functional on both desktop and mobile devices.
- **User-Centric:** Simple navigation and clutter-free interface.

## Tech Stack

### Frontend
- **Languages:** HTML, CSS, JavaScript
- **Framework:** Bootstrap
- **Other Tools:** Google Fonts for typography

### Backend
- **Language:** JavaScript (Node.js)
- **Framework:** Express.js

### Database
- **PostgreSQL:** Stores all user, project, and task data.

### API Integration
- RESTful API for efficient data exchange between frontend and backend.

## Folder Structure
```
projectiva2/
  ├── backend/
  │   ├── server.js
  │   ├── db/
  │   │   └── db.js
  │   ├── routes/
  │   │   ├── projectRoutes.js
  │   │   └── taskRoutes.js
  ├── frontend/
  │   ├── index.html
  │   ├── dashboard.html
  │   ├── analytics.html
  │   ├── css/
  │   │   └── styles.css
  │   ├── js/
  │       ├── dashboard.js
  │       └── api.js
```

## Getting Started

### Prerequisites
- Node.js and npm installed.
- PostgreSQL installed and running.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/projectiva2.git
   ```

2. Navigate to the project folder:
   ```bash
   cd projectiva2
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Configure the database connection in `backend/db/db.js`.

5. Run the backend server:
   ```bash
   node server.js
   ```

6. Open the frontend files in your browser (e.g., `frontend/index.html`).

## Usage
1. Sign up or log in.
2. Create a new project using the dashboard.
3. Add tasks to your project and track their progress.
4. Use the analytics page to monitor overall project performance.

## Contributing
We welcome contributions! Feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

**Projectiva2 - Simplifying Project Management for Everyone!**


