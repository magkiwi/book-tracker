<template>
  <div id = "app">
	  <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
	  Header
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#app {
	font-family: 'montserrat', 'sans-serif';
	background: linear-gradient(to bottom, #CF5C36, #7C7C7C)
}
</style>
