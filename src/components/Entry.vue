<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Entry',
  props: {
    title: String,
    imageUrl: String,
    byLine: String,
    publisedDate: Date,
    placementIndex: Number,
  }
}
</script>

<style scoped>

</style>
