<template>
  <scroller class="holder">
    <div class="btn" @click="handleClick">
      <text class="btn-text">click</text>
    </div>

    <div class="btn"  @longpress="handleLongPress">
      <text class="btn-text">longpress</text>
    </div>

    <div class="btn block"
      @appear="(e) => {handleAppear(e, 'block1');}"
      @disappear="(e) => { handleDisappear(e, 'block1'); }"
      >
        <text class="btn-text">block1</text>
      </div>

    <div class="btn block"
      @appear="(e) => {handleAppear(e, 'block2'); }"
      @disappear="(e) => {handleDisappear(e, 'block2')}"
      >
      <text text="btn-class">block2</text>
    </div>

  </scroller>
</template>

<style scoped>
  .holder {
    padding: 20px;
  }

  .btn{
    padding: 20px;
    background-color: #0088fb;
    margin-bottom: 20px;
  }

  .btn-text {
    color: #fff;
  }

  .block {
    height: 1500px;
  }
</style>

<script>
const modal = weex.requireModule("modal");

const toast = message => {
  modal.toast({
    message,
    duration: 1,
  });
}

export default {
  name: "App",
  components: {},

  data() {
    return {};
  },
  methods: {
    handleClick(e){
      toast(e.timestamp + " :click");
    },
    handleLongPress(e){
      toast(e.timestamp + " : long click");
    },
    handleAppear(e, id){
        toast(`
          ${e.timestamp}
          ${id} appear
          ${e.direction}
        `);
    },
    handleDisappear(e, id){
      toast(`
        ${e.timestamp}
        ${id} disappear
        ${e.direction}
      `);
    }
  },
};
</script>