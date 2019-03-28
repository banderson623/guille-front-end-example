<template>
  <nav>
    <button>Reset</button>
    <button>Save changes</button>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    msg: String
  }
}
</script>

<style scoped>
nav {
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  padding: 10px 20px;
  margin-top: 0;

  display: flex;
  justify-content: flex-end;
}
button {
  margin-left: 10px;
}
</style>
