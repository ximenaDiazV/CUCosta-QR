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

const UpdateArbolE = async (familia, altura, diametro, copa, corteza, IdArbol) => {
    console.log("desde editar.js ",IdArbol,' ', familia,' ',altura,' ', diametro,' ',copa,' ', corteza);
    try {
        const response = await axios.post('http://localhost:8800/updateArbolE', { IdArbol,familia,altura,diametro,copa,corteza});
        return response.data;
    } catch (error) {
        console.error('Error updating in:', error);
        throw error;
    }
};

const UpdateArbolFlor = async (colorflor, tipoflor, epoca, IdArbol) => {
    console.log("desde editar.js ",IdArbol,' ', colorflor,' ',tipoflor,' ', epoca);
    try {
        const response = await axios.post('http://localhost:8800/updateArbolFlor', { IdArbol,colorflor,tipoflor,epoca});
        return response.data;
    } catch (error) {
        console.error('Error updating in:', error);
        throw error;
    }
};


export { UpdateArbol, UpdateArbolE, UpdateArbolFlor };
