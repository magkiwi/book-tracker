const axios = require('axios');

export default {
    index() {
        console.log('trying my bese')
        return axios.get('/api/books');
    }
}
