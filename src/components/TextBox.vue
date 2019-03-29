<template>
  <div class="text-box-wrapper">
    <div class="text-box">
      <h2>
        <strong>Marketing Manager</strong>&nbsp;&nbsp;@teste
      </h2>
      <span>Jan 2013 - Dec 2018</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In non quam lobortis,
      </p>
    </div>
    <div class="pointer"></div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.text-box-wrapper {
  display: flex;
}

.text-box {
  background: $purple;
  border-radius: 9px;
  width: 315px;
  height: 115px;
  padding: 15px 20px;

  h2 {
    color: $light-text;
    font-weight: normal;
    font-size: 1em;
    margin-bottom: 5px;
  }

  span {
    color: $red;
    text-transform: uppercase;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  p {
    margin-top: 5px;
    color: $light-text;
    font-size: 0.9em;
  }
}

.pointer {
  height: 30px;
  margin-top: 60px;
  border-top: 30px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 38px solid $purple;
  border-right: 20px solid transparent;
}
</style>
