<template>
    <div class="body">
            <div class="browser">
                <h1> Books </h1>
                <router-link to="/books/add" class="icon"><fa class="icon-nav" icon="plus"/></router-link>
            </div>
            <div class="cards">
                <div v-for="book in books" :key="book.id" >
                 <Card :title="book.title" :author="book.author" 
                 :image="book.image || this.default_img" :year="book.year" :pages="book.pages" :category="book.category"/>        
            </div>
            </div>

    </div>
    
</template>

<script>

import BookService  from '../services/BookService';
import Card from './Card.vue';

export default {
    name: "Books",
    components: {
        Card
    },
    data() {
        return {
            books: [],
            default_img: "https://media.istockphoto.com/photos/school-picture-id1016131800?b=1&k=20&m=1016131800&s=170667a&w=0&h=imifkJTvS-4b8cvOhVNlCqqvZlwI4S-xCKZ6Oxbla4Q="
        }
    },
    async mounted () {
        const response =  await BookService.index()
        this.books = response.data
    }
}
</script>

<style scoped>

.body {
	display: flex;
    flex-direction: column;
	align-items: center;
    height: 100%;
}

.browser {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-self: start;
    width: 60%;
    background-color: #CF5C36;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10vh;
    box-shadow: 5px 20px 40px #000
}

.icon {
    text-decoration: none;
    color: white;
}

.cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
}
@media (max-width: 640px) {
    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
}

</style>