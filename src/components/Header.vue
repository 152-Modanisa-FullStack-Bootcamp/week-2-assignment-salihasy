<template>
    <div class="header">
        <router-link to="/favorites/bootcamp" class="favorites-button" tag="button"> Favorites </router-link>
    </div>
</template>

<script>

export default {
    name:"Header"
}
</script>

<style>

.header {
  background-color: grey;
  height: 7vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1vh 4vh;
}

.favorites-button {
  width: 200px;
}


</style>
