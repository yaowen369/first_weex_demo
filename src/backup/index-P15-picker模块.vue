<template>
  <div class="wrapper">
    <div class="group">
      <text class="label">index:</text>
      <text class="title">{{ value }}</text>
    </div>
    <div class="group">
      <text class="button" @click="pick">Pick</text>
    </div>

    <div class="group">
      <text class="label">Date:</text>
      <text class="title">{{ dateValue }}</text>
    </div>
    <div class="group">
      <text class="button" @click="pickDate"> Pick Date</text>
    </div>

    <div class="group">
      <text class="label">Time:</text>
      <text class="title">{{ timeValue }}</text>
    </div>
    <div class="group">
      <text class="button" @click="pickTime">Pick Time</text>
    </div>
  </div>
</template>


<script>
const modal = weex.requireModule("modal");
const picker = weex.requireModule("picker");

export default {
  name: "App",
  components: {},

  data() {
    return {
      value: "",
      dateValue: "",
      timeValue: "",
    };
  },
  methods: {
    pickDate() {
      picker.pickDate({}, (event) => {
        if (event.result === "success") {
          this.dateValue = event.data;
        } else {
          modal.toast({ message: event });
        }
      });
    },
    pickTime() {
      picker.pickTime({}, (event) => {
        if (event.result === "success") {
          this.timeValue = event.data;
        } else {
          modal.toast({ message: event });
        }
      });
    },
    pick() {
      picker.pick(
        {
          items: ["张三", "李四", "王五", "周六"],
        },
        (event) => {
          if (event.result === "success") {
            this.value = event.data;
          } else {
            modal.toast({ message: event });
          }
        }
      );
    },
  },
};
</script>

<style scoped>
.wrapper {
  justify-content: center;
  align-items: center;
}

.group {
  justify-content: center;
  margin-bottom: 40px;
  border-width: 1px;
  border-color: burlywood;
}

.label {
  font-size: 40px;
  color: #888888;
  border-color: greenyellow;
  border-width: 1px;
}

.title {
  font-size: 80px;
  color: #41b883;
}

.button {
  font-size: 36px;
  width: 280px;
  color: #41b883;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(162, 217, 192);
  background-color: rgba(162, 217, 192, 0.2);
}
</style>
