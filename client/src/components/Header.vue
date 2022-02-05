<template>
    <nav>
        <fa  class="icon-nav" icon="bars" />
        <fa class="icon-nav" icon="redo" />
    </nav>
</template>

<script>
export default {
   name: "Header"
}
</script>

<style>
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
}

nav .icon-nav {
    margin: 0 10px;
    cursor: pointer;
}
</style>