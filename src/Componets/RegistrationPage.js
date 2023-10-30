import React from 'react'
import { Form, } from 'react-bootstrap';
import Login from './Login';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  return (
    <div >
      <Form className="card shadow p-3 mb-5 bg-white rounded mt-5 " style={{ width: "25rem", height:"32rem", margin:"auto"}}>
     <h1 className='text-primary mt-5'>Registration Form</h1>
     <input type="text" className='container mt-4 rounded' style={{height:"3rem"}} placeholder='Frist Name'/>
     <input type="text" className='container mt-4 rounded' style={{height:"3rem"}} placeholder='second Name'/>
     <input type="email" className='container mt-4 rounded' style={{height:"3rem"}} placeholder='Email'/>
     <input type="password" className='container mt-4 rounded' style={{height:"3rem"}} placeholder='Password'/>
     <Link to="/login"><button type="button" className="btn btn-primary mt-3 rounded">Submit</button></Link>
     
     </Form>
    </div>
  )
}

export default RegistrationPage