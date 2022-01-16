<template>
  <div id="app">
        <Header> </Header>
        <router-view> </router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

html,body {
  height: 100%;
  width:100%;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.grey-font {
    color:gray
}

</style>
