import axios from 'axios';

const base = 'http://localhost:4000';

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

function addUser(body) {
    return new Promise((resolve, reject)=>{
        axios.post(`${base}/user/create`, body).then(resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
            console.log("ghfjdkls")
        })
    })
}

export default {
    addUser,
}