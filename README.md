# Base Codebase for TiQr

This is the base codebase for TiQr, the ticketing backend service. It is built using Fastify and TypeScript, and uses Firebase as the backend database.

# Endpoints

- `GET /health`: Health check endpoint to verify that the server is running.

# Technologies Used

- Fastify: A fast and low-overhead web framework for Node.js.
- TypeScript: A strongly typed programming language that builds on JavaScript.

# Setup Instructions

1. Install `Node.js`, `pnpm` and `Nodemon` if you haven't already.
2. Run `pnpm install`
3. Make a copy of `.env.example` and rename it to `.env`. Fill in the required environment variables.
4. Create a Firebase service account and download the JSON key file. Save it as `serviceAccountKey.json` in the root directory.
5. Open two terminal tabs.
6. In first tab, run `pnpm run watch:ts` to watch for TypeScript changes.
7. In second tab, run `pnpm run watch:start` to start the server in development mode.

# Important Information

- Base URL: `http://localhost:3000`

# Authors

- [Krish](https://github.com/ikrishagarwal)
