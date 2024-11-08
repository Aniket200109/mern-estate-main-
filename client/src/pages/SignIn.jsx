import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice.js';

export default function SignIn() {

const [formData, setFormData] = useState({});
// const [error, setError] = useState(null);
// const [loading, setLoading] = useState(false);

const {loading, error} = useSelector((state) => state.user);
const navigate = useNavigate();
const dispatch = useDispatch();

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.id ] : e.target.value, // set value to what ever is changing with respective id 
  });
};

const handleSubmit = async(e) => {
  e.preventDefault(); //it will prevent from getting refreshed while clicking button.

  //before request set loading =>true
  try{
    // setLoading(true);
    dispatch(signInStart())
    const res = await fetch('/api/auth/signin',
      {
        method: 'POST',
        headers:{
          'content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      }
    ); //fetch api  , we don't wanna write localhost:5000 .... each time
       // instead wanna search api/auth/signup =>this is requesting localhost:5000
        //so we have to write proxy
  
      const data = await res.json();
      // const responseText = await res.text();
    
    // If the response body is not empty, parse it as JSON
    // let data = {};
    // if (responseText) {
    //   data = JSON.parse(responseText);
    // }
      if(data.success === false){
        // setLoading(false);
        // setError(data.message);
        dispatch(signInFailure(data.message));
        return;
      }
    //   setLoading(false);
    //   setError(null);
    dispatch(signInSuccess(data));
      navigate('/');
  }
  catch(error){
    //   setLoading(false);
    //   setError(error.message);
    dispatch(signInFailure(error.message));
    
  }

    console.log(data);
    console.log(req.body);

};                                                   
// console.log(formData);                                    

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* <input type = "text" placeholder='username'
         className='p-3 rounded-lg' id="username" onChange={handleChange}/> */}
        <input type = "email" placeholder='email'
         className='p-3 rounded-lg' id="email" onChange={handleChange}/>
        <input type = "password" placeholder='password'
         className='p-3 rounded-lg' id="password" onChange = {handleChange}/>
        <button disabled = {loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
        <div>
          {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
      </div>

    </div>
  )
}
