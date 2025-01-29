# Campaign Tracker Backend

> **Project Context**: This is a demonstration backend service developed as part of a technical interview assessment, completed within a 24-hour timeframe. It provides essential API endpoints for the campaign tracking application while focusing on core functionalities specified in the interview requirements.

## Live API

**API Base URL**: [https://testaiapp-backend.onrender.com](https://testaiapp-backend.onrender.com)

> **⚠️ Important Deployment Note**: This backend is deployed on Render's free tier which automatically spins down after 15 minutes of inactivity. When you first access the API, **please allow about 2 minutes** for the server to spin up. You might experience a delay on the first request, but subsequent requests will be processed immediately.
>
> To verify the API is awake, you can try accessing:
> - [https://testaiapp-backend.onrender.com/campaigns](https://testaiapp-backend.onrender.com/campaigns)

## API Endpoints

- **GET** `/campaigns` - Fetch all active campaigns
- **GET** `/campaigns/:id` - Get specific campaign details
- **POST** `/campaigns/:id/submissions` - Submit content for a campaign
  ```json
  {
    "contentUrl": "https://tiktok.com/@user/video/123456"
  }
  ```

## Tech Stack

- NestJS
- TypeScript
- MySQL (hosted on Aiven)
- TypeORM
- Class Validator
- Class Transformer

## Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- Git
- MySQL database access

## Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd campaign-tracker/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory:
   ```env
   DB_HOST=your_db_host
   DB_PORT=your_db_port
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database
   PORT=9000
   ```

4. Start the development server:
   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

The server will be available at `http://localhost:9000`

## Project Structure

```
backend/
├── src/
│   ├── campaigns/           # Campaign module
│   │   ├── dto/            # Data Transfer Objects
│   │   ├── entities/       # TypeORM entities
│   │   └── services/       # Business logic
│   ├── config/             # Configuration files
│   ├── database/           # Database related files
│   └── main.ts             # Application entry point
├── test/                   # Test files
└── typeorm.config.ts       # TypeORM configuration
```

## Available Scripts

- `npm run start:dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run start:prod` - Start production server
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Deployment

The backend is deployed on Render's free tier. Key deployment points:

- **Platform**: Render
- **Type**: Web Service
- **Branch**: main
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start:prod`

> **Note**: Remember to set up all environment variables in your deployment platform's dashboard.


```