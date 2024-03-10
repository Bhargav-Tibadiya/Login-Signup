import React, { useState } from 'react'
import "./user.css"
import { Link } from 'react-router-dom'
const Users = () => {

    const [user,setUser] = useState([
        {
        name:"Bhargav",
        email:"bhargav@mail.com",
        age:20,
        },
        {
        name:"Kazuha",
        email:"kazuha@mail.com",
        age:21,
        },
    ])

  return (
    <div className='container'>
        <div className='box'>

            <Link to={"/create"} className='btn addbtn'>Add+</Link>
            <br/>

            <div className='space'></div>

            <table border={3}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((__user)=> {
                            return(
                                <tr>
                                    <td>{__user.name}</td>
                                    <td>{__user.email}</td>
                                    <td>{__user.age}</td>
                                    <td> 
                                        <Link to={"/update"} className='btn'>Update</Link>
                                        <Link to={"/delete"} className='btn'>Delete</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Users