<template>
  <div class="entry" v-bind:class="queue">
    <div class="image" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
    <div class="content">
      <span class="placement_status">{{placementBug}}</span>
      <p class="title">{{title}}</p>
      <p class="byline">{{byline}}</p>
      <p class="publied_date"> {{formattedDate}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  props: {
    id: Number,
    title: String,
    imageUrl: String,
    byline: String,
    publishedOn: Date,
    location: Number,
    queue: String
  },
  computed: {
    placementBug: function() {
      if(this.queue == 'unplaced'){
        return 'Not Placed';
      } else {
        return this.location == 0 ? 'Hero story' : `Slot ${this.location}`
      }
    },

    formattedDate: function() {
      const date = this.publishedOn;
      return `Published ${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`
    }
  }
}
</script>

<style scoped>
  .entry {
    border: 1px solid #ddd;
    padding: 0;
    margin: 10px;

    display: flex;
    position: relative;
  }
  .image {
    min-width: 100px;
    height: 100px;
    background-size:cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 10px;
    padding-right: 50px;
  }

  .placement_status {
    position: absolute;
    text-align: center;
    top: 5px;
    right: 5px;
    background-color: rgb(249, 29, 78);
    color: #fff;
    border-radius: 3px;
    padding: 3px 5px;
    font-size: 10pt;
  }

  .placed .placement_status {
    background-color: rgb(36, 210, 69);
  }

  p {
    margin: 0;
  }

  .title {
    font-weight: bold;
    font-size: 110%;
  }

  .byline {
    color: #444;
    font-size: 85%;
  }

  .publied_date {
    color: #999;
    font-size: 75%;
  }
</style>
