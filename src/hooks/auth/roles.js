// src/hooks/auth/roles.js

// Future: In a real app, you'd fetch roles from a database table (e.g., Roles table)
// Example database schema for Roles table:
// | role_id (INT, Primary Key) | role_name (VARCHAR) | description (TEXT) |

export const roles = {
    admin: {
        role_id: 1, // Example ID, could be INT in DB
        type: 'admin', // Role name, VARCHAR in DB
        description: 'Administrator role with full access', // Description, TEXT in DB
        permissions: { // Permissions associated with this role
            read: true,
            create: true,
            edit: true,
            delete: true,
            publish: true, // Added publish permission
            moderate: true, // Added moderate permission
            beta_access: true, // Access to beta features
            premium_access: true, // Access to premium features
        },
    },
    editor: {
        role_id: 2,
        type: 'editor',
        description: 'Editor role with content creation and editing access',
        permissions: {
            read: true,
            create: true,
            edit: true,
            delete: false,
            publish: true, // Added publish permission
            moderate: false,
            beta_access: false,
            premium_access: false,
        },
    },
    author: { // Added Author role, granted when logged in.
        role_id: 3,
        type: 'author',
        description: 'Author role with content creation access',
        permissions: {
            read: true,
            create: true,
            edit: false,
            delete: false, // Authors cannot delete
            publish: true, // Authors shouldn't publish directly, maybe submit for review
            moderate: false,
            beta_access: false,
            premium_access: false,
        },
    },
    student: { // Guest default
        role_id: 4,
        type: 'student',
        description: 'Student role with read-only access',
        permissions: {
            read: true,
            create: false,
            edit: false,
            delete: false,
            publish: false,
            moderate: false,
            beta_access: false,
            premium_access: false,
        },
    },
    beta_tester: { // New Beta Tester role
        role_id: 5,
        type: 'beta_tester',
        description: 'Beta tester role with access to new features',
        permissions: {
            read: true,
            create: true, // Can provide feedback and create content in beta areas
            edit: false,
            delete: false, // To prevent accidental data loss in beta
            publish: false,
            moderate: false,
            beta_access: true, // Key permission: access to beta features
            premium_access: false,
        },
    },
    premium_user: { // New Premium User role
        role_id: 6,
        type: 'premium_user',
        description: 'Premium user role with access to premium content and features',
        permissions: {
            read: true, // Access to basic content
            create: true, // Typically premium users are consumers, adjust as needed
            edit: false,
            delete: false,
            publish: true,
            moderate: false,
            beta_access: false,
            premium_access: true, // Key permission: access to premium features
        },
    },
    // Future: Add more roles as needed (e.g., 'moderator', 'support')
};

// Future: Function to fetch roles from database
// export async function getRolesFromDatabase() {
//   // ... API call to backend to get roles from database ...
//   // return fetched roles data
// }