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
        email: "iris@gmail.com",
        bio:"Tech enthusiast and admin.",
    },
    {
        user_id: 2,
        name: 'RetaxMaster',
        role: roles.admin,
        email: "retaxx@gmail.com",
        bio:"Code ninja and problem solver.",
    },
    {
        user_id: 3,
        name: 'freddier',
        role: roles.admin,
        email: "freddier@gmail.com",
        bio:" CEO of Platzi.",
    },
    {
        user_id: 4,
        name: 'rocio',
        role: roles.student,
        email: "rooo@gmail.com",
        bio:"Learning to code and exploring the web. ",
    },
    {
        user_id: 5,
        name: 'leonel',
        role: roles.editor,
        email: "leo98@gmail.com",
        bio:"Content editor and grammar enthusiast.",
    },
    {
        user_id: 6,
        name: 'juandc',
        role: roles.author,
        email: "juandc@gmail.com",
        bio:"Passionate educator and developer. ",
    },
    {
        user_id: 7,
        name: 'sebaMate',
        role: roles.author,
        email: "sebasti96@gmail.com",
        bio:"Travel blogger and photographer. ",
    },
    {
        user_id: 8,
        name: 'betaTester', // New beta tester user
        role: roles.beta_tester,
        email: "examplebeta@gmail.com",
        bio:" Testing new features and providing feedback.",
    },
    {
        user_id: 9,
        name: 'premiumUser', // New premium user
        role: roles.premium_user,
        email: "examplepremium@gmail.com",
        bio:"Enjoying premium features and exclusive content.", // ADD BIO

    },
    {
        user_id: 10,
        name: 'contentAuthor', // New content author user
        role: roles.author,
        email: "exampleauthor@gmail.com",
        bio:"Creating engaging content for the web ",
    },
    // Future: Add more users
];

// Simulate fetching user by username (mimicking a database query)
export async function fetchUserByUsername(username) {
    // Simulate asynchronous operation (like a database query)
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

    console.log("fetchUserByUsername - username:", username); // ADD THIS LINE
    const foundUser = users.find(user => user.name === username);
    console.log("fetchUserByUsername - foundUser:", foundUser); // ADD THIS LINE

    return foundUser || null; // Return user object or null if not found
}

// Future: Function to fetch users from database
// export async function getUsersFromDatabase() {
//   // ... API call to backend to get users from database ...
//   // return fetched users data
// }