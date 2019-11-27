import axios from 'axios';

const base = 'http://localhost:4000';

function addUser(body) {
    return new Promise((resolve, reject)=>{
        axios.post(`${base}/user/signup`, body).then(resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
            console.log("ghfjdkls")
        })
    })
}
function login(body) {
    return new Promise((resolve, reject)=>{
        axios.post(`${base}/user/login`, body).then(resp => {
            resolve(resp)
        }).catch(err => {
            reject(err)
        })
    })
}

export default {
    addUser,
    login
}