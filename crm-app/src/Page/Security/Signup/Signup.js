import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

function Signup() {
const navigate = useNavigate()
useEffect(() =>{
  sessionStorage.clear();
},[])
    const [data,setData] = useState({});

    function clickForSignup(){
        fetch('http://localhost:3000/signup',{
            method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'content-Type': 'application/json'
      }
    }).then(() => {
        console.log(data)
        navigate('/signin')
      })

    }

  

    
  return (
    <div>
         <div className="container">
        <h1 className='text-center mt-2'>Signup</h1>
        <div class="form-group col-md-6 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Name</h5></label>
          <input onInput={(e) =>{
            setData({...data, name : e.target.value})
          }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
        </div>

        <div class="form-group col-md-6 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Email</h5></label>
          <input onInput={(e) =>{
            setData({...data, email : e.target.value})
          }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
        </div>
        {/* for some experiment  value={d.email} onChange={(e) => {
            d.email = e.target.value;
            setD(d)

          }}  */}

        <div class="form-group col-md-6 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Phone</h5></label>
          <input onInput={(e) =>{
            setData({...data, phone : e.target.value})
          }} type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your website" />
        </div>

        <div class="form-group col-md-6 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Password</h5></label>
          <input onInput={(e) =>{
            setData({...data, password : e.target.value})
          }} type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your website" />
        </div>

        {/* <div class="form-group col-md-6 col-10 mx-auto">
    <label for="exampleInputEmail1"><h5>Message</h5></label>
    <textarea type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write Something..."/>
  </div> */}
        <div class=" mt-2 form-group col-md-6 col-10 mx-auto">
          <button className='btn btn-success ' onClick={clickForSignup}>Signup</button>
          <NavLink to="/signin"><button className='btn btn-primary m-1'>Signin</button></NavLink>

          
        </div>
      </div>
    </div>
  )
}

export default Signup