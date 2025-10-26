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
import { useTranslation } from 'react-i18next';
import Workprovideregister from './Pages/public/Workprovideregister';
import Workerproviderlogin from './Pages/public/Workerproviderlogin';

import './i18n';
function App() {
   const { t, i18n } = useTranslation();
   // In your index.js or App.js

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
  <div className='App'>
    {/* <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('ml')}>Malayalam</button>
      <button onClick={() => changeLanguage('en')}>English</button>
      <p>{t('login')}</p>
    </div> */}
  <Toaster position="top-center" reverseOrder={false} />

   <BrowserRouter>
   <Routes>
       <Route path='/' element={<Landingpage/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>

    <Route path='/login2' element={<Workerproviderlogin/>}/>
    <Route path='/register2' element={<Workprovideregister/>}/>

   <Route path='/home' element={<Protectedroutes><Home/></Protectedroutes>}/>
   <Route path='/otp' element={<Otp/>}/>
   <Route path='/profile' element={<Profile/>}/>
   <Route path='/addprofile' element={<Addprofiles/>}/>
   <Route path='/mobileotp' element={<Mobileotp/>}/>



   </Routes>
   
   
   
   </BrowserRouter>
   </div>
  
  );
}

export default App;
