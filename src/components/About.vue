<template>
  <section class="about">
    <div class="about-flex">
      <div class="flex-item">
        <h1>About Me</h1>
        <div class="underline"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In non quam lobortis, consequat purus ac, mollis turpis.
          Praesent et ullamcorper mauris, nec ornare purus. Aenean vel laoreet odio.
          Curabitur justo leo, lacinia eu odio sit amet, aliquet maximus est.
          Praesent sed luctus magna. Aenean ut maximus sapien, quis vehicula enim.
        </p>

        <ul>
          <li>
            <strong>Name :&nbsp;</strong>
          </li>
          <li>
            <strong>Age :&nbsp;</strong>
          </li>
          <li>
            <strong>Email :&nbsp;</strong>
          </li>
          <li>
            <strong>Web :&nbsp;</strong>
          </li>
          <li>
            <strong>Address :&nbsp;</strong>
          </li>
        </ul>
      </div>
      <div class="flex-item">
        <div class="photo-container">
          <img src alt="photo">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
.about {
  h1 {
    font-size: 1.5em;
    font-weight: 700;
  }
}

.underline {
  width: 60px;
  height: 2px;
  margin-top: 10px;
  margin-bottom: 30px;
  background-color: $red;
}

.about-flex {
  display: flex;
  flex-direction: row;
}

.flex-item {
  flex: 1 1 0;

  &:nth-child(1) {
    padding-top: 40px;
  }

  ul {
    background-color: $list-background;
  }

  li {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid $light-grey;

    &:last-child {
      border-bottom: none;
    }
  }
}

.photo-container {
  height: 465px;
  min-height: 465px;
  background-color: $purple;
  margin: 0px 50px 50px;
}
</style>

