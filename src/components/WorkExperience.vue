<template>
  <section class="work-experience">
    <h1>Work Experience</h1>
    <div class="underline"></div>
    <div class="work-wrapper">
      <div class="col1">
        <div v-for="(item, index) in data">
          <TextBox
            v-if="index % 2 !== 0"
            side="right"
            v-bind:job="item.job"
            v-bind:company="item.company"
          />
        </div>
      </div>
      <div class="col2">
        <TimeLine/>
      </div>
      <div class="col3">
        <div v-for="(item, index) in data" v-bind:key="`exp-${index}`">
          <TextBox
            v-if="index % 2 === 0"
            side="left"
            v-bind:job="item.job"
            v-bind:company="item.company"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextBox from "./TextBox.vue";
import TimeLine from "./TimeLine.vue";

export default {
  components: {
    TextBox,
    TimeLine
  },
  data() {
    return {
      data: [
        {
          job: "Front-end",
          company: "Hive",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius in mi vel posuere. Nulla id turpis convallis, feugiat quam pellentesque, pretium ipsum. Donec vel est sed quam semper convallis."
        },
        {
          job: "Front-end",
          company: "Padaria",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur varius in mi vel posuere. Nulla id turpis convallis, feugiat quam pellentesque, pretium ipsum. Donec vel est sed quam semper convallis."
        }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.work-experience {
  margin-top: 85px;
  padding-bottom: 100px;
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

.work-wrapper {
  display: flex;
}

.col1 {
  width: calc(50% - 20px);
}
.col2 {
  width: 40px;
}
.col3 {
  width: calc(50% - 20px);
}
</style>

