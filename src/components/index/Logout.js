import axios from 'axios';

const Logout = async (username) => {
    console.log("desde logout", username);
    try {
        const response = await axios.post('http://localhost:8800/logout');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error logout in:', error);
        throw error;
    }
};

export { Logout };