<template>
  <div class="wrapper">
    <!-- <a
      class="button"
      href="http://192.168.3.3:8081/src/lunbotu.js"
    >
      <text class="text">跳转轮播图2</text>
    </a> -->
    <web src="https://www.cnblogs.com/yaoxiaowen" class="web" @pagestart="onstart" @pagefinish="onfinish" @error="onerror"/>
  </div>
</template>

<style scoped>
.wrapper {
  justify-content: center;
}

.web{
  margin-left: 75px;
  width: 600px;
  height: 750px;
  border-width: 2px;
  border-style: double;
  border-color: #41B883;
}

</style>

<script>
const modal = weex.requireModule("modal");

export default {
  name: "App",
  components: {},

  data() {
    return {
      
    };
  },
  methods: {
    onchange: function (index) {
      // modal.toast({message:index});
    },
    onstart(){
      modal.toast({message:'onstart() '});
    },
    onfinish:function(event){
      modal.toast({message:'onfinish() '});
    },
    onerror:function(event){

    }
  },
};
</script>