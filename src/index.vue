<template>
  <div class="wrapper">
    <!-- <text class="greeting">Hello world 2</text> -->

    <list>
      <refresh
        class="refresh"
        @refresh="onrefresh"
        @pullingdown="onpullingdown"
        :display="refreshShow"
      >
        <text class="indicator">refreshiii...</text>
      </refresh>
      <cell v-for="num in lists">
        <div class="panel">
          <text class="list-text">{{ num }}</text>
        </div>
      </cell>
      <loading class="loading" @loading="onloading" :display="showLoading">
        <text class="indicator">loadingiii...</text>
      </loading>
    </list>
  </div>
</template>

<style scoped>
.greeting {
  text-align: center;
  margin-top: 70px;
  font-size: 50px;
  color: #41b883;
}

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

.indicator {
  font-size: 42px;
  text-align: center;
}
</style>



<script>
import HelloWorld from "@/components/HelloWorld";

const modal = weex.requireModule("modal");

export default {
  name: "App",
  components: {
    HelloWorld,
  },

  data() {
    return {
      // vue的图标
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",
      lists: [1, 2, 3, 4, 5, 6],
      showLoading: "hide",
      refreshShow: "hide",
    };
  },
  methods: {
    fetch(event) {
      modal.toast({
        message: "load more",
        duration: 1,
      });

      setTimeout(() => {
        const length = this.lists.length;
        console.log("进入到了 定时函数当中");
        for (let i = length; i < length + 4; i++) {
          this.lists.push(i + 1);
        }
      }, 800);
    },
    onloading(event) {
      modal.toast({
        message: "loading",
        duration: 1,
      });
      this.showLoading = "show";
      setTimeout(() => {
        const length = this.lists.length;
        console.log("进入到了 loading 组件的定时函数中");
        for (let i = length; i < length + 4; i++) {
          this.lists.push(i + 1);
        }
        this.showLoading = "hide";
      }, 1500);
    },
    onrefresh(event) {
      modal.toast({
        message: "refreshing",
        duration: 1,
      });
      this.refreshShow = "show";
      setTimeout(() => {
        console.log("进入到了  onrefresh 组件的定时函数中");
        this.lists = [1, 2, 3, 4, 5, 6];
        this.refreshShow = "hide";
      }, 1500);
    },
    onpullingdown(event) {
      modal.toast({
        message: "on pulling down",
        duration: 1,
      });
    },
  },
};
</script>


