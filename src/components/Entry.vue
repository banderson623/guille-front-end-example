<template>
  <div class="entry">
    <div class="image" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
    <div class="content">
      <span class="placement_status">{{location}}</span>
      <p class="title">{{title}}</p>
      <p class="byline">{{byline}}</p>
      <p class="publied_date"> {{publishedOn}}</p>
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
    width: 100px;
    height: 100px;
    background-size:cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 10px;
    margin-top: 20px;
  }

  .placement_status {
    position: absolute;
    text-align: center;
    top: 5px;
    right: 5px;
    background-color: red;
    color: #fff;
    border-radius: 3px;
    padding: 3px 5px;
    font-size: 10pt;
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
