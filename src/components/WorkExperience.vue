<template>
  <section class="work-experience">
    <h1>Work Experience</h1>
    <div class="underline"></div>

    <TextBox/>
    <TimeLine/>
  </section>
</template>

<script>
import TextBox from "./TextBox.vue";
import TimeLine from "./TimeLine.vue";

export default {
  components: {
    TextBox,
    TimeLine
  }
};
</script>


<style lang="scss" scoped>
.work-experience {
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
</style>

