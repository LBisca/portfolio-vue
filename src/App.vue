<template>
  <div id="app">
    <Nav v-bind:active="isMenuActive" v-bind:toggleMenu="toggleMenu"/>
    <div class="wrapper" v-bind:class="{active: isMenuActive}">
      <Header/>
      <div class="container" v-bind:class="{active: isMenuActive}">
        <About/>
        <WorkExperience/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import About from "./components/About.vue";
import WorkExperience from "./components/WorkExperience.vue";

export default {
  name: "app",
  components: {
    Header,
    Nav,
    About,
    WorkExperience
  },
  data() {
    return { isMenuActive: false };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    }
  }
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}

html,
body {
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  color: $default-text;
  overflow-x: hidden;
  background: #f1f2f4;
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

.wrapper {
  transition: 0.3s ease-in-out;
  &.active {
    margin-left: 275px;
    /* width: calc(100% - 275px); */
  }
}

.container {
  transition: 0.3s ease-in-out margin;
  margin-left: 110px;
  margin-right: 110px;
  margin-top: 80px;

  &.active {
    margin-left: 60px;
    margin-right: 60px;
  }
}
</style>
