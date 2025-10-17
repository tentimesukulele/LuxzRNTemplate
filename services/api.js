/**
 * API Service
 *
 * Central API client for making HTTP requests to the backend server.
 * Configure the BASE_URL to point to your backend server.
 */

// Configure your backend URL here
const BASE_URL = 'http://localhost:3000/api';

/**
 * Generic API request handler
 * @param {string} endpoint - API endpoint path
 * @param {object} options - Fetch options (method, headers, body, etc.)
 * @returns {Promise} Response data or error
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

/**
 * GET request
 */
const get = (endpoint, options = {}) => {
  return apiRequest(endpoint, {
    method: 'GET',
    ...options,
  });
};

/**
 * POST request
 */
const post = (endpoint, body, options = {}) => {
  return apiRequest(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
    ...options,
  });
};

/**
 * PUT request
 */
const put = (endpoint, body, options = {}) => {
  return apiRequest(endpoint, {
    method: 'PUT',
    body: JSON.stringify(body),
    ...options,
  });
};

/**
 * DELETE request
 */
const del = (endpoint, options = {}) => {
  return apiRequest(endpoint, {
    method: 'DELETE',
    ...options,
  });
};

// ============================================
// USER API ENDPOINTS (Example)
// Uncomment and use these when your backend is ready
// ============================================

/**
 * Get all users
 * @returns {Promise<Array>} Array of user objects
 */
// export const getUsers = async () => {
//   try {
//     const response = await get('/users');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     throw error;
//   }
// };

/**
 * Get user by ID
 * @param {number} userId - User ID
 * @returns {Promise<Object>} User object
 */
// export const getUserById = async (userId) => {
//   try {
//     const response = await get(`/users/${userId}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching user ${userId}:`, error);
//     throw error;
//   }
// };

/**
 * Create new user
 * @param {Object} userData - User data {name, email, password}
 * @returns {Promise<Object>} Created user object
 */
// export const createUser = async (userData) => {
//   try {
//     const response = await post('/users', userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating user:', error);
//     throw error;
//   }
// };

/**
 * Update user
 * @param {number} userId - User ID
 * @param {Object} userData - Updated user data
 * @returns {Promise<Object>} Updated user object
 */
// export const updateUser = async (userId, userData) => {
//   try {
//     const response = await put(`/users/${userId}`, userData);
//     return response.data;
//   } catch (error) {
//     console.error(`Error updating user ${userId}:`, error);
//     throw error;
//   }
// };

/**
 * Delete user
 * @param {number} userId - User ID
 * @returns {Promise<Object>} Deletion confirmation
 */
// export const deleteUser = async (userId) => {
//   try {
//     const response = await del(`/users/${userId}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error deleting user ${userId}:`, error);
//     throw error;
//   }
// };

// ============================================
// AUTHENTICATION API ENDPOINTS (Example)
// ============================================

/**
 * Login user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} User data and auth token
 */
// export const login = async (email, password) => {
//   try {
//     const response = await post('/auth/login', { email, password });
//     return response.data;
//   } catch (error) {
//     console.error('Error logging in:', error);
//     throw error;
//   }
// };

/**
 * Register new user
 * @param {Object} userData - {name, email, password}
 * @returns {Promise<Object>} Created user and auth token
 */
// export const register = async (userData) => {
//   try {
//     const response = await post('/auth/register', userData);
//     return response.data;
//   } catch (error) {
//     console.error('Error registering:', error);
//     throw error;
//   }
// };

/**
 * Logout user
 * @returns {Promise<Object>} Logout confirmation
 */
// export const logout = async () => {
//   try {
//     const response = await post('/auth/logout');
//     return response.data;
//   } catch (error) {
//     console.error('Error logging out:', error);
//     throw error;
//   }
// };

// Export the base functions for custom use
export default {
  get,
  post,
  put,
  delete: del,
};

// ============================================
// USAGE EXAMPLE IN YOUR COMPONENTS:
// ============================================
//
// import { getUsers, createUser } from '@/services/api';
//
// // In your component:
// const fetchUsers = async () => {
//   try {
//     const users = await getUsers();
//     console.log('Users:', users);
//   } catch (error) {
//     console.error('Failed to fetch users:', error);
//   }
// };
//
// const addUser = async () => {
//   try {
//     const newUser = await createUser({
//       name: 'John Doe',
//       email: 'john@example.com',
//       password: 'securepassword123'
//     });
//     console.log('User created:', newUser);
//   } catch (error) {
//     console.error('Failed to create user:', error);
//   }
// };
