<template>
  <div class="wrapper">
    <div ref="test" @click="move" class="box"></div>
  </div>
</template>


<script>
const modal = weex.requireModule("modal");
const animation = weex.requireModule("animation");

export default {
  name: "App",
  components: {},

  data() {
    return {};
  },
  methods: {
    move() {
      var testEl = this.$refs.test;
      animation.transition(
        testEl,
        {
          styles: {
            backgroundColor: "#FF0000",
            transform: "translate(250px, 100px)",
            transformOrigin: "center center",
          },
          duration: 2000,
          timingFunction: "ease",
          delay: 2000,
        },
        function () {
          modal.toast({ message: "animation finish." });
        }
      );
    },
  },
};
</script>

<style scoped>
.box {
  width: 250px;
  height: 250px;
  background-color: #ddd;
}
</style>
