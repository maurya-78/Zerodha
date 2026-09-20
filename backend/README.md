# Finora - Stock Trading & Investment Platform - Backend

Backend service for the Finora-inspired trading platform.

This backend provides authentication, user management, database connectivity, API handling, password security, JWT-based authentication, and real-time communication required by the frontend and dashboard applications.

---

## Project Overview

The complete Finora Clone project is divided into three major applications:

```text
Finora Clone
│
├── frontend
│   └── Landing Page & Authentication UI
│
├── backend
│   └── API, Authentication & Database
│
└── dashboard
    └── Trading Dashboard
```

The backend works as the central server between the frontend, dashboard, and database.

---

# Features

- User Registration
- User Login
- User Authentication
- Password Hashing
- JWT Authentication
- MongoDB Database Integration
- Mongoose Models
- Request Validation
- CORS Configuration
- Cookie Handling
- Express REST APIs
- Socket.IO Support
- Environment Variable Configuration
- Secure Authentication Flow

---

# Technology Stack

## Backend

- Node.js
- Express.js
- JavaScript

## Database

- MongoDB
- Mongoose

## Authentication

- JSON Web Token
- bcryptjs
- Passport
- Passport Local
- Passport Local Mongoose

## Validation

- Zod

## Networking

- Axios
- CORS
- Cookie Parser
- Body Parser

## Real-Time Communication

- Socket.IO

## Environment Configuration

- dotenv

## Development

- Nodemon

---

# Project Structure

```text
backend/
│
├── model/
│
├── schemas/
│
├── .env
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

# Important Files and Folders

## index.js

Main entry point of the backend application.

```text
index.js
```

It is responsible for starting the Express server and configuring the backend application.

---

## model/

Contains database-related models used by the application.

```text
model/
```

Models define how application data is stored and handled using Mongoose.

---

## schemas/

Contains database schemas and validation-related structures.

```text
schemas/
```

Schemas define the structure and rules for application data.

---

## .env

Stores environment-specific configuration.

Example:

```env
PORT=3002
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Do not upload `.env` to GitHub.

Add it to `.gitignore`:

```text
.env
```

---

# Dependencies

The backend uses the following major packages:

```text
express
mongoose
bcryptjs
jsonwebtoken
passport
passport-local
passport-local-mongoose
cors
cookie-parser
body-parser
dotenv
socket.io
zod
axios
```

---

# Authentication Flow

The authentication flow works between the frontend and backend.

```text
User
 │
 ▼
Frontend Login
 │
 ▼
POST /login
 │
 ▼
Backend
 │
 ▼
Validate User
 │
 ▼
Check Password
 │
 ▼
Generate Authentication Data
 │
 ▼
Return User Information
 │
 ▼
Frontend
 │
 ▼
Dashboard
```

---

# Registration Flow

```text
User
 │
 ▼
Signup Page
 │
 ▼
Registration Request
 │
 ▼
Backend
 │
 ▼
Validate Input
 │
 ▼
Hash Password
 │
 ▼
Save User
 │
 ▼
MongoDB
```

---

# Login Flow

```text
User
 │
 ▼
Login Page
 │
 ▼
Email + Password
 │
 ▼
Backend /login
 │
 ▼
User Verification
 │
 ▼
Password Verification
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

---

# Password Security

Passwords should never be stored as plain text.

The backend uses:

```text
bcryptjs
```

for password hashing and password verification.

---

# JWT Authentication

The project includes:

```text
jsonwebtoken
```

for token-based authentication.

JWT can be used to securely identify authenticated users when accessing protected backend resources.

---

# MongoDB

The backend uses MongoDB as the primary database.

Mongoose is used for:

- Database connection
- Schema definition
- Data validation
- Database queries
- Model management

---

# CORS

The backend uses:

```text
cors
```

to allow communication between different frontend applications and the backend server.

For local development, the applications can run on different ports.

Example:

```text
Frontend   → localhost:3000
Backend    → localhost:3002
Dashboard  → localhost:5173
```

---

# Socket.IO

The backend includes:

```text
socket.io
```

for real-time communication.

This can be used for future features such as:

- Live market updates
- Real-time order updates
- Notifications
- Portfolio updates
- Trading events

---

# Validation

The project includes:

```text
zod
```

for request and data validation.

Validation helps ensure that incoming data follows the expected format.

---

# Environment Variables

Create a `.env` file in the backend root directory.

Example:

```env
PORT=3002

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

Use your actual values in the local `.env` file.

Never expose secret keys publicly.

---

# Installation

Clone the project and move into the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

# Run Backend

Start the backend using:

```bash
npm start
```

The project uses Nodemon, so the server automatically restarts when backend files change.

---

# Backend Server

During local development, the backend runs on:

```text
http://localhost:3002
```

The exact port depends on the configuration in the `.env` file and backend implementation.

---

# Frontend and Backend Connection

The frontend communicates with the backend through HTTP requests.

Example:

```text
Frontend
   │
   │ HTTP Request
   ▼
Backend
   │
   │ Database Query
   ▼
MongoDB
   │
   ▼
Backend
   │
   │ HTTP Response
   ▼
Frontend
```

---

# Backend, Frontend and Dashboard Connection

The complete application works approximately like this:

```text
                    Finora Clone
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
      Frontend        Backend       Dashboard
          │              │              │
          │              ▼              │
          │           MongoDB           │
          │                             │
          └──────── Authentication ─────┘
```

Authentication flow:

```text
Frontend Login
      │
      ▼
Backend
      │
      ▼
MongoDB
      │
      ▼
Authentication Response
      │
      ▼
Dashboard
```

---

# Local Development Ports

Example local setup:

```text
Frontend
http://localhost:3000

Backend
http://localhost:3002

Dashboard
http://localhost:5173
```

Make sure all required applications are running when testing the complete project.

---

# Available Script

The backend currently provides:

```bash
npm start
```

This runs:

```text
nodemon index.js
```

---

# Development Workflow

Start the backend:

```bash
cd backend
npm install
npm start
```

Start the frontend in another terminal:

```bash
cd frontend
npm start
```

Start the dashboard in another terminal:

```bash
cd dashboard
npm install
npm run dev
```

---

# Recommended Terminal Setup

For complete local development, use three terminals.

### Terminal 1 - Backend

```bash
cd backend
npm start
```

### Terminal 2 - Frontend

```bash
cd frontend
npm start
```

### Terminal 3 - Dashboard

```bash
cd dashboard
npm run dev
```

---

# Production Deployment

Before deployment:

1. Install dependencies.
2. Configure production environment variables.
3. Configure MongoDB.
4. Update frontend API URLs.
5. Update dashboard API URLs.
6. Configure CORS for production domains.
7. Start the backend server.
8. Deploy frontend and dashboard separately if required.

---

# Security Recommendations

Before production deployment:

- Never commit `.env`.
- Use strong JWT secrets.
- Use HTTPS.
- Restrict CORS to trusted domains.
- Validate all incoming requests.
- Hash user passwords.
- Protect private API routes.
- Do not expose database credentials.
- Use secure cookies where applicable.
- Keep dependencies updated.

---

# Future Improvements

Possible future improvements include:

- Complete JWT middleware
- Protected API routes
- Refresh token system
- Role-based authorization
- Complete order management APIs
- Holdings APIs
- Positions APIs
- Funds APIs
- Real-time market data
- Real-time portfolio updates
- Transaction history
- Improved error handling
- API documentation
- Production logging
- Rate limiting
- Automated testing

---

# Complete Project Flow

```text
                    USER
                      │
                      ▼
                 FRONTEND
                      │
               Login / Signup
                      │
                      ▼
                  BACKEND
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
       MongoDB                Authentication
          │                       │
          └───────────┬───────────┘
                      │
                      ▼
                  DASHBOARD
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
    Watchlist       Orders       Holdings
        │             │             │
        └─────────────┼─────────────┘
                      │
                Positions / Funds
```

---

# Disclaimer

This project is a Finora-inspired educational and portfolio project.

It is not the official Finora application and is not intended for real-money trading.

---

# Author

**Rahul Kumar Maurya**

---

# License

This project is created for educational and portfolio purposes.

