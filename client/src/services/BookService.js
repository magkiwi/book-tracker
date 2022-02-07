const axios = require('axios');

export default {
    index() {
        return axios.get('/api/books');
    },
    add_book(song){
        return axios.post('/api/books', song);
    }
}
