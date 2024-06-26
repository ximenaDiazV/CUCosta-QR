import axios from 'axios';

const login = async (username, password) => {
    console.log("desde auth ", username);
    try {
        const response = await axios.post('http://localhost:8800/conect', { username, password });
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export { login };
