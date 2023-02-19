import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar/Navbar'
import '../Page/Customer.css'
function Customer() {

  // const list = {
  //   id:'',
  //   name:'',
  //   email:"",
  //   website:""
  // }

  // Here we can write the api data name and display...!
  const [data,setData] = useState(null);
  const navigate = useNavigate()
  useEffect(() =>{
   fetch('http://localhost:3000/user').then((res) =>{
    return res.json().then((r) =>{
      setData(r)
    })
   })
  },[])


// Editing process or you can say correction.
function Edit(name){
  console.log(name)
  navigate('/form/'+name)
}


useEffect(() =>{

  let username = localStorage.getItem('username');
  if(username === '' || username === null){
      navigate('/signup')
  }
},[])



  return (
    <>


    <Navbar/>

   


      <div className="container">
      <u><h1 className='text-center'>CRM REACT APP</h1></u>
      </div>
    <div className="container">
    <NavLink to='/form' ><button className='btn btn-success mt-2'>Add customer</button></NavLink>

    
    <table class="table mt-2  ">
  <thead>

    <tr className='bg-dark tab'>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
      <th scope="col">Action</th>
    </tr>
    
  </thead>
  
  
  <tbody>

  
  
   { data &&
    data.map((i) =>{
     return <tr>
    <th scope="col">{i.id}</th>
      <th scope="col">{i.name}</th>
      <th scope="col">{i.email}</th>
      <th scope="col">{i.website}</th>
      <th scope="col"><button onClick={() => Edit(i.name)} className='btn btn-warning'>Edit</button></th>
    </tr>
  
    })
   }
   
  </tbody>
  
</table>
          
          
  
    
       {/* {data.length != 0 && (
        <div class="alert alert-danger mt-3" role="alert">
          No Customers are available im system.
        </div>
      )} */}
    
    </div>
   
        
    </>
  )
}

export default Customer