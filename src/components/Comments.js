import React, { useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import newComment from '../services/newComment';
import getComments from '../services/getComments';

const Comments = ({ comments, post_id }) => {

  const [renderComments, setRenderComments] = useState([])
  const [token, setToken] = useState(null)

  useEffect(() => {
    setToken(document.cookie)
    setRenderComments(comments)
  }, [comments])


  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const text = document.getElementById('outlined-multiline-flexible').value;
    if(!text) return false;

    const comment = {
      text
    }

    await newComment(comment, post_id)
    const newComments = await getComments(post_id);

    document.getElementById('outlined-multiline-flexible').value = '';
    setRenderComments(newComments.comments)
    
    const commentsCont = document.getElementById('comments-cont');
    commentsCont.scrollTop=commentsCont.scrollHeight;
  }


  return (
    <div className="post-comments">
      <div className="comments" id="comments-cont">
        {
          (renderComments)
            ?
            renderComments.map(comment => {
              return (
                <div className="comment" key={comment._id}>
                  <div className="comment-title-img-cont">
                    {
                      (comment.author.image)
                        ?
                        <img src={comment.author.image} alt='img' />
                        :
                        <img src='https://res.cloudinary.com/dxg8ulxz5/image/upload/v1662963457/original_jrmegv.jpg' alt='img' />
                    }
                  </div>
                  <div className="comment-title-body">
                    <div className="comment-title-name-cont">
                      <h4>@{comment.author.username}</h4>
                    </div>
                    <div className="comment-body">
                      {comment.text}
                    </div>
                  </div>
                </div>
              )
            })
            :
            <CircularProgress />
        }
      </div>
      <div className="new-comment">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { my: 1, width: '100%' },
          }}
          noValidate
          autoComplete="off"
        >

          {
            (!token)
              ?
              <>
                <Alert severity="warning">You have to be logged to comment!</Alert>
                <div>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Comment"
                    multiline
                    minRows={3}
                    maxRows={3}
                    disabled
                  />
                </div>
              </>
              : <>
                <div>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Comment"
                    multiline
                    minRows={3}
                    maxRows={3}
                    required
                  />
                </div>
                <Button variant="outlined" color='inherit' type='submit' onClick={handleSubmitComment}>Send</Button>
              </>
          }

        </Box>
      </div>
    </div>
  )
}

export default Comments;