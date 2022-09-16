import axios from 'axios';

const newComment = async (comment, post_id) => {
  try {
    const token = document.cookie.split("=")[1];
    const {data} = await axios.post(
      `http://localhost:8080/posts/${post_id}/new-comment`,
      comment,
      {
        headers: { 
          Authorization: token
        }
      });
    return data;
  } catch (error) {
    console.log(`Error al realizar la peticion: POST: http://localhost:8080/posts/${post_id}/new-comment: ${error}`);
  }
}

export default newComment;