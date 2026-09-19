# Zerodha Clone - Dashboard

A React-based trading dashboard for the Zerodha-inspired trading platform.

The dashboard provides a trading-style interface where authenticated users can view their market watchlist, orders, holdings, positions, funds, applications, charts, and user information.

---

## Project Overview

The dashboard is a separate React application from the main frontend.

The main frontend handles:

- Landing Page
- About
- Products
- Pricing
- Support
- Login
- Signup
- Open Account

The dashboard handles the authenticated trading interface.

---

## Features

- Trading Dashboard
- Market Watchlist
- Orders
- Holdings
- Positions
- Funds
- Apps
- Buy Action Window
- User Profile
- Logout
- Dynamic Logged-in User Information
- Charts
- Navigation between Dashboard Sections
- Responsive Dashboard UI

---

## Technology Stack

### Frontend

- React 19
- JavaScript / JSX
- Vite
- React Router DOM
- CSS

### UI

- Material UI
- Material UI Icons
- Emotion

### Charts

- Chart.js
- React Chart.js 2
- Recharts

### State Management

- Zustand

### API

- Axios

### Notifications

- React Hot Toast

### Icons

- React Icons
- Material UI Icons

### Other

- Socket.IO Client

---

## Project Structure

```text
dashboard/
│
├── public/
│
├── src/
│   │
│   ├── index.css
│   ├── index.jsx
│   │
│   ├── data/
│   │   └── data.js
│   │
│   └── components/
│       │
│       ├── Apps.jsx
│       ├── BuyActionWindow.jsx
│       ├── BuyActionWindow.css
│       ├── Dashboard.jsx
│       ├── DoughnoutChart.jsx
│       ├── Funds.jsx
│       ├── GeneralContext.jsx
│       ├── Holdings.jsx
│       ├── Home.jsx
│       ├── Menu.jsx
│       ├── Orders.jsx
│       ├── Positions.jsx
│       ├── Summary.jsx
│       ├── TopBar.jsx
│       ├── VerticalGraph.jsx
│       └── WatchList.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# Main Components

## Dashboard

Main dashboard layout and routing component.

File:

```text
src/components/Dashboard.jsx
```

It connects the dashboard navigation with different sections such as:

```text
Dashboard
Orders
Holdings
Positions
Funds
Apps
```

---

## Home

Main dashboard home component.

File:

```text
src/components/Home.jsx
```

It combines the dashboard top navigation and dashboard content.

---

## TopBar

Displays the top section of the dashboard.

File:

```text
src/components/TopBar.jsx
```

It contains market index information and the dashboard menu.

---

## Menu

Provides navigation between dashboard sections.

File:

```text
src/components/Menu.jsx
```

Available sections include:

```text
Dashboard
Orders
Holdings
Positions
Funds
Apps
```

The profile section also displays the logged-in user's information.

---

## Summary

Displays the main account summary.

File:

```text
src/components/Summary.jsx
```

The summary contains information such as:

- Equity
- Margin Available
- Margins Used
- Opening Balance
- Holdings
- P&L
- Current Value
- Investment

---

## WatchList

Displays the market watchlist.

File:

```text
src/components/WatchList.jsx
```

It provides the trading-style market watch interface.

---

## Orders

Displays order-related information.

File:

```text
src/components/Orders.jsx
```

---

## Holdings

Displays the user's holdings.

File:

```text
src/components/Holdings.jsx
```

---

## Positions

Displays open trading positions.

File:

```text
src/components/Positions.jsx
```

---

## Funds

Displays available trading funds and account balance information.

File:

```text
src/components/Funds.jsx
```

It includes:

- Available Margin
- Used Margin
- Available Cash
- Opening Balance
- Payin
- SPAN
- Delivery Margin
- Exposure
- Options Premium
- Collateral

It also contains:

```text
Add Funds
Withdraw
Open Account
```

---

## Apps

Displays available applications/services.

File:

```text
src/components/Apps.jsx
```

---

# Trading Components

## Buy Action Window

File:

```text
src/components/BuyActionWindow.jsx
```

Provides the interface for performing a buy-related action from the dashboard.

Styles are maintained in:

```text
src/components/BuyActionWindow.css
```

---

# Charts

The dashboard contains chart components for displaying financial data.

### Doughnut Chart

```text
src/components/DoughnoutChart.jsx
```

### Vertical Graph

```text
src/components/VerticalGraph.jsx
```

Chart libraries used:

```text
Chart.js
react-chartjs-2
Recharts
```

---

# General Context

File:

```text
src/components/GeneralContext.jsx
```

Provides shared dashboard functionality and context between components.

---

# Data

Static or initial dashboard data is maintained in:

```text
src/data/data.js
```

---

# Routing

The dashboard uses:

```text
react-router-dom
```

Main routes include:

```text
/
 /orders
 /holdings
 /positions
 /funds
 /apps
```

---

# User Authentication Connection

The dashboard receives the logged-in user's information from the authentication flow.

The login flow is:

```text
Frontend
   │
   ▼
Login
   │
   ▼
Backend
   │
   ▼
Authentication
   │
   ▼
User Information
   │
   ▼
Dashboard
```

The logged-in user's information is used inside the dashboard to display the user's name and profile information.

---

# Frontend and Dashboard Architecture

The complete application is divided into three major parts:

```text
                    Zerodha Clone
                         │
          ┌──────────────┼──────────────┐
          │              │              │
       Frontend       Backend       Dashboard
          │              │              │
          │              │              │
      Landing Pages   API/Auth     Trading UI
          │              │              │
          └──────────────┼──────────────┘
                         │
                      Database
```

---

# Local Development

## Prerequisites

Make sure the following are installed:

- Node.js
- npm

Check Node.js:

```bash
node -v
```

Check npm:

```bash
npm -v
```

---

# Installation

Move into the dashboard directory:

```bash
cd dashboard
```

Install dependencies:

```bash
npm install
```

---

# Start Development Server

Run:

```bash
npm run dev
```

Vite will start the development server.

The dashboard normally runs at:

```text
http://localhost:5173
```

---

# Production Build

Create a production build:

```bash
npm run build
```

The production files are generated inside:

```text
dist/
```

---

# Preview Production Build

After creating the production build:

```bash
npm run preview
```

---

# Lint

Run ESLint:

```bash
npm run lint
```

---

# Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Build

```bash
npm run build
```

Creates an optimized production build.

### Lint

```bash
npm run lint
```

Checks the source code using ESLint.

### Preview

```bash
npm run preview
```

Runs the production build locally.

---

# Dashboard Flow

```text
Login
  │
  ▼
Dashboard
  │
  ├── Summary
  │
  ├── Watchlist
  │
  ├── Orders
  │
  ├── Holdings
  │
  ├── Positions
  │
  ├── Funds
  │
  └── Apps
```

---

# Dashboard UI

The dashboard provides a trading-platform style interface with:

- Top navigation
- Market indices
- Watchlist
- Account summary
- Trading sections
- User profile
- Trading actions
- Charts
- Funds management

---

# State Management

The project includes Zustand for state management.

```text
zustand
```

Shared dashboard state can be managed through Zustand where required.

---

# API and Networking

The dashboard includes Axios for API communication:

```text
axios
```

Socket.IO Client is also included for future or real-time communication:

```text
socket.io-client
```

---

# Notifications

User notifications can be handled using:

```text
react-hot-toast
```

---

# UI Libraries

The dashboard uses Material UI components and icons:

```text
@mui/material
@mui/icons-material
```

Emotion is used as part of the Material UI styling system:

```text
@emotion/react
@emotion/styled
```

---

# Application Flow

```text
                    Login
                      │
                      ▼
                 Authentication
                      │
                      ▼
                  Dashboard
                      │
        ┌─────────────┼─────────────┐
        │             │             │
    Watchlist      Summary       Profile
        │             │             │
        ├─────────────┼─────────────┤
        │             │             │
      Orders       Holdings      Positions
                      │
                      ▼
                    Funds
                      │
                      ▼
                    Apps
```

---

# Future Improvements

Possible future improvements include:

- Real-time market data
- Backend API integration
- Real-time order updates
- Live portfolio calculations
- Advanced charts
- Protected dashboard routes
- JWT authentication
- Better state persistence
- Real-time notifications
- Improved trading workflows
- Production deployment
- Database-driven portfolio data

---

# Disclaimer

This project is a Zerodha-inspired educational project created for learning and portfolio purposes.

It is not the official Zerodha application and is not intended for real-money trading.

---

# Author

**Rahul Kumar Maurya**

---

# License

This project is intended for educational and portfolio purposes.