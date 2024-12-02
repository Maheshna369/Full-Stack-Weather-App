Full-Stack Weather Application 🌦️
A modern weather application built with the MERN stack (MongoDB, Express.js, React.js, Node.js), combining robust backend development with an interactive frontend. The app features secure user authentication, real-time weather data retrieval, and a responsive user interface, utilizing advanced React hooks and best development practices.

Features
Authentication and User Management
Secure Registration and Login:
User accounts are created with passwords securely hashed using bcrypt. Authentication is managed through JWT (JSON Web Tokens), ensuring safe and efficient session handling.
Session Management:
Token-based authentication protects routes and user-specific data.
Weather Data Functionality
City-Specific Weather Details:
Users can search for any city to get real-time weather information such as temperature, humidity, wind speed, and weather conditions.
Seamless Data Fetching:
The app interacts with a third-party weather API (e.g., OpenWeatherMap) to fetch accurate and up-to-date weather data.
Frontend User Experience
Dynamic User Interface:
React ensures a smooth and responsive user experience, supporting both mobile and desktop devices.
React Hooks Integration:
Advanced state management (useState), side-effects handling (useEffect), and global state sharing (useContext) are implemented for clean and efficient component architecture.
Error Handling:
The app includes clear feedback for invalid city searches, failed API requests, and authentication issues.
Backend Architecture
RESTful API Design:
A well-structured backend built with Node.js and Express.js, following REST principles for scalability and maintainability.
Database:
MongoDB is used for user data storage, ensuring reliable and fast access with the Mongoose ODM for schema definition and queries.
Tech Stack
Frontend
React.js for building the user interface
React Router DOM for navigation
Context API and React Hooks (useState, useEffect, useContext) for state and logic management
CSS for styling
Backend
Node.js and Express.js for server-side development
MongoDB for database management
Mongoose ODM for schema modeling
JWT for authentication and session handling
Bcrypt for secure password hashing
Third-Party Services
Weather data fetched using a public API (e.g., OpenWeatherMap)
How It Works
User Workflow
Account Creation:

Users register with a username, email, and password. Passwords are securely hashed and stored in the database.
Login and Authentication:

Upon successful login, the user receives a JWT, allowing them to access protected routes and features.
Weather Search:

Authenticated users can enter a city name to retrieve its current weather data.
The app displays key details such as temperature, weather description, humidity, and wind speed.
Real-Time Updates:

Weather data is fetched dynamically with API calls, ensuring the most recent information is displayed.
Logout:

Users can securely log out, invalidating their session token.
React Hooks in Use
useState:
Manages dynamic UI states such as input values, loading indicators, and API responses.
useEffect:
Handles side effects like fetching weather data or checking user authentication status.
useContext:
Shares state across components, including user authentication data and app-level settings.
Security Measures
Password Protection:
Passwords are hashed using bcrypt before being stored in the database, protecting sensitive user data.
Token-Based Authentication:
JWTs are used to secure access to protected routes, preventing unauthorized access.
API Key Handling:
The weather API key is securely managed on the backend to prevent misuse.
Future Enhancements
Geolocation Support:
Automatically fetch weather data based on the user's current location.
Weather Forecasting:
Add hourly and weekly forecasts for detailed weather insights.
Favorites Management:
Allow users to save favorite cities for quick access.
Dark Mode:
Improve user experience with a theme toggle for light and dark modes.
Enhanced Performance:
Optimize API calls with caching to reduce latency and load times.
