import { React, useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';

//----------------------------------components---------------------------------//
import Comments from './Comments';

//----------------------------------helpers---------------------------------//
import getPost from '../services/getPost';

const Post = () => {

  const [post, setPost] = useState({});

  const post_id = window.location.href.split("/")[4];

  useEffect(() => {
    getPost(post_id)
      .then((post) => setPost(post))

  }, [post_id])

  let username;
  if (!post.author) {
    username = "username"
  } else {
    username = post.author.username;
  }

  return (
    <div className="post">
      {
        (!post)
          ?
          <CircularProgress />
          :
          <>
            <div className="post-main">
              <div className="first-bar">
                <div>@{username}</div>
                <div className="post-icons">
                  <span className="material-icons">
                    flag
                  </span>
                  <span className="material-icons">
                    bookmark
                  </span>
                  <span className="material-icons">
                    push_pin
                  </span>
                </div>
                <div>Creado hace: 1 hora</div>
              </div>
              <div className="main-bar">
                <div className="main-bar-img-cont">
                  <img src={post.img} alt='img' />
                </div>
                <div className="main-bar-text-cont" >
                  <div className="title" >
                    <h1>{post.title}</h1>
                  </div>
                  <div className="text">
                    <p>{post.text}</p>
                  </div>

                </div>
              </div>
            </div>
            <Comments comments={post.comments} post_id={post._id} />
          </>

      }

    </div>
  )

}

export default Post;


