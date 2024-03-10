import React from 'react'
import "./user.css"

const UpdateUser = () => {
  return (
    <div className="container">
      <div className="box">
          <form action="">
            
            <h2>Update User</h2>
 
            <div className='form-data'>
              <label htmlFor="">Name</label>
              <input type="text" classNamename="form-controll" placeholder="Enter Name" />
            </div>
            
            <div className='form-data'>
              <label htmlFor="">Email</label>
              <input type="email" classNamename="form-controll" placeholder="Enter Email" />
            </div>
            
            <div className='form-data'>
              <label htmlFor="">Age</label>
              <input type="text" classNamename="form-controll" placeholder="Enter Age" />
            </div>

            <button className='btn' type='submit'>Submit</button>

          </form>
      </div>
    </div>
  )
}

export default UpdateUser