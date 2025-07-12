🐅 igerOps – Full Stack Auth & Task Management App
Welcome to igerOps, a containerized full-stack project featuring a React frontend and Node.js microservices for authentication and task management. Built with Docker, GitHub, and designed for easy deployment via Render, Railway, or Vercel.

🚀 Features
- 🔐 Auth Service – Handles user registration, login, and JWT authentication
- 📋 Task Service – CRUD API for managing user tasks
- 🎨 Frontend Service – React app with clean UI, connects to backend APIs
- 🐳 Dockerized Stack – Each service runs in its own container via docker-compose
- 🌐 API Integration – Frontend wired to backend using environment variables
- 📦 GitHub Repo – Version-controlled and deployment-ready at kuurbe/igerOps

🧱 Tech Stack
| Layer | Tech | 
| Frontend | React (with serve) | 
| Backend | Node.js, Express | 
| Auth | JWT, bcrypt, Express | 
| Docker | Multi-container setup | 
| DevOps | GitHub + Docker Compose | 



🛠️ Local Setup
Prerequisites
- Docker & Docker Compose installed
- Node.js (if running services outside container)
Clone & Run
git clone https://github.com/kuurbe/igerOps.git
cd igerOps
docker-compose up --build


App will be live at:
- http://localhost:3000 – Frontend
- http://localhost:3002 – Auth Service
- http://localhost:3003 – Task Service

📂 Folder Structure
igerOps/
├── auth-service/
├── task-service/
├── frontend-service/
├── docker-compose.yml
└── README.md


Each service has its own Dockerfile and handles its own logic independently.

🧪 API Endpoints
Auth Service (localhost:3002)
- POST /register – Create account
- POST /login – Authenticate and receive JWT
Task Service (localhost:3003)
- GET /tasks – List all tasks
- POST /tasks – Create a task
- PUT /tasks/:id – Update a task
- DELETE /tasks/:id – Remove a task
All routes require valid JWT in headers.

🌍 Deployment Options
- Frontend → Vercel (auto-deploy from GitHub)
- Backend → Render or Railway (Docker-supported)
- Secrets → GitHub repo settings + .env per service

👤 Author
Developed by @kuurbe – full-stack architect in the making 🐅⚡
Crafted with sweat, claws, and containers.

🧭 License
MIT – free to roam and customize.
