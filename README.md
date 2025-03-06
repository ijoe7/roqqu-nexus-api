# roqqu-nexus-api

# Roqqu Nexus API

A RESTful API for managing users, addresses, and posts, built with Node.js, TypeScript, SQLite, Express, Knex.js, and Joi for validation.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Database Migrations](#database-migrations)
- [Running the API](#running-the-api)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [GitHub Repository](#github-repository)
- [Live URL](#live-url)

## Features

- **User Endpoints**
  - `GET /users`: Returns a paginated list of users.
  - `GET /users/count`: Returns the total number of users.
  - `GET /users/{id}`: Returns details of a specific user including their address.
  - `POST /users`: Creates a new user.
- **Address Endpoints**
  - `GET /addresses/{userId}`: Returns the address associated with a user.
  - `POST /addresses`: Creates an address for a user (one address per user).
  - `PATCH /addresses/{userId}`: Updates the address for a user.
- **Post Endpoints**
  - `GET /posts?userId={userId}`: Returns all posts for a specific user.
  - `POST /posts`: Creates a new post (requires title, body, and userId).
  - `DELETE /posts/{id}`: Deletes a post by its ID.

## Tech Stack

- **Runtime:** Node.js (with TypeScript)
- **Web Framework:** Express
- **Database:** SQLite (using Knex.js for query building and migrations)
- **Validation:** Joi
- **Testing:** Jest & Supertest

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/ijoe7/roqqu-nexus-api.git
   cd roqqu-nexus-api

2. **Install Dependencies**

   ```bash
   npm install

3. **Set Environment Variables**

   Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   PORT=3000
   NODE_ENV=development
   ```

## Database Migrations

1. **Run Migrations**

   ```bash
    npm run migrate
    ```
    

## Running the API

1. **Development Mode**

   ```bash
   npm run dev
   ```

2. **Production Mode**

**Build**

   ```bash
   npm run build
  ```

**Start the Server**
  ```bash
    npm start
   ```

## Testing

1. **Run Tests**

   ```bash
   npm run test
   ```

## API Documentation

The API documentation is available at [Roqqu Nexus API (Postman)](https://documenter.getpostman.com/view/15642679/2sAYdmjnHv) when the server is running.

## GitHub Repository

The source code is available on GitHub at [ijoe7/roqqu-nexus-api](https://github.com/ijoe7/roqqu-nexus-api).

## Live URL

The API is hosted on Renderr and can be accessed at [https://roqqu-nexus-api.onrender.com](https://roqqu-nexus-api.onrender.com).


