const axios = require('axios');

export default {
    register( cred ) {
    console.log('listening')
    console.log(cred)
    return axios.post('/api/register', cred);
    }
}
