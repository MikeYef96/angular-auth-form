# Local Backend for angular-auth-form

This backend replaces the remote `ds-test-api` endpoint during local development.

## Install

```bash
cd backend
npm install
```

## Run

```bash
npm start
```

The backend listens on `http://localhost:3333`.

## Available endpoints

- POST `/api/login`
- GET `/api/users`
- GET `/api/userassessments`
- GET `/api/health`

## Sample login accounts

- `admin@example.com` / `admin123`
- `user@example.com` / `user123`
