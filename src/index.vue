<template>
  <div class="wrapper">
    <a
      class="button"
      href="http://192.168.3.3:8081/src/lunbotu.js"
    >
      <text class="text">跳转轮播图2</text>
    </a>
  </div>
</template>

<style scoped>
.wrapper {
  justify-content: center;
}

.button {
  width: 450px;
  margin-top: 30px;
  margin-left: 150px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-width: 2px;
  border-style: groove;
  border-color: #dddddd;
  background-color: #f5f5f5;
}

.text {
  font-size: 60px;
  color: #666666;
  text-align: center;
}
</style>



<script>
const modal = weex.requireModule("modal");

export default {
  name: "App",
  components: {},

  data() {
    return {
      // vue的图标

      imageList: [
        {
          src:
            "https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg",
        },
        {
          src:
            "https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg",
        },
        {
          src:
            "https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg",
        },
      ],
    };
  },
  methods: {
    onchange: function (index) {
      // modal.toast({message:index});
    },
  },
};
</script>