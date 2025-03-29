# 🚀 Drone Survey Management System

A full-stack web application for planning, managing, and monitoring **autonomous drone surveys** across global corporate facilities.

---

## ✨ Features

### **1. Mission Planning System**
- Create and configure **survey missions**.
- Define **survey areas, flight paths, altitudes, and waypoints**.
- Set **data collection parameters** (frequency, sensors, etc.).
- Schedule **one-time or recurring** missions.

### **2. Fleet Management Dashboard**
- Display all drones **with status (available, in-mission, charging, etc.)**.
- Show **battery levels** and other critical drone statistics.

### **3. Real-Time Mission Monitoring**
- **Live map visualization** of drones with real-time tracking (using **Socket.io**).
- Show **mission progress, estimated time remaining, and status updates**.
- Enable **control actions** (pause, resume, abort).

### **4. Survey Reporting & Analytics**
- Display **individual survey statistics** (duration, distance, coverage).
- Show **organization-wide statistics** (total surveys, completion rates, etc.).
- Fetch reports from **MongoDB** (no PDFs, just database storage).

---

## 🛠️ Tech Stack

### **Frontend (React.js)**
- **React.js (Vite)**
- **Tailwind CSS** (for styling)
- **React Leaflet** (for map visualization)
- **Socket.io Client** (for real-time drone updates)

### **Backend (Node.js, Express, MongoDB)**
- **Node.js + Express.js** (REST API)
- **MongoDB + Mongoose** (Database)
- **Socket.io** (Real-time drone tracking)
- **CORS & dotenv** (for security)

---

## 📁 Folder Structure
```
📂 drone-survey-management/
│── 📂 backend/                # Backend (Node.js, Express, MongoDB)
│   ├── 📂 controllers/        # Business logic for APIs
│   ├── 📂 models/             # Mongoose models (Drone, Mission, Report)
│   ├── 📂 routes/             # API routes
│   ├── 📂 config/             # Database connection
│   ├── 📂 socket/             # Real-time socket events
│   ├── 📝 server.js           # Express server setup
│   ├── 📝 .env                # Environment variables
│   └── 📝 package.json        # Backend dependencies
│
│── 📂 frontend/               # Frontend (React, Tailwind)
│   ├── 📂 src/
│   │   ├── 📂 components/     # Reusable UI components
│   │   ├── 📂 pages/          # Page-level components
│   │   ├── 📂 services/       # API calls
│   │   ├── 📂 context/        # State management (if needed)
│   │   ├── 📂 assets/         # Images, icons
│   │   ├── 📝 App.js          # Main React App
│   │   ├── 📝 main.jsx        # Entry point
│   │   └── 📝 index.css       # Global styles
│   ├── 📝 package.json        # Frontend dependencies
│   └── 📝 .env                # Frontend environment variables
│
└── 📝 README.md               # Project documentation
```

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/drone-survey-management.git
cd drone-survey-management
```

### **2️⃣ Backend Setup**
```sh
cd backend
npm install   # Install dependencies
npm start     # Start the backend server
```
- **Environment Variables (`.env`)**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### **3️⃣ Frontend Setup**
```sh
cd frontend
npm install   # Install dependencies
npm run dev   # Start the frontend
```
- **Environment Variables (`.env`)**
```env
VITE_API_URL=http://localhost:5000
```

---

## 📝 API Endpoints

### **Mission APIs**
| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| `POST` | `/api/missions`      | Create a new mission        |
| `GET`  | `/api/missions`      | Get all missions            |
| `GET`  | `/api/missions/:id`  | Get a mission by ID         |

### **Drone APIs**
| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| `POST` | `/api/drones`        | Register a new drone        |
| `GET`  | `/api/drones`        | Get all drones              |
| `GET`  | `/api/drones/:id`    | Get a drone by ID           |

### **Report APIs**
| Method | Endpoint             | Description                 |
|--------|----------------------|-----------------------------|
| `POST` | `/api/reports`       | Create a new survey report  |
| `GET`  | `/api/reports`       | Get all reports             |

---

## 📊 Real-Time Drone Tracking
- Uses **Socket.io** for live mission tracking.
- Displays drones on a **map** (React Leaflet).
- Updates mission **status in real-time**.

---

## 💡 Future Improvements
✅ Add **user authentication** (JWT).  
✅ Improve **UI/UX** with better animations.  
✅ Implement **more advanced survey patterns**.  

---

## 🛠️ Contributions & Issues
If you find any issues or want to contribute, feel free to **open a pull request or an issue**. 🚀  

---

## 📝 License
This project is **MIT Licensed**.

