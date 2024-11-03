import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorhandler } from "../utils/error.js";
export const signup = async(req,res,next)=>{
    // console.log(req.body);
    //destructure
    const{username,email,password} = req.body;
    const hashedpassword = bcryptjs.hashSync(password,10);
    const newUser = new User({username,email,password:hashedpassword});

    try {
        await newUser.save();
        res.status(201).json('user created successfully')

    } catch (error) {
        // res.status(500).json(error.message)
         next(error);
        // next(errorhandler(500,'error from the function'));
    }
};