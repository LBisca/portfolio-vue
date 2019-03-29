<template>
  <section class="about">
    <div class="about-flex">
      <div class="flex-item">
        <h1>About Me</h1>
        <div class="underline"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          In non quam lobortis, consequat purus ac, mollis turpis.
          Praesent et ullamcorper mauris, nec ornare purus.
        </p>

        <ul>
          <li>
            <strong>Name :&nbsp;</strong> Ricardo Milos
          </li>
          <li>
            <strong>Age :&nbsp;</strong> 300
          </li>
          <li>
            <strong>Email :&nbsp;</strong> ricardo_milos@gooogle.com
          </li>
          <li>
            <strong>Web :&nbsp;</strong> ricardomilos.com
          </li>
          <li>
            <strong>Address :&nbsp;</strong> Brasil
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
  height: 3px;
  margin-top: 5px;
  margin-bottom: 30px;
  background-color: $red;
}

.about-flex {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
}

.flex-item {
  flex: 1 1 0;

  &:nth-child(1) {
    max-width: 505px;
    padding-top: 40px;
    margin-right: 20px;
  }

  &:nth-child(2) {
    max-width: 500px;
    margin-left: 20px;
  }

  ul {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    border-bottom: 1px solid $light-grey;
    padding: 16px 0px;

    &:last-child {
      border-bottom: none;
    }
  }
}

.photo-container {
  width: 100%;
  height: 465px;
  max-width: 380px;
  min-height: 465px;
  background-color: $purple;
}
</style>

