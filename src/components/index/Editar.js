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

const UpdateArbolFruto = async (tipofruto, forma, tamanio, colorfruto, IdArbol) => {
    console.log("desde editar.js ",IdArbol,' ', tipofruto,' ',forma,' ', tamanio, colorfruto);
    try {
        const response = await axios.post('http://localhost:8800/updateArbolFruto', { IdArbol,tipofruto,forma,tamanio, colorfruto});
        return response.data;
    } catch (error) {
        console.error('Error updating in:', error);
        throw error;
    }
};

const UpdateArbolHabitat = async (distribucion, clima, altitud, suelo, IdArbol) => {
    console.log("desde editar.js ",IdArbol,' ', distribucion,' ',clima,' ', altitud, suelo);
    try {
        const response = await axios.post('http://localhost:8800/updateArbolHabitat', { IdArbol,distribucion, clima, altitud, suelo});
        return response.data;
    } catch (error) {
        console.error('Error updating in:', error);
        throw error;
    }
};

const UpdateArbolHojas = async (tipohoja, longitud, follaje, IdArbol) => {
    console.log("desde editar.js ",tipohoja,' ', longitud,' ',follaje);
    try {
        const response = await axios.post('http://localhost:8800/updateArbolHojas', { IdArbol,tipohoja, longitud, follaje});
        return response.data;
    } catch (error) {
        console.error('Error updating in:', error);
        throw error;
    }
};

const UpdateArbolU = async (madera, forraje, medicinal, orna, IdArbol) => {
    console.log("desde editar.js ",madera,' ', forraje,' ',medicinal, ' ', orna);
    try {
        const response = await axios.post('http://localhost:8800/updateArbolU', { IdArbol,madera, forraje, medicinal, orna});
        return response.data;
    } catch (error) {
        console.error('Error updating in:', error);
        throw error;
    }
};


export { UpdateArbol, UpdateArbolE, UpdateArbolFlor,UpdateArbolFruto,UpdateArbolHabitat,UpdateArbolHojas, UpdateArbolU};
