# Finora - Stock Trading & Investment Platform

A full-stack Finora-inspired trading platform developed as an educational and portfolio project.

The project is divided into three independent applications:

- Frontend
- Backend
- Dashboard

---

## Project Overview

The application provides a complete flow from the public landing website to authentication and the user trading dashboard.

```text
                         Finora Clone
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
         Frontend          Backend          Dashboard
             │                │                │
             │                ▼                │
             │             MongoDB             │
             │                │                │
             └────── Authentication ───────────┘
```

---

# Applications

## 1. Frontend

The frontend contains the public-facing website and authentication pages.

Main sections include:

- Home
- About
- Products
- Pricing
- Support
- Login
- Signup
- Open Account
- Footer
- Navigation

Technology:

- React
- React Router
- Chart.js
- React Chart.js
- CSS
- JavaScript

Frontend folder:

```text
frontend/
```

---

## 2. Backend

The backend acts as the central API server.

Responsibilities include:

- User registration
- User login
- Authentication
- Password security
- Database communication
- API handling
- Request validation
- CORS
- Cookies
- JWT
- Socket.IO

Technology:

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Passport
- Socket.IO
- Zod

Backend folder:

```text
backend/
```

---

## 3. Dashboard

The dashboard is the authenticated user interface.

It contains trading-related sections such as:

- Dashboard
- Watchlist
- Orders
- Holdings
- Positions
- Funds
- Apps
- Profile
- Buy Action
- Charts
- Portfolio information

Technology:

- React
- Vite
- React Router
- Axios
- Zustand
- Chart.js
- Recharts
- Socket.IO Client
- Material UI
- React Icons
- React Hot Toast

Dashboard folder:

```text
dashboard/
```

---

# Complete Project Structure

```text
Finora_clone/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── landing_Page/
│   │   │   ├── About/
│   │   │   ├── Home/
│   │   │   ├── Login/
│   │   │   ├── Pricing/
│   │   │   ├── Products/
│   │   │   ├── Sign up/
│   │   │   └── Supports/
│   │   │
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── README.md
│
├── backend/
│   │
│   ├── model/
│   ├── schemas/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
├── dashboard/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── index.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── README.md
│
└── README.md
```

---

# Application Flow

The complete application follows this flow:

```text
User
 │
 ▼
Frontend
 │
 ├── Home
 ├── About
 ├── Products
 ├── Pricing
 ├── Support
 └── Login / Signup
 │
 ▼
Backend
 │
 ├── Authentication
 ├── User Validation
 ├── Database
 └── API
 │
 ▼
Dashboard
 │
 ├── Watchlist
 ├── Orders
 ├── Holdings
 ├── Positions
 ├── Funds
 └── Apps
```

---

# Authentication Flow

```text
User
 │
 ▼
Signup
 │
 ▼
Backend
 │
 ▼
MongoDB
 │
 ▼
User Created
```

Login:

```text
User
 │
 ▼
Login Page
 │
 ▼
POST /login
 │
 ▼
Backend
 │
 ▼
Validate Credentials
 │
 ▼
Authentication
 │
 ▼
User Data
 │
 ▼
Dashboard
```

The authenticated user's information can then be used by the dashboard to display user-specific information.

---

# Local Development

The project uses three applications during development.

```text
Frontend   → localhost:3000
Backend    → localhost:3002
Dashboard  → localhost:5173
```

Run each application in a separate terminal.

---

# 1. Start Backend

Open a terminal:

```bash
cd backend
npm install
npm start
```

Backend:

```text
http://localhost:3002
```

---

# 2. Start Frontend

Open another terminal:

```bash
cd frontend
npm install
npm start
```

Frontend:

```text
http://localhost:3000
```

---

# 3. Start Dashboard

Open another terminal:

```bash
cd dashboard
npm install
npm run dev
```

Dashboard:

```text
http://localhost:5173
```

---

# Environment Variables

The backend uses environment variables for configuration.

Create:

```text
backend/.env
```

Example:

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Use your actual values locally.

Never commit `.env` to GitHub.

---

# Frontend ↔ Backend

The frontend communicates with the backend using HTTP requests.

Example:

```text
Frontend
   │
   │ POST /login
   ▼
Backend
   │
   ▼
MongoDB
   │
   ▼
Backend Response
   │
   ▼
Frontend
```

---

# Backend ↔ Dashboard

After successful authentication, the user can access the dashboard.

```text
Frontend
   │
   │ Login
   ▼
Backend
   │
   │ Authentication
   ▼
Dashboard
```

The dashboard uses the authenticated user's information to display personalized data.

---

# Dashboard Features

The dashboard currently includes:

### Dashboard

Displays:

- User information
- Equity
- Margin available
- Holdings
- P&L
- Portfolio information

### Watchlist

Displays market-related instruments and allows interaction with trading actions.

### Orders

Provides the order section for trading-related operations.

### Holdings

Displays portfolio holdings.

### Positions

Displays current positions.

### Funds

Provides:

- Available margin
- Used margin
- Available cash
- Opening balance
- Payin
- SPAN
- Delivery margin
- Exposure
- Options premium
- Collateral

### Apps

Provides an application section for additional platform features.

---

# Charts

The dashboard includes chart-based visualization using libraries such as:

```text
Chart.js
React Chart.js
Recharts
```

Charts can be used to visualize portfolio and market-related information.

---

# Real-Time Communication

The backend uses:

```text
Socket.IO
```

and the dashboard includes:

```text
socket.io-client
```

This provides a foundation for real-time features.

Possible uses include:

- Market updates
- Order updates
- Notifications
- Portfolio updates
- Trading events

---

# State Management

The dashboard uses:

```text
Zustand
```

for client-side state management.

This can be used to manage:

- User state
- Application state
- Trading state
- UI state

---

# API Communication

The dashboard uses:

```text
Axios
```

for HTTP communication with the backend.

---

# UI and Icons

The dashboard uses:

```text
Material UI
React Icons
React Hot Toast
```

for UI components, icons, notifications, and user feedback.

---

# Installation

Clone the project:

```bash
git clone <your-repository-url>
```

Move into the project:

```bash
cd Finora_clone
```

Install dependencies separately for each application.

### Frontend

```bash
cd frontend
npm install
```

### Backend

```bash
cd backend
npm install
```

### Dashboard

```bash
cd dashboard
npm install
```

---

# Running the Complete Project

Use three terminals.

### Terminal 1

```bash
cd backend
npm start
```

### Terminal 2

```bash
cd frontend
npm start
```

### Terminal 3

```bash
cd dashboard
npm run dev
```

Then open:

```text
Frontend:
http://localhost:3000
```

```text
Dashboard:
http://localhost:5173
```

---

# Build for Production

## Frontend

```bash
cd frontend
npm run build
```

The production build will be generated by Create React App.

---

## Dashboard

```bash
cd dashboard
npm run build
```

The production build will be generated by Vite.

---

## Backend

The backend can be deployed as a Node.js/Express application.

Before deployment:

- Configure production environment variables.
- Configure MongoDB.
- Update CORS.
- Update API URLs.
- Use HTTPS.
- Keep secrets private.

---

# Deployment Architecture

A possible production architecture:

```text
                    Internet
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
      Frontend                  Dashboard
          │                         │
          └──────────┬──────────────┘
                     │
                     ▼
                  Backend
                     │
                     ▼
                  MongoDB
```

The frontend and dashboard can be deployed separately while both communicate with the deployed backend.

---

# Important Deployment Changes

Before deployment, replace local URLs such as:

```text
http://localhost:3002
```

with the deployed backend URL.

For example:

```text
https://your-backend-domain.com
```

Also configure the backend CORS settings to allow the deployed frontend and dashboard domains.

---

# Security

For production:

- Do not commit `.env`.
- Do not expose MongoDB credentials.
- Use strong JWT secrets.
- Use HTTPS.
- Configure CORS properly.
- Validate user input.
- Hash passwords.
- Protect private APIs.
- Use secure authentication mechanisms.
- Keep dependencies updated.

---

# Project Goals

The main goals of this project are:

- Build a complete full-stack application.
- Practice React development.
- Practice Node.js and Express.
- Practice MongoDB and Mongoose.
- Implement authentication.
- Build a trading dashboard.
- Work with REST APIs.
- Work with charts.
- Work with real-time communication.
- Understand frontend-backend integration.
- Create a production-style project structure.

---

# Future Improvements

Possible future improvements:

- Complete protected route system
- Refresh token authentication
- Advanced order management
- Real market data integration
- Complete portfolio calculations
- Transaction history
- Advanced charts
- Real-time price updates
- Notifications
- Advanced user profile
- Better error handling
- Automated testing
- API documentation
- Rate limiting
- Production monitoring

---

# Disclaimer

This is an educational and portfolio project inspired by the concept of an online trading platform.

It is not the official Finora application and is not intended for real-money trading.

---

# Author

**Rahul Kumar Maurya**

---

# License

This project is created for educational and portfolio purposes.


