import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import {Toaster} from 'react-hot-toast'
import Home from './Pages/Home';
import Protectedroutes from './Auth/Protectedroutes';
import Publicroutes from './Auth/Publicroutes';
import Otp from './Pages/Otp';
import Profile from './Pages/Profile';
import Addprofiles from './Pages/Addprofiles';
import Mobileotp from './Pages/Mobileotp';
import Landingpage from './Pages/Landingpage';
function App() {
  return (
  <div className='App'>
  <Toaster position="top-center" reverseOrder={false} />

   <BrowserRouter>
   <Routes>
   <Route path='/login' element={<Login/>}/>
   <Route path='/' element={<Landingpage/>}/>

   <Route path='/register' element={<Register/>}/>
   <Route path='/home' element={<Protectedroutes><Home/></Protectedroutes>}/>
   <Route path='/otp' element={<Otp/>}/>
   <Route path='/profile' element={<Protectedroutes><Profile/></Protectedroutes>}/>
   <Route path='/addprofile' element={<Protectedroutes><Addprofiles/></Protectedroutes>}/>
   <Route path='/mobileotp' element={<Protectedroutes><Mobileotp/></Protectedroutes>}/>



   </Routes>
   
   
   
   </BrowserRouter>
   </div>
  
  );
}

export default App;
