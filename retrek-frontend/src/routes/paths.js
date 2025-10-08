/**
 * Application Routes
 * Centralized route paths for easy management and consistency
 */

export const PATHS = {
  // Main Pages
  HOME: '/',
  ROUTINES: '/routines',
  ROUTINES_CREATE: '/routines/create',
  REPORTS: '/reports',
  LOG_HISTORY: '/log-history',
  
  // Auth (for future)
  LOGIN: '/login',
  REGISTER: '/register',
  LOGOUT: '/logout',
  
  // Settings (for future)
  SETTINGS: '/settings',
  PROFILE: '/profile',
};

// Helper function to generate dynamic routes
export const generatePath = (path, params = {}) => {
  let result = path;
  Object.keys(params).forEach(key => {
    result = result.replace(`:${key}`, params[key]);
  });
  return result;
};

export default PATHS;