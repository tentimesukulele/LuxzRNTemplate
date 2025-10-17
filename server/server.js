/**
 * LuxzRN Backend Server
 *
 * All-in-one Node.js + Express + MySQL server
 * Handles API requests from the React Native app
 */

require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// MIDDLEWARE
// ============================================

app.use(cors()); // Enable CORS for React Native app
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// ============================================
// DATABASE CONNECTION
// ============================================

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'luxzrn_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

// Test database connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Database connected successfully');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    return false;
  }
};

// ============================================
// ROUTES
// ============================================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// ============================================
// USER API ENDPOINTS (Example - Commented Out)
// ============================================

// Get all users
// app.get('/api/users', async (req, res) => {
//   try {
//     const [users] = await pool.query(
//       'SELECT id, name, email, created_at FROM users'
//     );
//     res.json({
//       success: true,
//       data: users,
//     });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Failed to fetch users',
//       error: error.message,
//     });
//   }
// });

// Get user by ID
// app.get('/api/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const [users] = await pool.query(
//       'SELECT id, name, email, created_at FROM users WHERE id = ?',
//       [id]
//     );
//
//     if (users.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found',
//       });
//     }
//
//     res.json({
//       success: true,
//       data: users[0],
//     });
//   } catch (error) {
//     console.error('Error fetching user:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Failed to fetch user',
//       error: error.message,
//     });
//   }
// });

// Create new user
// app.post('/api/users', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//
//     // Validate input
//     if (!name || !email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: 'Name, email, and password are required',
//       });
//     }
//
//     // In production, hash the password using bcrypt
//     // const bcrypt = require('bcrypt');
//     // const hashedPassword = await bcrypt.hash(password, 10);
//
//     const [result] = await pool.query(
//       'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
//       [name, email, password] // Use hashedPassword in production
//     );
//
//     res.status(201).json({
//       success: true,
//       message: 'User created successfully',
//       data: {
//         id: result.insertId,
//         name,
//         email,
//       },
//     });
//   } catch (error) {
//     console.error('Error creating user:', error);
//
//     // Check for duplicate email
//     if (error.code === 'ER_DUP_ENTRY') {
//       return res.status(409).json({
//         success: false,
//         message: 'Email already exists',
//       });
//     }
//
//     res.status(500).json({
//       success: false,
//       message: 'Failed to create user',
//       error: error.message,
//     });
//   }
// });

// Update user
// app.put('/api/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email } = req.body;
//
//     // Check if user exists
//     const [users] = await pool.query('SELECT id FROM users WHERE id = ?', [id]);
//     if (users.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found',
//       });
//     }
//
//     // Build update query dynamically
//     const updates = [];
//     const values = [];
//
//     if (name) {
//       updates.push('name = ?');
//       values.push(name);
//     }
//     if (email) {
//       updates.push('email = ?');
//       values.push(email);
//     }
//
//     if (updates.length === 0) {
//       return res.status(400).json({
//         success: false,
//         message: 'No fields to update',
//       });
//     }
//
//     values.push(id);
//     await pool.query(
//       `UPDATE users SET ${updates.join(', ')} WHERE id = ?`,
//       values
//     );
//
//     res.json({
//       success: true,
//       message: 'User updated successfully',
//     });
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Failed to update user',
//       error: error.message,
//     });
//   }
// });

// Delete user
// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//
//     const [result] = await pool.query('DELETE FROM users WHERE id = ?', [id]);
//
//     if (result.affectedRows === 0) {
//       return res.status(404).json({
//         success: false,
//         message: 'User not found',
//       });
//     }
//
//     res.json({
//       success: true,
//       message: 'User deleted successfully',
//     });
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Failed to delete user',
//       error: error.message,
//     });
//   }
// });

// ============================================
// ERROR HANDLING
// ============================================

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

// ============================================
// START SERVER
// ============================================

const startServer = async () => {
  // Test database connection
  await testConnection();

  // Start Express server
  app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API available at http://localhost:${PORT}/api`);
    console.log(`\n💡 To test the server, visit: http://localhost:${PORT}/api/health\n`);
  });
};

startServer();

// ============================================
// DATABASE SETUP SQL
// ============================================
/*

To set up the database, run this SQL in your MySQL client:

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

-- Sample data (optional)
INSERT INTO users (name, email, password) VALUES
  ('John Doe', 'john@example.com', 'hashedpassword123'),
  ('Jane Smith', 'jane@example.com', 'hashedpassword456');

*/
