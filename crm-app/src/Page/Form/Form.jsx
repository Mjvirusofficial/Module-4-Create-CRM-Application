import React, {  useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

function Form() {
  // const { name } = useParams();

  const [d, setD] = useState({})
  const Navigate = useNavigate();

  // for edit
  // const [updateD, setUpdateD] = useState({})


  function buttonClicked() {
    fetch('http://localhost:3000/user', {
      method: 'POST',
      body: JSON.stringify(d),
      headers: {
        'content-Type': 'application/json'
      }
    }).then(() => {
      toast.success('Susseccfully added')
      Navigate('/')
    })
  }

  // Edit purpose {
 
  // useEffect(() =>{
  //   if (name) {
  //     fetch('http://localhost:3000/user')
  //       .then((res) => {
  //         return res.json();
  //       }).then((resp) => {
  //         let result = resp.find((c) => c.name === name)
  //         if (result) {
  //           setD(result)
  //           // setUpdateD(result)
  //         }
  //       });
  //   }
  // },[])
  

  // }

  return (
    <div>
      <div className="container">
        <h1 className='text-center mt-2'>Customer Form</h1>
        <div class="form-group col-md-6 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Name</h5></label>
          <input onInput={(e) =>{
            setD({...d , name:e.target.value})
          }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name" />
        </div>

        <div class="form-group col-md-6 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Email</h5></label>
          <input onInput={(e) =>{
            setD({...d , email:e.target.value})
          }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" />
        </div>
        {/* for some experiment  value={d.email} onChange={(e) => {
            d.email = e.target.value;
            setD(d)

          }}  */}
        <div class="form-group col-md-6 col-10 mx-auto">
          <label for="exampleInputEmail1"><h5>Website</h5></label>
          <input onInput={(e) =>{
            setD({...d , website : e.target.value})
          }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your website" />
        </div>

        {/* <div class="form-group col-md-6 col-10 mx-auto">
    <label for="exampleInputEmail1"><h5>Message</h5></label>
    <textarea type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write Something..."/>
  </div> */}
        <div class=" mt-2 form-group col-md-6 col-10 mx-auto">
          <button className='btn btn-primary ' onClick={buttonClicked}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Form;