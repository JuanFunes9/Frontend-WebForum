import axios from 'axios';

const baseUrl = 'http://localhost:8080'

const login = async ({ email, password }) => {


  try {
    const { data } = await axios.post(
      `${baseUrl}/auth/login`,
      { email, password }
    )
    return data;

  } catch(error) {
    return false;
  }

}

export default login;