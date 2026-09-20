# Finora - Stock Trading & Investment Platform - Frontend

A React-based frontend for a Finora-inspired trading platform. This application contains the public landing pages, product information, pricing, support section, authentication pages, and account-opening flow.

---

## Project Overview

The frontend is responsible for the public-facing part of the application.

It includes:

- Home Page
- About Page
- Products Page
- Pricing Page
- Support Page
- Login
- Signup
- Open Account
- Navigation Bar
- Footer
- Authentication
- Dashboard Redirect
- 404 / Not Found Page
- Responsive User Interface

---

## Technology Stack

### Frontend

- React 19
- JavaScript
- CSS
- React Router DOM
- Create React App

### Charts

- Chart.js
- React Chart.js 2

### Testing

- React Testing Library
- Jest DOM
- User Event

### Other

- Web Vitals

---

## Project Structure

```text
frontend/
│
├── public/
│
├── src/
│   │
│   ├── index.css
│   ├── index.js
│   │
│   └── landing_Page/
│       │
│       ├── Navbar.js
│       ├── Footer.js
│       ├── OpenAccount.js
│       ├── NotFound.js
│       │
│       ├── Home/
│       │   ├── Home_Page.js
│       │   ├── Hero.js
│       │   ├── Awards.js
│       │   ├── Education.js
│       │   ├── Pricing.js
│       │   └── Stats.js
│       │
│       ├── About/
│       │   ├── About_Page.js
│       │   ├── Hero.js
│       │   └── Team.js
│       │
│       ├── Login/
│       │   └── Login.js
│       │
│       ├── Sign up/
│       │   └── Signup.js
│       │
│       ├── Pricing/
│       │   ├── Pricing_Page.js
│       │   ├── Hero.js
│       │   └── Brokerage.js
│       │
│       ├── Products/
│       │   ├── ProductsPage.js
│       │   ├── Hero.js
│       │   ├── LeftSection.js
│       │   ├── RightSection.js
│       │   └── Universe.js
│       │
│       └── Supports/
│           ├── SupportPage.js
│           ├── Hero.js
│           └── CreateTicket.js
│
├── package.json
└── README.md
```

---

## Main Pages

### Home

The Home page is the main landing page of the application.

It contains:

- Hero section
- Awards
- Statistics
- Pricing
- Education

Main file:

```text
src/landing_Page/Home/Home_Page.js
```

---

### About

The About section provides information about the platform and team.

Components:

```text
About_Page.js
Hero.js
Team.js
```

---

### Products

The Products section contains information about the available products and services.

Components:

```text
ProductsPage.js
Hero.js
LeftSection.js
RightSection.js
Universe.js
```

---

### Pricing

The Pricing section contains pricing and brokerage information.

Components:

```text
Pricing_Page.js
Hero.js
Brokerage.js
```

---

### Support

The Support section provides support-related functionality.

Components:

```text
SupportPage.js
Hero.js
CreateTicket.js
```

---

### Login

The Login page allows existing users to authenticate.

Main file:

```text
src/landing_Page/Login/Login.js
```

The login form accepts:

```text
Email
Password
```

The frontend sends the login request to the backend.

Local backend API:

```text
http://localhost:3002/login
```

After successful authentication, the user is redirected to the dashboard.

Local dashboard:

```text
http://localhost:5173
```

---

### Signup

The Signup page allows new users to create an account.

Main file:

```text
src/landing_Page/Sign up/Signup.js
```

The signup process communicates with the backend to create the user account.

---

### Open Account

The Open Account page provides the account-opening interface.

Main file:

```text
src/landing_Page/OpenAccount.js
```

---

## Navigation

The main navigation is handled by:

```text
src/landing_Page/Navbar.js
```

The navigation connects the major sections of the application:

```text
Home
About
Products
Pricing
Support
Login
Signup
Open Account
```

---

## Authentication Flow

The authentication flow works between the frontend, backend and dashboard.

```text
User
  │
  ▼
Login Page
  │
  │ Email + Password
  ▼
Backend API
  │
  │ POST /login
  ▼
Authentication
  │
  ▼
Successful Login
  │
  ▼
Dashboard
```

---

## Frontend and Dashboard Connection

The project contains separate applications for the public frontend and trading dashboard.

```text
Frontend
    │
    │ Login / Signup
    ▼
Backend
    │
    │ Authentication
    ▼
Dashboard
```

### Frontend

```text
http://localhost:3000
```

### Backend

```text
http://localhost:3002
```

### Dashboard

```text
http://localhost:5173
```

---

## Installation

Make sure Node.js and npm are installed.

Check Node.js:

```bash
node -v
```

Check npm:

```bash
npm -v
```

Move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

## Start Development Server

Run:

```bash
npm start
```

The frontend will normally run at:

```text
http://localhost:3000
```

---

## Production Build

Create a production build:

```bash
npm run build
```

The production files will be generated inside:

```text
build/
```

---

## Testing

Run:

```bash
npm test
```

---

## Available Scripts

### Start

```bash
npm start
```

Starts the development server.

### Build

```bash
npm run build
```

Creates the production build.

### Test

```bash
npm test
```

Runs the test environment.

### Eject

```bash
npm run eject
```

Ejects the Create React App configuration.

---

## Backend Requirement

Login and Signup functionality requires the backend application to be running.

Start the backend separately and make sure it is available at:

```text
http://localhost:3002
```

---

## Application Flow

```text
                    Home Page
                        │
        ┌───────────────┼───────────────┐
        │               │               │
      About          Products         Pricing
        │               │               │
        └───────────────┼───────────────┘
                        │
                     Support
                        │
                  Open Account
                        │
                      Login
                        │
                        ▼
                    Backend
                        │
                        ▼
                 Authentication
                        │
                        ▼
                    Dashboard
```

---

## Folder Responsibilities

### `landing_Page`

Contains all public-facing pages and components.

### `Home`

Contains the main landing page sections.

### `About`

Contains company/platform information and team sections.

### `Products`

Contains product-related sections.

### `Pricing`

Contains pricing and brokerage information.

### `Login`

Contains user login functionality.

### `Sign up`

Contains user registration functionality.

### `Supports`

Contains support and ticket-related components.

---

## Charts

The project includes chart support using:

```text
Chart.js
react-chartjs-2
```

These libraries can be used for displaying financial and data-related visualizations.

---

## Error Handling

The project includes a Not Found page:

```text
src/landing_Page/NotFound.js
```

This page is used for routes that do not exist.

---

## Styling

Global styling is handled through:

```text
src/index.css
```

The CSS file provides styling for the frontend pages and components.

---

## Development Flow

```text
npm install
     │
     ▼
npm start
     │
     ▼
Frontend
     │
     ├── Home
     ├── About
     ├── Products
     ├── Pricing
     ├── Support
     ├── Login
     └── Signup
             │
             ▼
          Backend
             │
             ▼
          Dashboard
```

---

## Future Improvements

Possible improvements include:

- Protected routes
- Improved authentication handling
- Token-based authentication
- Better form validation
- Environment variables for API URLs
- Improved loading states
- Improved error handling
- Production deployment
- Live financial data integration
- More advanced dashboard functionality

---

## Disclaimer

This project is a Finora-inspired educational project created for learning and portfolio purposes.

It is not the official Finora application and is not intended for real-money trading.

---

## Author

**Rahul Kumar Maurya**

---

## License

This project is intended for educational and portfolio purposes.

