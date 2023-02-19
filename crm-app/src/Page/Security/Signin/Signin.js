import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Signin() {
  const navigate = useNavigate()
  useEffect(() =>{
    sessionStorage.clear();
  },[])
  
  const [name ,setName] = useState();
  const [password ,setPassword] = useState();

  // let obj = {name,password}

  function signin(){
    // console.log(obj)
    if(validate()){
      fetch('http://localhost:3000/signup').then((res) =>{
        return res.json()
      }).then((resp) =>{
        // console.log(resp)

        if(Object.keys(resp).length === 0){
          toast.error('please enter valid username')
        } else{
          if(resp.password === password){
            if(resp.name === name){
              toast.success('Login successfully')
              navigate('/')

              localStorage.setItem('username',name)
            }else{
              toast.error('please enter valid username')
            }
           
          }else{
            toast.error('Invalid username & password')
          }
        }
      }).catch((e) =>{
        toast.error('Invalid username and password')
      })
    }
  }

  function validate(){
    let result = true;
    if(name === '' || name == null ){
      result = false;
      toast.error('Plese enter username')
    }

    if(password === '' || password == null ){
      result = false;
      toast.error('Plese enter password')
    }
    return result;
  }

  
  return (
    <div>
        <div className="container">
        <h1 className='text-center mt-2'>Login</h1>
        <div class="form-group col-md-6 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Username</h5></label>
          <input value={name} onInput={(e) =>{
            setName(e.target.value)
          }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
        </div>

        <div class="form-group col-md-6 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Password</h5></label>
          <input value={password} onInput={(e) =>{
            setPassword(e.target.value)
          }} type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
        </div>
        {/* for some experiment  value={d.email} onChange={(e) => {
            d.email = e.target.value;
            setD(d)

          }}  */}
        {/* <div class="form-group col-md-6 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Website</h5></label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your website" />
        </div> */}

        {/* <div class="form-group col-md-6 col-10 mx-auto">
    <label for="exampleInputEmail1"><h5>Message</h5></label>
    <textarea type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write Something..."/>
  </div> */}
        <div class=" mt-2 form-group col-md-6 col-10 mx-auto">
          <button className='btn btn-primary ' onClick={signin} >Signin</button>
          <NavLink to="/signup"><button className='btn btn-success m-1'>Register</button></NavLink>

        </div>
      </div>
    </div>
  )
}

export default Signin