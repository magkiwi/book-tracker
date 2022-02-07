const axios = require('axios');

export default {
    register(cred) {
        return axios.post('/api/register', cred);
    },
    login (cred) {
        return axios.post('/api/login', cred);
    }
}
