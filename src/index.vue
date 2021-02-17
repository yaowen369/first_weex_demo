<template>
  <div class="wrapper">
    <topheader/>
    
    <text class="greeting">Hello world</text>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'

import topheader from './components/topheader'

export default {
  name: 'App',
  components: {
    HelloWorld,
    topheader
  },
  data () {
    return {
      // vue的图标
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    }
  }
}
</script>

<style scoped>
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
</style>
