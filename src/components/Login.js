import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

//-------------helpers-------------//
import login from '../services/login';

export const Login = () => {

  const [errorMessage, setErrorMessage] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: document.getElementById('outlined-required').value,
      password: document.getElementById('outlined-password-input').value
    }

    const response = await login(user);

    if(!response){
      setErrorMessage("Wrong credentials")
    } else {
      setErrorMessage(null)
      document.cookie = `Authorization=${response.token}; max-age=${60 * 60 * 4}; path=/; samesite=strict`;
      window.location.href = "/";
    }

  }

  const handleErrorMessage = () => {
    if(errorMessage){
      return <Alert severity="warning">{errorMessage}</Alert>
    }
  }

  return (
		<div className="login-form-cont">
      <h2>Login</h2>
      { handleErrorMessage() }
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { my: 1, mt: 2, width: '100%' },
				}}
				noValidate
				autoComplete="off"
				encType='multipart/form-data'
			>
				<div>
					<TextField
						required
						id="outlined-required"
						label="Email"
            type="email"
					/>
          <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
				</div>
        <p>Don't have an account? <Link to={'/auth/register'}>Register</Link></p>
				<Button variant="outlined" color='inherit' type='submit' onClick={handleSubmit}>Send</Button>
			</Box>
		</div>
	);
}

export default Login;