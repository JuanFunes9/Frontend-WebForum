import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//-------------Components-------------//
import NavBar from './components/NavBar';
import PostsGrid from './components/PostsGrid';
import NewPost from './components/NewPost';
import Post from './components/Post';
import Login from './components/Login';
import Register from './components/Register';

//-------------Settings-------------//
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

//-------------Session-------------//


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />

      <Routes>
        <Route path='/' element={ <PostsGrid /> }/>
        <Route path='/new-post' element={ <NewPost /> }/>
        <Route path='/posts/*' element={ <Post /> }/>
        <Route path='/auth/login' element={ <Login /> }/>
        <Route path='/auth/register' element={ <Register /> }/>
      </Routes>

    </ThemeProvider>
  </BrowserRouter>
);
