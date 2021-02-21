<template>
  <div class="list">
    <div class="group center">
      <text class="result"> {{ state }} </text>
    </div>

    <div class="group">
      <text class="text" @click="setItem">Set</text>
      <text class="text" @click="getItem">get</text>
      <text class="text" @click="removeItem">remove</text>
      <text class="text" @click="getAll">all</text>
    </div>
  </div>
</template>


<style scoped>
.group {
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  border-color: blue;
  border-width: 1px;
}

.text {
  width: 130px;
  height: 130px;
  line-height: 130px;
  font-size: 30px;
  text-align: center;
  border-color: red;
  border-width: 1px;
  margin: 10px;
}

.result{
  margin: 10px;
}
</style>


<script>
const modal = weex.requireModule("modal");
const storage = weex.requireModule("storage");
const count = 11;
const key = "key-" + count;
const value = "value-" + count;

function showToast(str){
  modal.toast({message:str, duration:3});
}

export default {
  name: "App",
  components: {},

  data() {
    return {
      state: "--",
    };
  },
  methods: {
    setItem() {
      storage.setItem(key, value, (event)=>{
        showToast("设置 " + event.result);
      })
    },
    getItem() {
        storage.getItem(key, (event)=>{
          showToast("获取 " + event.result +"\t 结果为=" + event.data);
        })
    },
    removeItem() {
        StorageManager.removeItem(key, (event)=>{
          showToast("移除 " + event.result);
        })
    },
    getAll() {

    },
  },
};
</script>


