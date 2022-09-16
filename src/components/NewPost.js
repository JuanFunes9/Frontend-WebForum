import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';

//----------------------------------helpers---------------------------------//
import newPost from '../services/newPost';

const NewPost = () => {

	const [categorie, setCategorie] = useState('');
	const [errorMessage, setErrorMessage] = useState(null)

	useEffect(() => {
		if(!document.cookie){
			setErrorMessage("You have to be logged to make a new post!")
		}
	}, [])
	


	const handleChange = (event) => {
		setCategorie(event.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const post = {
			title: document.getElementById('outlined-required').value,
			categorie,
			text: document.getElementById('outlined-multiline-flexible').value,
			img: document.getElementById('formFile').value
		}
		console.log(post)
		const data = await newPost(post)

		console.log(data)

	}

	const handleErrorMessage = () => {
    if(errorMessage){
      return <Alert severity="warning">{errorMessage}</Alert>
    }
  }

	return (
		<div className="new-post-form-cont">
			<Box
				component="form"
				sx={{
					'& .MuiTextField-root': { my: 1, mt: 2, width: '100%' },
				}}
				noValidate
				autoComplete="off"
				encType='multipart/form-data'
			>
				{ handleErrorMessage() }
				<div>
					<TextField
						required
						id="outlined-required"
						label="Title"
						defaultValue="Hello World"
					/>
					<FormControl fullWidth >
						<InputLabel id="demo-simple-select-label">
							<div className="categorie-label">
								Categorie
							</div>
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={categorie}
							label="Categorie"
							onChange={handleChange}
						>
							<MenuItem value={'tech'}>Tech</MenuItem>
							<MenuItem value={'sports'}>Sports</MenuItem>
							<MenuItem value={'economy'}>Economy</MenuItem>
							<MenuItem value={'international'}>International</MenuItem>
							<MenuItem value={'biology'}>Biology</MenuItem>
							<MenuItem value={'cience'}>Cience</MenuItem>
							<MenuItem value={'memes'}>Memes</MenuItem>
						</Select>
					</FormControl>
					<TextField
						id="outlined-multiline-flexible"
						label="Text"
						multiline
						minRows={10}
						maxRows={12}
					/>
					<div className="upload-file-cont">
						<input className="form-control form-control-lg" type="file" id="formFile" name="img"/>
					</div>
				</div>
				{
					(!errorMessage)
					? <Button variant="outlined" color='inherit' type='submit' onClick={handleSubmit}>Send</Button>
					: <Button variant="outlined" color='inherit' disabled>Send</Button>
				}
			</Box>
		</div>
	);
}

export default NewPost;