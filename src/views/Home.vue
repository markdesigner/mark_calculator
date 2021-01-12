<template>
  <div class="home">
    <!-- <h1 class="index-title">Mark Calculator</h1> -->
    <div id="calculator">
      <div class="showBoard">
        <div class="wrap">
          <div class="text" v-if="result!=='' ">{{result}}</div>
          <div class="text" v-else>{{showNum}}</div>
        </div>
        <div class="action-container">
          <transition name="magnify">
            <div class="action">
              <i v-if="opClass!== ''" :class="`${opClass}`" class="fas"></i>
              <!-- <div class="text" v-else>{{nowOp}}</div> -->
            </div>
          </transition>
        </div>
      </div>
      <div class="button-container">
        <!-- <div class="numBtn" @click="insertNum(num)" v-for="
        (num,num_index) in 9" :key="num_index">{{num}}</div>-->
        <div class="btn double" @click="insertOp('ac')">AC</div>
        <div class="btn" @click="insertOp('reverse')">+/-</div>
        <div class="btn opBtn" @click="insertOp('divide')">
          <i class="fas fa-divide"></i>
        </div>

        <div class="btn" @click="insertNum('7')">7</div>
        <div class="btn" @click="insertNum('8')">8</div>
        <div class="btn" @click="insertNum('9')">9</div>
        <div class="btn opBtn" @click="insertOp('times')">
          <i class="fas fa-times"></i>
        </div>

        <div class="btn" @click="insertNum('4')">4</div>
        <div class="btn" @click="insertNum('5')">5</div>
        <div class="btn" @click="insertNum('6')">6</div>
        <div class="btn opBtn" @click="insertOp('minus')">
          <i class="fas fa-minus"></i>
        </div>

        <div class="btn" @click="insertNum('1')">1</div>
        <div class="btn" @click="insertNum('2')">2</div>
        <div class="btn" @click="insertNum('3')">3</div>
        <div class="btn opBtn" @click="insertOp('plus')">
          <i class="fas fa-plus"></i>
        </div>

        <div class="btn double" @click="insertNum('0')">0</div>
        <div class="btn" @click="insertOp('dot')">.</div>
        <div class="btn opBtn" @click="equal()">
          <i class="fas fa-equals"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      result: "",
      showNum: "0",
      clickNum: "",
      oldNum: "",
      nowOp: "",
      opClass: ""
    };
  },
  // computed: {
  //   num() {
  //     return
  //     // if (this.oldNum === "") {
  //     //   console.log('123')
  //     //   this.oldNum = this.clickNum;
  //     //   return this.clickNum;
  //     // } else if (this.oldNum !== "" && this.clickNum !== "") {
  //     //   console.log('456')
  //     //   return (this.oldNum += this.clickNum);
  //     // }
  //   }
  // },
  watch: {
    result(oldVal, newVal) {
      const vm = this
      if (isFinite(newVal)) {
        alert("數字不能除以零喔")
        vm.initData()
      }
      console.log(oldVal, "oldVal");
      console.log(newVal, "newVal");
    }
  },
  mounted(){
    vuecp = this
  },
  methods: {
    insertNum(num) {
      const vm = this;
      console.log(num);
      vm.clickNum = num;
      if (vm.showNum === "0") {
        vm.showNum = vm.clickNum;
      } else {
        if (vm.oldNum !== "" && vm.nowOp !== "") {
          //有按下運算子
          if (vm.showNum === "") {
            vm.showNum = vm.clickNum;
          } else {
            vm.showNum += vm.clickNum;
          }
        } else {
          //只按數字
          vm.showNum += vm.clickNum;
        }
      }
    },
    insertOp(op) {
      const vm = this;
      // vm.opClass = ""
      vm.oldNum = vm.showNum;
      vm.showNum = "";
      switch (op) {
        case "plus":
          vm.nowOp = "plus";
          vm.opClass = "fa-plus";
          break;
        case "minus":
          vm.nowOp = "minus";
          vm.opClass = "fa-minus";
          break;
        case "times":
          vm.nowOp = "times";
          vm.opClass = "fa-times";
          break;
        case "divide":
          vm.nowOp = "divide";
          vm.opClass = "fa-divide";
          break;
        case "ac":
          break;
          vm.initData()
        default:
          break;
      }
    },
    equal() {
      const vm = this;
      if (vm.nowOp !== "" && vm.oldNum !== "") {
        switch (vm.nowOp) {
          case "plus":
            vm.result = Number(vm.showNum) + Number(vm.oldNum);
            break;
          case "minus":
            vm.result = Number(vm.oldNum) - Number(vm.showNum);
            break;
          case "times":
            vm.result = Number(vm.oldNum) * Number(vm.showNum);
            break;
          case "divide":
            vm.result = Number(vm.oldNum) / Number(vm.showNum);
            break;
          default:
            break;
        }
      }
    },
    initData() {
      const vm = this;
      vm.opClass = "";
      vm.clickNum = "";
      vm.showNum = "0";
      vm.oldNum = "";
      vm.nowOp = "AC";
      vm.result = "";
    }
  }
};
</script>
<style lang="scss" scoped>
$textRed: #c97874;
$mainBG: #6cacc5;
$h1: 30px;
.home {
  background-image: linear-gradient(#261226, #6cacc5);
  color: #6cacc5;
  height: 100vh;
  position: relative;
  .index-title {
    color: $textRed;
  }
  #calculator {
    .showBoard {
      position: relative;
      background: transparent;
      width: 320px;
      height: 100px;
      margin: auto;
      line-height: 100px;
      border-bottom: rgba(255, 255, 255, 0.6) 1px solid;
      border-bottom-style: dotted;
      font-size: 44px;
      color: $textRed;
      margin-bottom: 10px;
      text-align: right;
    }
    .button-container {
      max-width: 720px;
      width: 400px;
      margin: 0 auto;
      text-align: center;
      .btn {
        color: white;
        font-weight: 600;
        font-size: $h1;
        background-color: rgba(255, 255, 255, 0.2);
        width: 70px;
        height: 70px;
        display: inline-block;
        margin: 10px;
        line-height: 70px;
        text-align: center;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
          background-color: #2c5d43de;
        }
        &.double {
          width: 160px;
        }
      }
    }
    .action-container {
      position: absolute;
      right: -90px;
      top: 2px;
      font-size: 60px;
      color: #f3ca6d;
      .action {
        animation: magnify 0.3s linear;
      }
    }
  }
}
.magnify-enter, .magnify-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(0px);
  transform: scale(1);
}
.magnify-enter-active,
.magnify-leave-active {
  transform: translateX(-10px);
  transform: scale(1.5);
}

@keyframes magnify {
  0% {
    transform: translateX(-10px);
    transform: scale(1.5);
  }
  100% {
    transform: translateX(0px);
    transform: scale(1);
  }
}
</style>
