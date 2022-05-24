import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"
import {Card, Col, Container, Row, Form, Button, Dropdown} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';

function RegisterAppUser() {
    const [ user, setUser] = useState({
      name: "",
      email:"",
      password:"",
      username: "",
      role: "",
      photo: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    })
}

const clearState = () => {
  setUser('')
}
const register = (event) => {
  event.preventDefault();
  let registerForm=document.getElementById('registerForm');  
  const { name, username, email, password, role, photo} = user
  if(name==''){
    toast.error('Name Required');
  }else if(username==''){
    toast.error('Username Required');
  }else if(email==''){
    toast.error('Email Required');
  }  else if(password==''){
    toast.error('Password Required');  
  }else if(role==''){
    toast.error('Role Required');
  }else{  
  
      axios.post("CreateAppUser", user)
      .then( res => {
          console.log(res.data)
          if (res.data.status === 'success') {   
            toast.success('App User Successfully Created!');      
            registerForm.reset();
            clearState();
    
          }else{
            toast.error('Already registered! Try another');           
            
          }
      })
  
    }
}
// const [role, setRole] = useState([])

// function Reset(){
//   setName("");
//   setUsername("");
//   setEmail("");
//   setRole("");
//   setPassword("");
// }
// const options = [
//   { value: '', label: 'Choose' },
//   { value: 'Admin', label: 'Admin' },
//   { value: 'HRM', label: 'HRM' },
//   { value: 'Accounts', label: 'Accounts' }
// ]


// function onChangeInput(value) {  
//   setRole(value.value)
// //  console.log(value); 
// }
// console.log(role);


//     async function registerUser(event) {
// 		event.preventDefault();
//     let registerBtn=document.getElementById('registerBtn');    
//     if(name.length==0){
//       toast.error('Name Required');
//     }else if(username.length==0){
//       toast.error('Username Required');
//     }else{
//     registerBtn.innerHTML="Registering....";   
// 		const response = await fetch('http://localhost:5000/api/v1/CreateAppUser', {
// 			method: 'POST',
//  			headers: {
// 				'Content-Type': 'application/json',
//         'token-key': `${JSON.parse(localStorage.getItem('token'))}`},
//         body: JSON.stringify({
// 				name,
//         username,
// 				email,
//         role,
// 				password,
// 			}),
// 		})

// 		const data = await response.json();

// 		if (data.status === 'success') {   
//       toast.success('App User Successfully Created!');      
//       registerBtn.innerHTML="Register";
//       Reset();
// 			// history.push('login')
// 		}else{
//       toast.error('Already registered! Try another');
//       registerBtn.innerHTML="Register";   
      
//     }
// 	}
// }

  return (
  <div>
  <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Register Form</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a>Home</a></li>
              <li className="breadcrumb-item active">Register</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  

    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Register App User</h3>
              </div>
         
                <div className="card-body">
                <Form id="registerForm" onSubmit={register} encType="multipart/form-data">
                <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name {user.name}</label>                 
                     <input className="form-control" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
                  </div>
                  </div> 
                  <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Username {user.username}</label>
                    
                      <input className="form-control" name="username" value={user.username} placeholder="Username" onChange={ handleChange }></input>
                  </div>
                  </div>
                 
                  </div>
                  <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input className="form-control" name="email" value={user.email} placeholder="Email" onChange={ handleChange }/>
                  
                  </div>
                  </div> 
                  <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>                   
                      <input type="password" className="form-control" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
                  </div>
                  </div>
                 
                  </div>
                  <div className="row">
                <div className="col-md-6">
                <div className="form-group">
  <label>Role {user.role}</label>

  <select className="form-control" style={{width: '100%'}} name="role" value={user.role} onChange={ handleChange }>
    <option selected="">Choose</option>
    <option value="Admin">Admin</option>
    <option value="Accounts">Accounts</option>
    <option value="HRM">HRM</option>
  </select>
</div>

                  </div> 
                  <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputFile">Photo {user.photo}</label>
                    <div className="input-group">
                      <div className="custom-file">
                        <input type="file" name="photo" value={user.photo} className="custom-file-input" id="exampleInputFile" accept="image/png, image/jpeg, image/jpg"  multiple="false" onChange={ handleChange } />
                        <label className="custom-file-label" htmlFor="exampleInputFile">Choose Photo</label>
                      </div>
                      <div className="input-group-append">
                        <span className="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div>
                  </div>
                                  
                  </div>
                 
          <Button id="registerBtn" variant="primary" type="submit" className="submit-btn">
          Register
        </Button>
                 </Form>
                  
                </div>
              
            
              <ToastContainer />
            </div>
          
          </div>
        
        </div>
      </div>
    </section>
  </div>
</div>

  )

}

export default RegisterAppUser