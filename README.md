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
- **Bus Route Management**: Define and manage bus routes and stops.
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

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root of the project and configure your environment variables:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=password
   DB_NAME=bus_reservation_system
   DB_PORT=3306
   PORT=5000
   ```

4. **Start the application**:

   - For development (with hot reloading):

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
- **dotenv**: Loads environment variables from a `.env` file.
- **nodemon** (dev): Automatically restarts the server on file changes.

---

## Usage

Once started, the server runs on the configured port (default: 5000). You can interact with the API via Postman or integrate it with a frontend.

---

## API Endpoints

### User Endpoints

- `POST /users/register` – Register a new user.
- `POST /users/login` – Log in an existing user.
- `GET /users/:id` – Get user details by ID.

### Bus Endpoints

- `GET /buses` – Get a list of all buses.
- `GET /buses/:id` – Get bus details by ID.

### Bus Route Endpoints

- `GET /bus-routes` – Get a list of all bus routes.
- `GET /bus-routes/:id` – Get details of a specific route.

### Reservation Endpoints

- `POST /reservations` – Create a new reservation.
- `GET /reservations/:id` – Get reservation details by ID.

---

## Database Structure

- **Users**: id, name, email, mobile_number, password, timestamps, soft delete
- **Places**: id, name, timestamps, soft delete
- **Buses**: id, name, plate_number, total_seats, timestamps, soft delete
- **Bus Routes**: id, name, total_duration, timestamps, soft delete
- **Route Stops**: id, route_id, place_id, stop_order, stop_time, timestamps, soft delete
- **Bus Schedules**: id, bus_id, route_id, date, start_time, end_time, timestamps, soft delete
- **Reservations**: id, user_id, bus_schedule_id, from_place_id, to_place_id, seat_number, status, timestamps, soft delete
- **Seats**: id, bus_id, seat_number, seat_type, timestamps, soft delete

---

## License

This project is licensed under the **General Purpose License**.
