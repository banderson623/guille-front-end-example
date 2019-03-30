<template>
  <div>
    <h1>{{title}}</h1>
    <Entry v-for="(entry, index) in entries" :key="entry.id"
      :id=entry.id
      :title=entry.title
      :location=index
      :publishedOn=Date(entry.publishedOn)
      :byline="entry.byline"
      :imageUrl="entry.imageUrl"
    />
  </div>
</template>

<script>
import Entry from "./Entry.vue"

export default {
  name: 'Lane',
  props: {
    title: String,
    entries: {
      type: Array,
      default: () => {return []}
    }
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
