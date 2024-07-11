import axios from 'axios';

const UpdateArbol = async (nombre, nombreCientifico, nombreComun, IdArbol) => {
    console.log("desde editar.js ",IdArbol,' ', nombre,' ',nombreCientifico,' ', nombreComun);
    try {
        const response = await axios.post('http://localhost:8800/updateArbol', { IdArbol,nombre,nombreCientifico,nombreComun});
        return response.data;
    } catch (error) {
        console.error('Error updating in:', error);
        throw error;
    }
};

export { UpdateArbol };
