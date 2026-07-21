# Blog Backend

A RESTful Blog API built with **Node.js**, **Express.js**, and **MySQL**. This project provides secure user authentication using JWT and allows authenticated users to perform CRUD operations on blog posts.

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Create Blog
- Read Blogs
- Update Blog
- Delete Blog
- Password Hashing using bcrypt
- MySQL Database Integration

## Tech Stack

- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)
- bcrypt.js
- dotenv

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /register | Register a new user |
| POST | /login | Login user |

### Blogs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /posts | Get all blogs |
| GET | /posts/:id | Get blog by ID |
| POST | /posts | Create a new blog |
| PUT | /posts/:id | Update blog |
| DELETE | /posts/:id | Delete blog |

## Installation

Clone the repository

```bash
git clone https://github.com/aakashmishra18/Blog-Backend.git
```

Move into the project

```bash
cd Blog-Backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

DB_HOST=localhost
DB_USER=
DB_PASSWORD=your_password
DB_NAME=

JWT_SECRET=
```

Start the server

```bash
npm start
```

or

```bash
npm run dev
```

## Project Structure

```
Blog-Backend
│
├── controllers
├── middleware
├── models
├── routes
├── config
├── .env
├── server.js
└── package.json
```

## Authentication

This API uses **JWT (JSON Web Token)** for authentication.

After login, include the token in the Authorization header:

```
Authorization: Bearer <your_token>
```

## Future Improvements

- Image Upload
- Comments System
- Likes & Dislikes
- Categories & Tags
- Search Blogs
- Pagination
- User Profile
- Admin Panel
- Role-Based Authorization
- Refresh Tokens
- Email Verification
- Password Reset

## Author

**Aakash Mishra**

GitHub: https://github.com/aakashmishra18
