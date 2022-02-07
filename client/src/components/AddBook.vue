<template>
    <div  class="body">
        <form autocomplete="off" @submit.prevent>
            <h1>Add a book</h1>
  
            <div class="question">
                <input v-model="book.title" placeholder="Title" type="text" required/>
                <label>Title</label>
            </div>
            <div class="question">
                <input v-model="book.author" placeholder="Author" type="text" required/>
                <label>Author</label>
            </div>
            <div class="question">
                <input v-model="book.image" type="text" placeholder="Image"/>
                <label>Image</label>
            </div>
            <div class="question">
                <input v-model="book.year" type="number" min="0" placeholder="Year"/>
                <label>Year</label>
            </div>
            <div class="question">
                <input v-model="book.pages" type="number" min="0" placeholder="Pages"/>
                <label>Pages</label>
            </div>
            <div class="question">
                <input  v-model="book.category" type="text" placeholder="Category" required/>
                <label>Category</label>
            </div>
            <button @click="create">Add Book</button>
        </form>
    </div>
</template>

<script>
import BookService from '../services/BookService'

export default {
 name: "AddBook",
 data() {
     return {
        book: {
            title:  null,
            author: null,
            image: null,
            year: null,
            pages: null,
            category: null
            }
     }
 },
 methods: {
     async create() {
         if (!this.book.title || !this.book.author || !this.book.category) {
             return
         }
         
         try {
             await BookService.add_book(this.book)
              this.$router.push('/books')
         } catch (err) {
             console.log(err)
         }  
         
     }
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

form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80vw;
  min-width: 50vw;
  box-sizing: border-box;
    padding-bottom: 10px;
  background-color: white;
  border-radius: 40px;
}



h1{
    color: #CF5C36;
    font-weight: 100;
    letter-spacing: 0.01em;
    margin-left: 15px;
    margin-bottom: 25px;
    text-transform: uppercase;
    font-weight: bold;
}

  button{
    margin-top: 35px;
    background-color: white;
    border: 1px solid #CF5C36;
    line-height: 0;
    font-size: 17px;
    display: inline-block;
    box-sizing: border-box;
    padding: 20px 15px ;
    border-radius: 40px;
    color: #CF5C36;
    font-weight: 100;
    letter-spacing: 0.01em;
    position: relative;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(.53,.01,.35,1.5);
    }
    button:hover , button:focus{
      color: white;
      background-color: #CF5C36;
}
.question {
    position: relative;
    padding: 3px 3px;
    }

.question:first-of-type {
      padding-top: 0
      }
.question:last-of-type {
      padding-bottom: 0
    }

::placeholder {
  color: #CF5C36;
}


 label{
     display: none;
     transition: all 0.5s cubic-bezier(.53,.01,.35,1.5);
      transform-origin: left center;
      color: #CF5C36;
      font-weight: 100;
      letter-spacing: 0.01em;
      font-size: 17px;
      box-sizing: border-box;
      padding: 10px 15px;
      position: absolute;
      margin-top: -40px;
      z-index: 2;
      pointer-events: none;
}

   input {
       transition: all 0.5s cubic-bezier(.53,.01,.35,1.5);
      appearance: none;
      background-color: none;
      border: 1px solid #CF5C36;
      line-height: 0;
      font-size: 17px;
      width: 100%;
      display: block;
      box-sizing: border-box;
      padding: 10px 15px;
      border-radius: 30px;
      color: #CF5C36;
      font-weight: 100;
      letter-spacing: 0.01em;
      position: relative;
    }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

input:not(:placeholder-shown) {
    margin-top: 20px;
}

input:focus {
        outline: none;
        background: #CF5C36;
        color: white;
        margin-top: 20px;
    }

input:focus ~ label{
    display: block;
    transform: translate( 0 , -35px );
    color: #CF5C36;
}

input:not(:placeholder-shown) ~ label{
    text-transform: uppercase;
    display: block;
    font-style: italic;
    transform: translate( 5px , -35px ) scale(0.6);
}


</style>