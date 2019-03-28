<template>
  <header class="main-header">
    <h1>Title Title</h1>
  </header>
</template>

<script>
export default {
  name: "main-header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-header {
  align-items: center;
  display: flex;
  justify-content: center;
  transition: 0.3s;
  min-height: 30vh;
  width: 100%;
  background-color: $purple;
  color: white;

  h1 {
    border-top: 2px solid $red;
    border-bottom: 2px solid $red;
    padding: 5px 15px;
  }
}
</style>
