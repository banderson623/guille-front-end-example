<template>
  <div id="app">
    <Navigation/>
    <div class="content">
      <Lane title="Queue" queue="unplaced"/>
      <Lane title="Live On Page" queue="placed"/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Lane from './components/Lane.vue'

export default {
  name: 'app',
  beforeMount() {
    this.$store.dispatch('loadEntries');
  },
  components: {
    Navigation,
    Lane
  },
}
</script>

<style>
html {
  background-color: #eee;
}
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Helvetica, Arial, Sans-serif;
  padding: 0;
}
.content {
  display: flex;
  justify-content: center;
}

.content > div {
  width: 35%;
  margin: 10px;
}
</style>
