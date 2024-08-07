// Import necessary packages
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Import the routes file (uncomment and specify the path when needed) Example: import routes from './routes'; // Example: './routes'
import songsRoutes from './routes/songs.routes.js';

// Import the configuration file to connect to the database (uncomment and specify the path when needed) Example: import connectDB from './config/db'; // Example: './config/db'
import toConnectToBD from './config/database.js';

// Load environment variables from a .env file
dotenv.config();


// Create an instance of the express application
const app = express();

// Define the port on which the server will listen for requests. Using an environment variable to define the port is a good practice
const port = process.env.PORT || 8000;


// Function to connect to the database
toConnectToBD();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Define basica routea with use so we can further go to the routes.
app.use('/api/songs',songsRoutes );


// Configure the server to listen on the specified port
// and execute a callback function that displays a message in the console
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
