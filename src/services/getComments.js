import axios from 'axios';

const getComments = async (post_id) => {
  try {
    const {data} = await axios.get(`http://localhost:8080/posts/${post_id}`);
    return data.post;
  } catch (error) {
    console.log(`Error al realizar la peticion: GET: http://localhost:8080/posts/${post_id}: ${error}`);
  }
}

export default getComments;