<template>
  <div class="wrapper">
    <image class="testImage" resize="contain" src="https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png" />
    <text class="greeting">Hello world 2</text>

  <div>
    <video class="video" :src="src" autoplay controls 
      @start="onstart"
      @pause="onpause"
      @finish="onfinish"
      @fail="onfail"/>
      <text class="info"> state : {{ state }}</text>
  </div>

  </div>

</template>




<style scoped>
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }

  .testImage {
    width: 720px;
    height: 100px;
    background-color: red;
  }

  .video {
    width: 630px;
    height: 350px;
    margin-top: 40px;
    margin-left: 60px;
  }

  .info {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }

</style>



<script>
import HelloWorld from '@/components/HelloWorld'



var modal = weex.requireModule('modal');

export default {
  name: 'App',
  components: {
    HelloWorld,
  },

  data () {
    return {
      // vue的图标
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
      state: '---',
      src: 'http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4'
    }
  },

  methods: {
    onstart (event){
      this.state = "onstart"
    },
    onpause (event){
      this.state = "onpause"
    },
    onfinish (event){
      this.state = "onfinish"
    },
    onfail (event){
      this.state = "onfail"
    },
  }
}
</script>


