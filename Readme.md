# Quiz Backend API

This repository contains the backend code for a **Quiz Management System**. The API is built using **Node.js**, **Express.js**, and **Prisma ORM** for database interactions. It supports user authentication, quiz creation, question management, and scoring functionalities.

---

## Features
### Authentication:
- **User login** and **signup** functionality.
- **Password validation** and **JWT token generation** for authentication.

### Quiz Management:
- **Create** and **retrieve** quizzes.
- Add **questions** with **options** to quizzes.
- Fetch quiz details along with questions and options.

### Question Management:
- **CRUD** operations on questions.
- Manage options for questions.

### Scoring System:
- **Submit** and **retrieve** quiz scores.

### Event Logging:
- **Record user interactions/events** with Prisma.

---

## API Documentation

### Authentication Routes (`routes/voter/auth.js`)
- **POST** `/api/voter/auth/login`: User login.
- **POST** `/api/voter/auth/signup`: User registration.

### Quiz Management Routes (`routes/voter/quizRoutes.js`)
- **POST** `/quiz`: Create a new quiz.
- **GET** `/quiz`: Retrieve all quizzes.

### Question Management Routes (`routes/voter/questionRoutes.js`)
- **POST** `/questions`: Create a question with options.
- **GET** `/questions`: Retrieve all questions with options.
- **GET** `/questions/:id`: Retrieve a question by ID with its options.
- **PUT** `/questions/:id`: Update a question.
- **DELETE** `/questions/:id`: Delete a question.

### Option Management Routes (`routes/voter/optionRoutes.js`)
- **POST** `/options`: Create an option for a question.
- **GET** `/options`: Retrieve all options.

### Score Management Routes (`routes/voter/scoreRoutes.js`)
- **POST** `/scores`: Record a score for a quiz.
- **GET** `/scores`: Retrieve all scores.

### Event Logging Routes (`routes/voter/eventRoutes.js`)
- **POST** `/api/events`: Record an event (e.g., user actions).

---

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **Prisma ORM**: Database ORM for easy data handling.
- **SQLite/PostgreSQL/MySQL**: Compatible databases (depends on configuration).

---

## Installation and Setup

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn
- Database (e.g., SQLite, PostgreSQL)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/quiz-backend.git
   cd quiz-backend
## Installation Steps

### 1. Install Dependencies
```bash
npm install
```
## Setup Database

1. Configure the database in `prisma/schema.prisma`.
2. Migrate the database schema:
```bash
   npx prisma migrate dev --name init
```
3. Run the Application
```bash
   npm start
```
4. Access the application:

```The server will run on http://localhost:3000 (default port).```

Project Structure
```bash
├── controllers/   # Contains API logic for different entities
│   ├── auth.js
│   ├── eventController.js
│   ├── optionController.js
│   ├── questionController.js
│   ├── quizController.js
│   └── scoreController.js
├── routes/           # Defines application routes
│   ├── voter/auth.js
│   ├── voter/eventRoutes.js
│   ├── voter/optionRoutes.js
│   ├── voter/questionRoutes.js
│   ├── voter/quizRoutes.js
│   └── voter/scoreRoutes.js
├── utils/            # Helper functions (e.g., validation)
├── prisma/           # Prisma schema and migrations
├── app.js            # Application entry point
├── package.json      # Node.js package configuration
└── README.md         # Project documentation
```
## Environment Variables

Create a `.env` file in the root directory with the following variables:

```plaintext
DATABASE_URL=your-database-url
JWT_SECRET=your-jwt-secret
PORT=3000
```
### Testing the API
You can use tools like Postman, cURL, or Swagger to test the endpoints.

Sample Requests
Login
```bash POST /api/voter/auth/login
Content-Type: application/json

{
    "email": "example@example.com",
    "password": "password123"
}
Create Quiz
bash
Copy code
POST /quiz
Content-Type: application/json

{
    "title": "General Knowledge",
    "description": "Test your knowledge"
}
```
### Contributing
1. Fork the repository.
2. Create a feature branch (git checkout -b feature-name).
3. Commit your changes (git commit -m "Add feature").
4. Push to the branch (git push origin feature-name).
5. Create a pull request.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

## Future Enhancements
Add user roles (e.g., admin, participant).
Implement quiz result analysis.
Add leaderboards and analytics.
Feel free to contribute! 😊






