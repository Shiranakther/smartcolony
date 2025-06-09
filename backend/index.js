import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './connection/connectDB.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());



//connect to the database
app.listen(PORT,()=>{
    connectDB()
        .then(() => {
            console.log(`Server is running on port ${PORT}`);
        })
        .catch((err) => {
            console.error("Error connecting to the database:", err);
            process.exit(1); // Exit the process with failure
        });
})

