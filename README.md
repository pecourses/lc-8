# lc-8

A small events application with a React client and Express server.

## Run locally

```bash
cd client
npm install
npm run dev
```

In another terminal:

```bash
cd server
npm install
npm run dev
```

The client runs at `http://localhost:5173`, and the API is available at `http://localhost:3000/api/events`.

## Run with Docker Compose

```bash
docker compose up --build
```
