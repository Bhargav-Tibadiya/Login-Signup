import React, { useState } from 'react'
import "./user.css"
import axios from 'axios'

const CreateUser = () => { 

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [age,setAge] = useState("")

  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUsers",{name,email,age})
    .then(responce => console.log(responce))
    .catch(err => console.log(err))

  }


  return (
    <div className="container">
      <div className="box">
          <form action="" onSubmit={formSubmitHandler}>
            
            <h2>Add User</h2>

            <div className='form-data'>
              <label htmlFor="">Name</label>
              <input type="text" classNamename="form-controll" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
            </div>
            
            <div className='form-data'>
              <label htmlFor="">Email</label>
              <input type="email" classNamename="form-controll" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            
            <div className='form-data'>
              <label htmlFor="">Age</label>
              <input type="text" classNamename="form-controll" placeholder="Enter Age" onChange={(e)=>setAge(e.target.value)}/>
            </div>

            <button className='btn' type='submit'>Submit</button>

          </form>
      </div>
    </div>
  )
}

export default CreateUser