import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

    async function createLogin(event) {
		event.preventDefault();
    let loginBtn=document.getElementById('loginBtn');    
    if(username.length==0){
      toast.error('UserName Required');
    }else if(password.length==0){
      toast.error('Password Required');
    }else{
      loginBtn.innerHTML="Signiing....";

		const response = await fetch('http://localhost:5000/api/v1/AppUserLogin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
        username,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'success') {   
      toast.success('Login Successful!');   
      sessionStorage.setItem("token",(data.token))   
      loginBtn.innerHTML="Signin";
      window.location.href='/';
		}else{
      toast.error('Fail ! Unauthorised');
      loginBtn.innerHTML="Signin";   
      
    }
	}
}
  return (
<div>
<div className="login-box">
  <div className="card card-outline card-primary">
    <div className="card-header text-center">
      <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      
      <form onSubmit={createLogin}>
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Username"
                    value={username}
					onChange={(e) => setUsername(e.target.value)}
          />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
        <input type="password" className="form-control" placeholder="Enter Password"
                    value={password}
					onChange={(e) => setPassword(e.target.value)}
              />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          <div className="col-4">
            <button id="loginBtn" type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
        </div>
        <ToastContainer />
      </form>

      <p className="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
   
    </div>
  </div>
</div>

</div>

  )
}

export default Login