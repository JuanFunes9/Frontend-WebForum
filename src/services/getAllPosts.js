import axios from 'axios';

const getAllPosts = async () => {
    try {
        const { data } = await axios.get('http://localhost:8080/posts');
        return data;
    } catch (error) {
        console.log(`Error al realizar la peticion: GET: http://localhost:8080/posts: ${error}`);
    }
}

export default getAllPosts;