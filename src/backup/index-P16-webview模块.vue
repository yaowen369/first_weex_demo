<template>
  <div class="wrapper">
    <web
      ref="webview"
      style="
        width: 720px;
        height: 500px;
        border-width: 1px;
        border-color: red;
        border-style: solid;
      "
      src="https://cn.vuejs.org/"
      @pagestart="onpagestart"
      @pagefinish="onpagefinish"
      @error="onerror"
      @receivedtitle="onreceivedtitle"
    />

    <div class="row" style="margin-top: 40px">
      <text
        class="button"
        :class="[canGoBack ? 'btn-enable' : 'btn-disable']"
        @click="goBack"
        >←</text
      >
      <text
        class="button"
        :class="[canGoForward ? 'btn-eable' : 'btn-disable']"
        @click="goForward"
        >→</text
      >
      <text class="button btn-enable" @click="realod">reload</text>
    </div>

    <div style="margin-top: 30px">
      <text> pageStart:{{ pageStart }} </text>
      <text> pagefinish:{{ pagefinish }} </text>
      <text> error:{{ error }} </text>
      <text> title:{{ title }} </text>
    </div>
  </div>
</template>

<script>
const modal = weex.requireModule("modal");
const webview = weex.requireModule("webview");

export default {
  name: "App",
  components: {},

  data() {
    return {
      pageStart: "",
      pagefinish: "",
      error: "",
      title: "",
      canGoBack: false,
      canGoForward: false,
    };
  },
  methods: {
    onpagestart(e) {
      this.pageStart = e.url;
    },
    onpagefinish(e) {
      this.pagefinish = e.url;
      this.canGoBack = e.canGoBack;
      this.canGoForward = e.canGoForward;
      if (e.title) {
        tihs.title = e.title;
      }
    },
    onerror() {},
    onreceivedtitle() {},
    goBack() {
      webview.goBack(this.$refs.webview);
    },
    goForward() {
      webview.goForward(this.$refs.webview);
    },
    reload() {
      webview.reload(this.$refs.webview);
    },
  },
};
</script>

<style scoped>
.wrapper {
  padding: 10px;
}

.row {
  flex-direction: row;
  justify-content: space-between;
}

.button {
  width: 150px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: red;
  border-width: 1px;
  border-style: solid;
  background-color: rgb(6, 6, 109);
  color: white;
}

.btn-enable {
  opacity: 1;
}

.btn-disable {
  opacity: 0.2;
}
</style>
