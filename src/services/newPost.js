import axios from 'axios';
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzFiYTA0NTZjZGQ2NjlkM2E2Y2NhNWYiLCJpYXQiOjE2NjMwMTkxMTEsImV4cCI6MTY2MzAzMzUxMX0.2mLshhqluqaRps1Xw8-HfAt7xw1vEsT7bdtD1PVwBog";

const newPost = async (post) => {
  try {
    const data = await axios.post(
      `http://localhost:8080/posts`,
      post,
      {
        headers: { 
          Authorization: token,
          "Content-Type": "multipart/form-data"
        }
      });
      console.log(data)
    return data;
  } catch (error) {
    console.log(`Error al realizar la peticion: POST: http://localhost:8080/posts/: ${error}`);
  }
}

export default newPost;