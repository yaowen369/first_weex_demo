<template>
  <div class="wrapper">
    <div>
      <input class="textInput"  :autofocus=true type="text" placeholder="随便写点什么"/>
    </div>
    <text class="greeting">Hello world 2</text>
  </div>
</template>




<style scoped>
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }

  .textInput {
    height: 80px;
    padding: 10px;
    font-size: 32px;
    border-bottom-width: 1px;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>



<script>
import HelloWorld from '@/components/HelloWorld'

import topheader from './components/topheader'

var modal = weex.requireModule('modal');

export default {
  name: 'App',
  components: {
    HelloWorld,
    topheader
  },
  created() {
    console.log("页面初始化中 yaowen");
    modal.toast({
        message: '页面初始化succ2 ',
        duration: 3
    });
  },
  data () {
    return {
      // vue的图标
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>


