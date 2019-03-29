<template>
  <div class="time-line">
    <div v-for="(item, index) in itens">
      <div class="time-spot">
        <span></span>
      </div>
      <div v-if="index < itens.length - 1" class="line"></div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      itens: this.data
    };
  },
  props: {
    data: Array
  }
};
</script>


<style lang="scss" scoped>
.time-line {
  position: relative;
  width: 40px;
  margin-left: auto;
  margin-right: auto;
}

.time-spot {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 2px solid #000;
  position: relative;
  :nth-child(1) {
    width: 20px;
    height: 20px;
    position: absolute;
    left: calc(50% - 10px);
    top: calc(50% - 10px);
    border-radius: 100%;
    background-color: $red;
    border: 2px solid #000;
  }
}

.line {
  width: 2px;
  height: 160px;
  background-color: $purple;
  position: relative;
  margin-left: calc(50% - 1px);

  :last-of-type {
    display: none;
  }
}
</style>
