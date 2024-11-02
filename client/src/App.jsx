import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';


export default function  () {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>




      </Routes>
    
    </BrowserRouter>
    
  )
}