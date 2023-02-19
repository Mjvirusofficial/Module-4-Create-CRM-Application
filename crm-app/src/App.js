// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Customer from './Page/Customer';
import Form from './Page/Form/Form';
import Signin from './Page/Security/Signin/Signin';
import Signup from './Page/Security/Signup/Signup';
// import Footer from './Component/Footer/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <div className="">

       {/* <Navbar/> */}
       <ToastContainer position='top-center'/>
      <Routes>
        <Route path='/' element={<Customer/>} />
        {/* <Route path='/list' element={<List/>} /> */}
        <Route path='/form' element={<Form/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />

        <Route path='/form/:name' element={<Form/>} />

      </Routes>
      {/* <Footer/> */}
   </div>
  );
}

export default App;
