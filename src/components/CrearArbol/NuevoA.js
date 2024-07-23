import axios from 'axios';

const newArbol = async (arbol) => {
    console.log("desde NuevoA.js ", arbol);
    try {
        const response = await axios.post('http://localhost:8800/addarbol', { arbol });
        return response.data;
    } catch (error) {
        console.error('Error addarbol in:', error);
        throw error;
    }
};

export { newArbol };