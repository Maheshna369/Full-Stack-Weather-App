import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import connectDB from './config/config.js';
import routes from './routes/routes.js';
const app= express();
env.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const port= process.env.PORT;
connectDB();
app.get("/", (req, res)=>{
    res.json({ message: "This is the backend part of weather app."});
})
routes(app);
app.listen(port, ()=> console.log(`Server is running on port ${port}`));