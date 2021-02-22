<template>
  <div class="wrapper">
    <text class="button" @click="jump">Go To Next page</text>
  </div>
</template>

<script>
const modal = weex.requireModule("modal");
const navigator = weex.requireModule("navigator");

export default {
  name: "App",
  components: {},

  data() {
    return {
      
    };
  },
  methods: {
    jump(event){
      console.log("will jump")
      navigator.push({
        url: './backup/lunbotu.js',
        animated: "true"
      }, event=>{
        modal.toast({
            message : "跳转成功",
          }
        )
      });
    }
  },
};
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }

  .button{
    width: 400px;
    border-width: 1px;
    font-size: 40px;
    padding: 10px;
    border-color: rgb(0, 0, 255);
    background-color: rgba(0, 0, 255, 0.2);
    text-align: center;
  }
</style>
