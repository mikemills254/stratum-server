# Stratum Server

Stratum Server is the backend service for the Stratum platform. It provides the RESTful API, database management, real-time collaboration via WebSockets (Yjs/Hocuspocus), and email services for the application. The system supports multiple roles including Directors, Teachers, and Students, handling core features like worksheets, grading, annotations, and audit logs.

## 🚀 Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **ORM / Database**: [Prisma](https://www.prisma.io/) with PostgreSQL
- **Real-time Collaboration**: [Yjs](https://yjs.dev/) & [Hocuspocus](https://hocuspocus.dev/)
- **Storage / Files**: [Supabase](https://supabase.com/)
- **Emails**: [Nodemailer](https://nodemailer.com/) & [React Email](https://react.email/)

---

## � Project Structure

```text
src/
├── controllers/      # Route handlers and business logic wrappers
├── middlewares/      # Express middlewares (auth, error handling, etc.)
├── repositories/     # Data access layer (Prisma abstractions)
├── routes/           # Express route definitions
├── services/         # Core business logic (Auth, Emails, Worksheets)
├── types/            # TypeScript interfaces & types
├── utilities/        # Helper functions and constants
├── hocuspocus.ts     # Configuration for the Hocuspocus WebSocket server
└── index.ts          # Application entry point
```

---

## �🛠️ Environment Setup

Before starting the server, you need to configure your environment variables. 

Create a `.env` file in the root of the project with the following configuration:

```env
# Server Configuration
PORT=3000
NODE_ENV=development
CLIENT_BASE_URL=http://localhost:5173

# Database (PostgreSQL)
# Ensure you replace the credentials with your PostgreSQL setup
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/stratum

# Email Configuration (Nodemailer via SMTP)
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_app_password
MAIL_DEFAULT_SENDER=your_email@gmail.com

# Supabase Configuration
# Used for storage buckets (e.g., organizations and user files)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_JWT_SECRET=your_jwt_secret
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASEBUCKET=voltenv-organizations
```

### Pre-requisites
- **Node.js**: v18+ recommended
- **PostgreSQL**: Have a PostgreSQL database running locally or remotely. Ensure credentials match `DATABASE_URL`.
- **Supabase**: Access to a Supabase project for storage buckets.

---

## 🏗️ Getting Started

Follow the steps below to setup and start the development server.

### 1. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 2. Database Migration

Initialize your database schema using Prisma. This command applies pending migrations and generates the Prisma client.

```bash
# Push schema to dev database and generate the client
npm run migrate:dev
```

*(Optional) Explore Database UI with Prisma Studio:*
```bash
npm run db:studio
```

### 3. Start the Development Server

Start the Node.js server with nodemon (auto-restarts on code changes):

```bash
npm run dev
```

You should see logs indicating the Express REST API and Hocuspocus WebSocket server have started, and Prisma has established a connection with the database. You are now ready to make requests!

---

## 🗃️ Available Scripts

- `npm run dev` - Starts the development server using nodemon.
- `npm run build` - Compiles TypeScript files into JavaScript inside the `dist` folder.
- `npm run start` - Runs the compiled production server.
- `npm run prod` - Runs the production server with the explicit `NODE_ENV=production` set.
- `npm run test` - Runs the server in test mode using `tsx`.
- `npm run migrate:dev` - Applies Prisma database migrations against a development database.
- `npm run migrate:deploy` - Applies Prisma database migrations against a production database.
- `npm run db:studio` - Starts the Prisma Studio UI locally (`localhost:5555` by default) to view and edit database entries.

---

## 🏢 Platform Features

The Stratum Server handles core capabilities such as:
- **Authentication & RBAC**: Provides Multi-factor Authentication (MFA), JWT-based auth, and manages access for `DIRECTOR`, `TEACHER`, and `STUDENT` roles.
- **Worksheets & Collaboration**: Real-time collaborative editing using Yjs and Hocuspocus WebSockets via the Database Extension.
- **Audit Logs**: Activity tracking and observability configuration across different platform views, ensuring actions are securely stored.
- **Annotations & Grading**: Complete API handling for student worksheet submissions, teacher annotations, and the grading flow lifecycle.
- **Organization Management**: Isolation of resources by schools or organizations.

---

## 🔌 WebSockets (Hocuspocus)

The server boots a `Hocuspocus` instance alongside standard Express HTTP endpoints. This handles the collaborative `.yjs` document state syncing for worksheets. WebSockets are established typically on `ws://localhost:3000/collaboration`.
The state is persisted to the PostgreSQL database via `@hocuspocus/extension-database` connecting through Prisma.
