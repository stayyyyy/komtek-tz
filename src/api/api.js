import axios from 'axios';


const instance = axios.create({
    //withCredentials: true,
    baseURL: 'https://api_url...........', // предположим, что есть какой то rest api
    //"API-KEY": ,
});

export const patientAPI = {

    getPatients() { // получаем всем пациентов
        return instance.get(`patient/`)
            .then(response => response.data)
    },

    deletePatient(patientId) { // удаляем пациента
        return instance.delete(`patient/${patientId}`)
            .then(response => response.data)
    },

    savePatient(patient) {  // сохраняем пациента
        return instance.post(`patient/`, patient)
            .then(response => response.data)
    },

    updatePatient(patient) { // обновляем пациента
        return instance.put(`patient/`, patient)
        .then(response => response.data)
    },
};


export const consultationAPI = {

    getConsultations(patientId) { // получаем консультации пацаиента с id = patientId
        return instance.get(`consultation/${patientId}`)
            .then(response => response.data)
    },

    deleteConsultation(consultationId) { // удаляем консультацию
        return instance.delete(`patient/${consultationId}`)
            .then(response => response.data)
    },

    saveConsultation(consultation) { // сохраняем консультацию
        return instance.post(`patient/`, consultation)
            .then(response => response.data)
    },

    updateConsultation(consultation) { // обновляем консультацию
        return instance.put(`patient/`, consultation)
        .then(response => response.data)
    },
}

