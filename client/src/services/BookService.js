const axios = require('axios');

function isImgLink(url) {
    if(typeof url !== 'string') return false;
    return(url.match(/^http.*\.(jpeg|jpg|gif|png)$/) != null);
}

export default {
    index() {
        return axios.get('/api/books');
    },
    add_book(book){

        const ifLink = isImgLink(book.image)
        if (!(ifLink)) {
            book.image = ''
        }
        console.log(book)
        // return axios.post('/api/books', book);
    }
}
