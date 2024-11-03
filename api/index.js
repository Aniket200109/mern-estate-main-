import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
dotenv.config();


mongoose.connect(process.env.MONGO).then(() =>{
    console.log("connected to mongodb!");
})
.catch((err) =>{
    console.log(err)
})
const app = express();

app.use(express.json());
//test api
// app.get("/test",(req,res) =>{
//     res.json()
// })
app.use('/api/auth',authRouter);

//middleware=>global error-handling middleware 

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
});
app.listen(3000 , () =>{
    console.log("sever is running on localhost:3000!");
});

