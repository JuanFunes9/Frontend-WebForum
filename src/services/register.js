import axios from 'axios';

const baseUrl = 'http://localhost:8080'

const login = async ({ email, username, password }) => {


  try {
    const { data } = await axios.post(
      `${baseUrl}/auth/register`,
      { email, username, password }
    )
    return data;

  } catch(error) {
    return false;
  }

}

export default login;