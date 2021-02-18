<template>
  <div class="wrapper">
    <list>
      <cell v-for="num in lists">
        <div class="panel">
          <text class="list-text">{{ num }}</text>
        </div>
      </cell>
    </list>
  </div>
</template>

<style scoped>
.panel {
  width: 600px;
  height: 250px;
  margin-left: 75px;
  margin-top: 35px;
  margin-bottom: 35px;
  justify-content: center;
  text-align: center;
  border-color: red;
  border-width: 1px;
  background-color: rgba(162, 217, 192, 0.2);
}

.list-text {
  border-color: blue;
  border-width: 1px;
  text-align: center;
}
</style>



<script>
const modal = weex.requireModule("modal");
const stream = weex.requireModule("stream");

export default {
  name: "App",
  components: {
  },

  data() {
    return {
      // vue的图标

      lists: [],
    };
  },
  created() {
    let url = "https://autumnfish.cn/api/joke/list?num=3";

    console.log('进入 create() 方法');

    this.getNews(url, res=>{
      modal.toast({ message: '请求成功'});
      console.log(res);
      this.lists = res.data.jokes;
      console.log(res.data.jokes);
    });
  },

  methods: {
    getNews(myurl, callback) {
      console.log("进入 getNews 方法");

      return stream.fetch(
        {
          method: 'GET',
          type: 'json',
          url: myurl,
        },
        callback
      );
    },
  },
};
</script>