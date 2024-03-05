import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login';
import Register from './Pages/Register';
import {Toaster} from 'react-hot-toast'
import Home from './Pages/Home';
function App() {
  return (
  <div className='App'>
  <Toaster position="top-center" reverseOrder={false} />

   <BrowserRouter>
   <Routes>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/home' element={<Home/>}/>
   
   </Routes>
   
   
   
   </BrowserRouter>
   </div>
  
  );
}

export default App;
