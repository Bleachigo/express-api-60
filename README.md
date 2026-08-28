# Express Server

A simple REST API server built with **Node.js** and **Express.js**, organized using the **MVC** (Model-View-Controller) pattern.

## Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/) (v5)
- npm (package manager)

## Project Structure

The project follows a modular MVC architecture where controllers handle the logic for processing client requests and routes define the server endpoints.

```
express-server-60/
├── app.js                          # Application entry point
├── package.json                    # Project metadata and dependencies
└── src/
    ├── controllers/                # Request-handling logic
    │   ├── rootController.js
    │   ├── userController.js
    │   └── articleController.js
    └── routes/                     # Route definitions
        ├── rootRoutes.js
        ├── userRoutes.js
        └── articleRoutes.js
```

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd express-server-60
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Server

Start the server with:

```bash
npm start
```

Once started, the server listens on **port 3000** and outputs:

```
Server running on http://localhost:3000
```

## Routes

All responses are plain text to simplify integration and debugging.

### Root

| Method | Path | Response |
| ------ | ---- | -------- |
| GET | `/` | `Get root route` |

### Users

| Method | Path | Response |
| ------ | ---- | -------- |
| GET | `/users` | `Get users route` |
| POST | `/users` | `Post users route` |
| GET | `/users/:userId` | `Get user by Id route: {userId}` |
| PUT | `/users/:userId` | `Put user by Id route: {userId}` |
| DELETE | `/users/:userId` | `Delete user by Id route: {userId}` |

### Articles

| Method | Path | Response |
| ------ | ---- | -------- |
| GET | `/articles` | `Get articles route` |
| POST | `/articles` | `Post articles route` |
| GET | `/articles/:articleId` | `Get article by Id route: {articleId}` |
| PUT | `/articles/:articleId` | `Put article by Id route: {articleId}` |
| DELETE | `/articles/:articleId` | `Delete article by Id route: {articleId}` |

## Examples

```bash
curl http://localhost:3000/
# Get root route

curl http://localhost:3000/users
# Get users route

curl http://localhost:3000/users/42
# Get user by Id route: 42

curl -X POST http://localhost:3000/articles
# Post articles route

curl -X DELETE http://localhost:3000/articles/7
# Delete article by Id route: 7
```
