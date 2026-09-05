# Express Server

A student project using Node.js, Express 5, and npm to demonstrate routes, controllers, request middleware, and sessions. All route responses and handled errors use `text/plain`.

Repository: [Bleachigo/express-api-60](https://github.com/Bleachigo/express-api-60)

## Installation and startup

Use Node.js 18 or newer and npm.

```bash
git clone https://github.com/Bleachigo/express-api-60.git
cd express-api-60
npm ci
npm start
```

The server listens at `http://localhost:3000`. The port is fixed in `server.js`.

Optionally set a session secret when starting the server:

```bash
SESSION_SECRET='your-local-session-secret' npm start
```

If omitted, the application uses its built-in student-project secret.

## Project structure

```text
express-api-60/
├── app.js                  # Express setup and middleware registration
├── server.js               # Starts the server on port 3000
├── package.json
├── package-lock.json
└── src/
    ├── controllers/        # Text responses and session visit counter
    ├── routes/             # Root, user, and article endpoints
    ├── middleware/         # Logging, access, validation, formatting, errors
    └── utils/
        └── AppError.js      # Error with an HTTP status code
```

The application preserves MVC-style separation between routing and controller logic. It has no database models or view templates: controllers return demonstration text, and user/article operations do not store or modify records.

## Middleware

Middleware runs in this order:

1. **Logging:** records the timestamp, method, URL, response status, and duration when a response finishes. It runs before body parsing, so malformed JSON requests are logged too.
2. **Response format:** sets `text/plain` for responses.
3. **Body parsing:** accepts JSON and URL-encoded form data.
4. **Sessions:** uses `express-session` with an in-memory store and a one-hour cookie configured with `HttpOnly` and `SameSite=Lax`. Sessions reset when the server restarts. The root route increments a visit counter; reuse the session cookie to retain it.
5. **Route middleware:** checks user authorization headers, validates user POST/PUT bodies, and checks article access headers.
6. **Not found and error handling:** returns textual error messages with the appropriate HTTP status. Unexpected server errors are logged and return `Internal server error`.

Authentication and article permissions are intentionally simulated for testing. Any non-empty `Authorization` header grants access to user routes. The `x-role: admin` header grants access to article routes. These checks do not verify credentials or implement a login system, and sessions do not determine access.

## Routes

Every successful route below returns HTTP 200. IDs are echoed as supplied; no numeric-ID restriction or record lookup is implemented.

### Root

| Method | Path | Response |
| --- | --- | --- |
| GET | `/` | `Get root route. Session visits: {count}` |

No access header is required. A new session starts with a visit count of 1.

### Users

All user routes require a non-empty `Authorization` header, such as `Authorization: test-user`.

POST and PUT additionally require `username` and `password` in a JSON or URL-encoded body. Both must be strings containing at least one non-whitespace character. GET and DELETE do not require a body.

| Method | Path | Response |
| --- | --- | --- |
| GET | `/users` | `Get users route` |
| POST | `/users` | `Post users route` |
| GET | `/users/:userId` | `Get user by Id route: {userId}` |
| PUT | `/users/:userId` | `Put user by Id route: {userId}` |
| DELETE | `/users/:userId` | `Delete user by Id route: {userId}` |

### Articles

All article routes require `x-role: admin`. Article bodies are not required or validated.

| Method | Path | Response |
| --- | --- | --- |
| GET | `/articles` | `Get articles route` |
| POST | `/articles` | `Post articles route` |
| GET | `/articles/:articleId` | `Get article by Id route: {articleId}` |
| PUT | `/articles/:articleId` | `Put article by Id route: {articleId}` |
| DELETE | `/articles/:articleId` | `Delete article by Id route: {articleId}` |

### Errors

| Status | Condition | Response |
| --- | --- | --- |
| 400 | Missing or invalid user POST/PUT fields | `Username and password must be non-empty strings` |
| 400 | Malformed JSON | Body parser's error message |
| 401 | Missing user authorization header | `Authorization header is required` |
| 401 | Missing article role header | `Role header is required` |
| 403 | Article role other than `admin` | `Access denied` |
| 404 | Unmatched route after preceding middleware passes | `Route {method} {url} not found` |
| 500 | Unexpected server error | `Internal server error` |

## Testing with curl

```bash
# Root: create a session, then reuse it (counts 1 and 2).
curl -c cookies.txt http://localhost:3000/
curl -b cookies.txt -c cookies.txt http://localhost:3000/

# User list and individual user.
curl -H 'Authorization: test-user' http://localhost:3000/users
curl -H 'Authorization: test-user' http://localhost:3000/users/42

# Valid user creation and update.
curl -X POST http://localhost:3000/users \
  -H 'Authorization: test-user' \
  -H 'Content-Type: application/json' \
  -d '{"username":"student","password":"test-password"}'

curl -X PUT http://localhost:3000/users/42 \
  -H 'Authorization: test-user' \
  -d 'username=student&password=test-password'

curl -X DELETE -H 'Authorization: test-user' http://localhost:3000/users/42

# Article access: grant yourself the test admin role.
curl -H 'x-role: admin' http://localhost:3000/articles
curl -X POST -H 'x-role: admin' http://localhost:3000/articles
curl -H 'x-role: admin' http://localhost:3000/articles/7
curl -X PUT -H 'x-role: admin' http://localhost:3000/articles/7
curl -X DELETE -H 'x-role: admin' http://localhost:3000/articles/7

# Failure cases: missing authentication (401), denied role (403),
# missing user fields (400), unknown route (404).
curl -i http://localhost:3000/users
curl -i -H 'x-role: reader' http://localhost:3000/articles
curl -i -X POST -H 'Authorization: test-user' http://localhost:3000/users
curl -i http://localhost:3000/missing
```

The session examples create a local `cookies.txt` file, which can be deleted after testing. There is currently no `npm test` script; use the examples above for manual verification.
