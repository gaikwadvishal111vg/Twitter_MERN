// PACKAGES IMPORT
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";
//my file imports here
import userRoutes from "./routes/userRoute.js"
import connectmongoDB from "./Database/mongoDB.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/postRoute.js";
import notificationRoute from "./routes/notificationRoute.js"

dotenv.config();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
    
});
const app = express();
app.use(express.urlencoded({extended:true}));
const PORT = process.env.PORT || 8080;
app.use(express.json()); //its parse the req.body
app.use(cookieParser());
// console.log(process.env.MONGO_URI);
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/notifications", notificationRoute);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectmongoDB();
    });