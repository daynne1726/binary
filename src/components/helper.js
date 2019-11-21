import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

//action for Users
// export function getPatients() {
//     return axios.get(`${BASE_URL}/patient/retrieve`)
//         .then(response => response.data)
// }

// export function deletePatients(id) {
//     return axios.post(`${BASE_URL}/patient/delete/${id}`)
//         .then(response => response.data)
//         .catch(err => Promise.reject(err.message));
// }

export function addUser(data) {
    return axios.post(`${BASE_URL}/user/signup`,
     { fname: data.fname,
     lname: data.lname,
     gender:   data.gender,
     username: data.username,
     email: data.email,
     password: data.password
     
    })
        .then(response => {
            return response.data
        })
        .catch(err => Promise.reject(err.message))
}

// export function updatePatients(data, id) {
//     return axios.post(`${BASE_URL}/patient/update/${id}`, { data })
//         .then(response => {
//             return response.data
//         })
//         .catch(err => Promise.reject(err.message))
// }

// //action for RECORDS
// export function getRecords() {
//     return axios.get(`${BASE_URL}/record/retrieve`)
//         .then(response => response.data)
// }

// export function deleteRecords(id) {
//     return axios.post(`${BASE_URL}/record/delete/${id}`)
//         .then(response => response.data)
//         .catch(err => Promise.reject(err.message))
// }

// export function createRecords(data){
//     return axios.post(`${BASE_URL}/record/create`, {
//         title: data.title,
//         findings: data.findings,
//         date: data.date   
//     })
//     .then(response => {
//         return response.data
//     })
//     .catch (err => Promise.reject(err.message))
// }
// export function updateRecords(data, id){
//     return axios.post(`${BASE_URL}/record/update/${id}`, {data})
//     .then(response => {
//         return response.data
//     })
//     .catch(err=> Promise.reject(err.message))
// }