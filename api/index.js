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


app.listen(3000 , () =>{
    console.log("sever is running on localhost:3000!");
});

