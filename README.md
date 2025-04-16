# Bus Reservation System

A Node.js-based Bus Reservation System that provides users with a platform to view, book, and manage bus reservations. The system allows users to interact with bus schedules, routes, reservations, and seat management functionalities.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Dependencies](#dependencies)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Database Structure](#database-structure)
7. [License](#license)

---

## Features

- **User Management**: Register, login, and manage user accounts.
- **Bus Schedules**: View and manage bus schedules.
- **Route Management**: Define and manage bus routes.
- **Reservation System**: Book and manage bus seat reservations.
- **Seat Availability**: Track seat availability for specific bus schedules.
- **Soft Delete Support**: Deleted records are retained for audit purposes (soft delete).

---

## Installation

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>= 14.x)
- [MySQL](https://www.mysql.com/) (for the database)

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/bus-reservation-system.git
   cd bus-reservation-system
   ```

2. **Install dependencies**:

   Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root of the project and configure your environment variables (for database and other configurations):

   ```plaintext
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password
   DB_NAME=bus_reservation_system
   DB_PORT=3306
   PORT=5000
   ```

4. **Start the application**:

   - For development (with hot-reloading):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

---

## Dependencies

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **mysql2**: MySQL client for Node.js.
- **sequelize**: Promise-based Node.js ORM for MySQL (used for database modeling).

---

## Usage

After starting the application, the server will be available on the configured `PORT` (default is 5000). You can interact with the system through the exposed API endpoints.

---

## API Endpoints

### User Endpoints

- **POST /users/register**: Register a new user.
- **POST /users/login**: Log in an existing user.
- **GET /users/:id**: Get user details by ID.

### Bus Endpoints

- **GET /buses**: Get a list of all buses.
- **GET /buses/:id**: Get bus details by ID.

### Route Endpoints

- **GET /routes**: Get a list of all bus routes.
- **GET /routes/:id**: Get route details by ID.

### Reservation Endpoints

- **POST /reservations**: Create a new reservation.
- **GET /reservations/:id**: Get reservation details by ID.

---

## Database Structure

The database consists of the following tables:

- **Users**: Stores user information (id, name, email, mobile_number, password).
- **Buses**: Stores bus information (id, name, plate_number, total_seats).
- **Routes**: Stores route information (id, name, total_duration).
- **Reservations**: Stores reservation details (id, user_id, bus_schedule_id, seat_number, status).
- **BusSchedules**: Stores bus schedule information (id, bus_id, route_id, start_time, end_time).
- **Seats**: Stores seat information (id, bus_id, seat_number, seat_type).
- **Places**: Stores place information (id, name).

---

## License

This project is licensed under the **General Purpose License**.
