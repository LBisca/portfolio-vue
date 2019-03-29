<template>
  <div class="text-box-wrapper" v-bind:class="side">
    <div class="text-box" v-bind:class="side">
      <h2>
        <strong>{{job}}</strong>
        &nbsp;&nbsp;@{{company}}
      </h2>
      <span>Jan 2013 - Dec 2018</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        In non quam lobortis,
      </p>
    </div>
    <!-- <div class="pointer" v-bind:class="side"></div> -->
  </div>
</template>

<script>
export default {
  props: {
    side: String,
    job: String,
    company: String,
    marginTop: Object
  }
};
</script>


<style lang="scss" scoped>
.text-box-wrapper {
  display: flex;
  position: relative;

  &.right {
    float: right;
    margin-right: 60px;
  }

  &.left {
    float: left;
    margin-left: 60px;
  }
}

.text-box {
  background: $purple;
  border-radius: 9px;
  max-height: 115px;
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

  &.left {
    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      clear: both;
      margin-left: -50px;
      border-top: 5px solid transparent;
      border-bottom: 30px solid transparent;
      border-right: 30px solid $purple;
    }
  }

  &.right {
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      clear: both;
      bottom: 20px;
      right: -28px;
      border-top: 30px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 30px solid $purple;
    }
  }
}
</style>
