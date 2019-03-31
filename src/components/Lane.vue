<template>
  <div class="container" v-bind:class="{'empty-lane': entries.length == 0}">
    <h1>{{title}}</h1>
    <Draggable v-model='entries' group="entries">
      <Entry v-for="(entry, index) in entries" :key="entry.id"
        :id=entry.id
        :title=entry.title
        :location=index
        :publishedOn=entry.publishedOn
        :byline="entry.byline"
        :imageUrl="entry.imageUrl"
        :queue="queue"
      />
    </Draggable>
  </div>
</template>

<script>
import Entry from "./Entry.vue"
import Draggable from 'vuedraggable'

export default {
  name: 'Lane',
  props: {
    title: String,
    queue: String,
  },
  components: {
    Entry,
    Draggable
  },
  computed: {
    entries: {
      get() {
        return this.$store.state.Entries[this.queue];
      },
      set(entries) {
        this.$store.commit('setEntries', {q:this.queue, entries:entries})
      }
    }
  }
}
</script>

<style scoped>
  .container {
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 10px;
    position: relative;
  }

  .container.empty-lane > div {
    margin-top: 10px;
    min-height: 100px;
    border-radius: 10px;
    border: 2px dashed #eee;
    padding: 0;
  }

  h1 {
    font-size: 14pt;
    margin: 0;
    padding: 0 10px;
  }
</style>
