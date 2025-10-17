# LuxzRN Backend Server

Node.js + Express + MySQL backend for the LuxzRN React Native app.

## Setup

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Database

Update the `.env` file with your database credentials:

```bash
# Edit .env with your database credentials
# The file is already created with default values
```

**Important:** After you configure your `.env` file, uncomment the `.env` line in `.gitignore` to prevent accidentally committing your sensitive credentials:

```bash
# In server/.gitignore, uncomment this line:
# .env
```

### 3. Create Database Tables

Run the SQL commands in `server.js` (lines at the bottom) to create the database and users table.

```sql
CREATE DATABASE IF NOT EXISTS luxzrn_db;
USE luxzrn_db;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 4. Start the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Health Check
```
GET /api/health
```

### Users (Example - Currently Commented Out)

Uncomment the routes in `server.js` to enable these endpoints:

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 3000 |
| NODE_ENV | Environment | development |
| DB_HOST | MySQL host | localhost |
| DB_USER | MySQL user | root |
| DB_PASSWORD | MySQL password | (empty) |
| DB_NAME | Database name | luxzrn_db |

## Usage with React Native App

1. Make sure the server is running
2. Update the API URL in the React Native app:
   - Edit `services/api.js`
   - Change `BASE_URL` to your server URL
   - For Android emulator: `http://10.0.2.2:3000/api`
   - For iOS simulator: `http://localhost:3000/api`
   - For physical device: `http://YOUR_COMPUTER_IP:3000/api`

3. Uncomment the API functions in `services/api.js`
4. Uncomment the routes in `server.js`

## Testing

Test the server is running:
```bash
curl http://localhost:3000/api/health
```

Test user endpoints (after uncommenting):
```bash
# Get all users
curl http://localhost:3000/api/users

# Create user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

## Security Notes

⚠️ **Important for Production:**

1. **Passwords**: Use bcrypt to hash passwords before storing
2. **JWT**: Implement JWT authentication for protected routes
3. **CORS**: Configure CORS to only allow your app's origin
4. **Environment**: Never commit `.env` file to git
5. **SQL Injection**: Always use parameterized queries (already done)
6. **Rate Limiting**: Add rate limiting to prevent abuse
7. **HTTPS**: Use HTTPS in production

## Folder Structure

```
server/
├── server.js          # Main server file (all-in-one)
├── package.json       # Dependencies
├── .env              # Environment variables (not in git)
├── .env.example      # Example environment variables
├── .gitignore        # Git ignore rules
└── README.md         # This file
```
