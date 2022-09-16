import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

//-------------helpers-------------//
import register from '../services/register';

const Register = () => {

  const [errorMessage, setErrorMessage] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: document.getElementById('email-field').value,
      username: document.getElementById('username-field').value,
      password: document.getElementById('password-field').value
    }

    const response = await register(user);

    if(!response){
      setErrorMessage("Wrong credentials")
    } else {
      setErrorMessage(null)
      document.cookie = `Authorization=${response.token}; path=/; samesite=strict`;
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
      <h2>Register</h2>
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
						id="email-field"
						label="Email"
            type="email"
					/>
          <TextField
						required
						id="username-field"
						label="User name"
            type="text"
					/>
          <TextField
          id="password-field"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
				</div>
        <p>Already have an account? <Link to={'/auth/login'}>Login</Link></p>
				<Button variant="outlined" color='inherit' type='submit' onClick={handleSubmit}>Send</Button>
			</Box>
		</div>
	);
}

export default Register;