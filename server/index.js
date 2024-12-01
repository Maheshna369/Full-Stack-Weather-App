import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import connectDB from './config/config.js';
import routes from './routes/routes.js';
import path, { dirname } from "path";
const _dirname= path.resolve();const app= express();
env.config({path: "../.env"});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(_dirname, "/client/dist")));
const port= process.env.PORT || 5000;
connectDB();
app.get("*", (_, res)=>{
    res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
})
app.get("/", (req, res)=>{
    res.json({ message: "This is the backend part of weather app."});
})
routes(app);
app.listen(port, ()=> console.log(`Server is running on port ${port}`));