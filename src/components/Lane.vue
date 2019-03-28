<template>
  <div>
    <h1>{{title}}</h1>
    <Entry />
  </div>
</template>

<script>
import Entry from "./Entry.vue"

export default {
  name: 'Lane',
  props: {
    title: String
  },
  components: {
    Entry
  }
}
</script>

<style scoped>
  div {
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
  }

  h1 {
    font-size: 14pt;
    margin: 0;
  }
</style>
