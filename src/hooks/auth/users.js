// src/hooks/auth/users.js
import { roles } from './roles'; // Import roles definition

// Future: In a real app, you'd fetch users from a database table (e.g., Users table)
// Example database schema for Users table:
// | user_id (INT, Primary Key) | username (VARCHAR) | role_id (INT, Foreign Key referencing Roles table) |

export const users = [
    {
        user_id: 1, // Example ID, could be INT in DB
        name: 'Irisval', // Username, VARCHAR in DB
        role: roles.admin, // Role object, in DB you'd store role_id (Foreign Key)
    },
    {
        user_id: 2,
        name: 'RetaxMaster',
        role: roles.admin,
    },
    {
        user_id: 3,
        name: 'freddier',
        role: roles.admin,
    },
    {
        user_id: 4,
        name: 'rocio',
        role: roles.student,
    },
    {
        user_id: 5,
        name: 'leonel',
        role: roles.editor,
    },
    {
        user_id: 6,
        name: 'juandc',
        role: roles.student,
    },
    {
        user_id: 7,
        name: 'sebaMate',
        role: roles.student,
    },
    // Future: Add more users
];

// Simulate fetching user by username (mimicking a database query)
export async function fetchUserByUsername(username) {
    // Simulate asynchronous operation (like a database query)
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

    const foundUser = users.find(user => user.name === username);
    return foundUser || null; // Return user object or null if not found
}

// Future: Function to fetch users from database
// export async function getUsersFromDatabase() {
//   // ... API call to backend to get users from database ...
//   // return fetched users data
// }