import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"
import {Card, Col, Container, Row, Form, Button, Dropdown} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';
import FileBase64 from 'react-file-base64';
function RegisterAppUser() {
    const [ user, setUser] = useState('')
    const [ file, setFiles] = useState('')
    const [ preview, setPreview] = useState('')
    
//   const handleChange = e => {
//     const { name, value } = e.target
//     setUser({
//         ...user,
//         [name]: value
//     })
// }
const uploadHandler = (event) => {
  const selectedFile=event.target.files[0]
  setFiles(selectedFile) 
  const filePreview=URL.createObjectURL(selectedFile);
  console.log(filePreview);
  setPreview(filePreview);

}

const clearState = () => {
  setUser('')
  setPreview('');
}
const register = (event) => {
  event.preventDefault();

  let registerForm=document.getElementById('registerForm');  
  const { name, username, email, password, role, photo} = user
  if(user.name==''){
    toast.error('Name Required');
  }else if(user.username==''){
    toast.error('Username Required');
  }else if(email==''){
    toast.error('Email Required');
  }  else if(password==''){
    toast.error('Password Required');  
  }else if(role==''){
    toast.error('Role Required');
  }else{  
   const formData= new FormData();
   formData.append('name',name);
   formData.append('username',username);
   formData.append('email',email);
   formData.append('password',password);
   formData.append('role',role);
   formData.append('photo',file.name);   
  formData.append('myfile',file);
  console.log(formData);
      axios.post("CreateAppUser", formData, {
        headers: {
          "encType": "multipart/form-data"
        }
      })
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
                <Form id="registerForm" onSubmit={register}>
                <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name {user.name}</label>                 
                     <input type="text" className="form-control" onChange={e => setUser({ ...user, name: e.target.value })} placeholder="Your Name" />
                  </div>
                  </div> 
                  <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Username {user.username}</label>

                    <input type="text" className="form-control" onChange={e => setUser({ ...user, username: e.target.value })} placeholder="Username" />

                  </div>
                  </div>
                 
                  </div>
                  <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input  type="email" className="form-control" onChange={e => setUser({ ...user, email: e.target.value })} placeholder="Email" />

                  
                  </div>
                  </div> 
                  <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>   
                    <input type="password" className="form-control" onChange={e => setUser({ ...user, password: e.target.value })} />                
                  </div>
                  </div>
                 
                  </div>
                  <div className="row">
                <div className="col-md-6">
                <div className="form-group">
  <label>Role {user.role}</label>

  <select className="form-control" style={{width: '100%'}} onChange={e => setUser({ ...user, role: e.target.value })}>
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
                      {/* <FileBase64 type="file"
          multiple={false}
          onDone={({ base64 }) => setUser({ ...user, photo: base64 })}
        />
                         */}
                      <input type="file" onChange={uploadHandler} />
                      </div>
                      <div className="input-group-append">
                        <span className="input-group-text">Upload</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-image waves-effect waves-block waves-light">
                  {file && <img src={preview} alt={file.name} />}
            {/* <img className="activator" style={{ width: '30%', height: 100 }} src={user.photo} /> */}
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