<template>
    <div class="body">
        <div>
            <h3> Books </h3> 
            <div v-for="book in books" :key="book.id">
                {{book.title}}
                {{book.author}}
            </div>
        </div>
    </div>
    
</template>

<script>

import BookService  from '../services/BookService';
export default {
    name: "Books",
    data() {
        return {
            books: [
            ]
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
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}
</style>