import React from 'react'
import { Button,Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <Form className="card shadow p-3 mb-5 bg-white rounded mt-5 " style={{ width: "25rem", height:"25rem", margin:"auto"}}>
      <h1 className='mt-5'>Sign in</h1>
      <input type="text" className='container mt-5 rounded' style={{height:"3rem"}} placeholder='User Name'/>
        <input type="password" className='container mt-4 rounded' style={{height:"3rem"}} placeholder='Password'/>
      <Link to="/home"><button type="button" className="btn btn-primary mt-4 rounded">Submit</button></Link>  
        </Form>
    </div>
  )
}

export default Login