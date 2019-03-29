<template>
  <div title="Navigation Menu">
    <div class="hamburger-menu" v-bind:class="{active: active}" v-on:click="toggleMenu">
      <span/>
      <span/>
      <span/>
    </div>

    <nav class="nav" v-bind:class="{active: active}">
      <div class="user-area"></div>
      <h1 style="display: none">Navigation</h1>
      <div class="navigation-list">
        <h2>
          <a href="#">Home</a>
        </h2>
        <h2>
          <a href>About me</a>
        </h2>
        <h2>
          <a href>Work Experience</a>
        </h2>
        <h2>
          <a href>Portfolio</a>
        </h2>
        <h2>
          <a href>Contacts</a>
        </h2>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navigation",
  props: {
    active: Boolean,
    toggleMenu: Function
  }
};
</script>



<style lang="scss" scoped>
.nav {
  background: $purple;
  height: 100%;
  left: -275px;
  position: fixed;
  top: 0;
  transition: 0.3s ease-in-out;
  width: 275px;

  a {
    color: white;
    font-weight: 400;
    text-decoration: none;
    transition: 0.3s color;

    &:hover {
      color: $red;
    }
  }

  &.active {
    left: 0px;
  }
}

.navigation-list {
  h2 {
    padding: 15px 0px 15px 30px;
    border-top: 1px solid $dark-blue;
    box-shadow: 0px 2px rgba(20, 20, 20, 0.2);
  }
  box-shadow: 0px 1px rgba(20, 20, 20, 0.4);
}

.user-area {
  background: linear-gradient(to bottom, $purple 0%, #37485f 50%, $purple 100%);
  height: 220px;
  width: 100%;
  /* background-image: url("../assets/images/Ricardo.jpg"); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.header-container {
  width: 100%;
  background-color: $purple;
  height: 60px;
}

.hamburger-menu {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 16px;
  justify-content: space-between;
  left: 15px;
  position: fixed;
  top: 15px;
  transform: scale(0.8);
  z-index: 2;

  @media screen and (min-width: $mobile) {
    height: 26px;
    left: 25px;
    top: 25px;
  }

  span {
    background-color: $red;
    display: block;
    height: 3px;
    transition: 0.3s;
    width: 26px;

    @media screen and (min-width: $mobile) {
      height: 4px;
      width: 44px;
    }
  }

  &.active {
    position: fixed;

    :nth-child(1) {
      transform: translateY(6px) rotate(45deg);

      @media screen and (min-width: $mobile) {
        transform: translateY(11px) rotate(45deg);
      }
    }

    :nth-child(2) {
      opacity: 0;
    }

    :nth-child(3) {
      transform: translateY(-7px) rotate(135deg);

      @media screen and (min-width: $mobile) {
        transform: translateY(-11px) rotate(135deg);
      }
    }
  }
}
</style>
