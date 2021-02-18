<template>
  <div class="wrapper">
    <slider class="slider" interval="3000" auto-play="true" @change="onchange">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<style scoped>
.image {
  width: 700px;
  height: 700px;
}

.slider {
  margin-top: 25px;
  margin-left: 25px;
  width: 700px;
  height: 700px;
  border-width: 2px;
  border-style: solid;
  border-color: #41b883;
}

.frame {
  width: 700px;
  height: 700px;
  position: relative;
}

.indicator {
  height: 700px;
  width: 700px;
  item-color: white;
  item-selected-color: red;
  item-size: 20px;
  position: absolute;
  top: 300px;
  left: 0px;
  background-color: blue;
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