<template>
    <nav>
        <fa  class="icon-nav" icon="bars" />
        <div class="right">
            
            <router-link to="/books" class = "browser">
                <fa class="icon-nav" icon="book"/>
                <p>Browse</p>
            </router-link>
            <div @click = "logout" class = "browser"  v-if = "$store.state.isLogged">
                <fa  class="icon-nav" icon="sign-out-alt" />
                <p>logout</p>
            </div>
            
        </div>

    </nav>
</template>

<script>
export default {
   name: "Header",
   methods: {
       logout() {
           this.$store.dispatch('setToken', null)
           this.$store.dispatch('setUser', null)
           this.$router.push('/')
       }
   }
}
</script>

<style>

.right {
    display: flex;
}

.browser {
    text-decoration: none;
    color: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: none;
    padding: 5px 10px;
    
}
.browser:hover {
    border: 1px  #fff
}
nav {
    position: fixed;
    top: 0;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 7vh;
    padding: 2px 16px;
    margin-bottom: 20px;
    background-color: rgba(34, 34, 34, 0.9);
    color: #fefefe;
    z-index: 100;
}

nav .icon-nav {
    margin: 0 10px;
    cursor: pointer;
}
</style>