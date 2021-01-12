<template>
  <div class="home">
    <!-- <h1 class="index-title">Mark Calculator</h1> -->
    <div id="calculator">
      <div class="showBoard">
        <div class="wrap">
          <div class="text">{{showNum}}</div>
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
        <div class="btn opBtn" @click="insertOp('equal')">
          <i class="fas fa-equals"></i>
        </div>
      </div>
      <div class="action-container">
        <div class="action">
          <i v-if="opClass!== ''" :class="`${opClass}`" class="fas"></i>
          <!-- <div class="text" v-else>{{nowOp}}</div> -->
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
    // showNum(oldVal,newVal){
    //   if(oldVal !== ""){
    //     this.showNum += oldVal
    //   }else{
    //     this.showNum = newVal
    //   }
    //   console.log(oldVal,'oldVal')
    //   console.log(newVal,'newVal')
    // }
  },
  methods: {
    insertNum(num) {
      const vm = this;
      console.log(num);
      vm.clickNum = num;
      if(vm.showNum === "0"){
        vm.showNum = vm.clickNum;
      }else{
        vm.showNum += vm.clickNum;
      }
    },
    insertOp(op) {
      const vm = this;
      switch (op) {
        case "plus":
          vm.opClass = "fa-plus";
          break;
        case "minus":
          vm.opClass = "fa-minus";
          break;
        case "times":
          vm.opClass = "fa-times";
          break;
        case "divide":
          vm.opClass = "fa-divide";
          break;
        case "ac":
          vm.opClass = "";
          vm.clickNum = ""
          vm.showNum = "0"
          vm.oldNum = ""
          vm.nowOp = "AC"
          break;

        default:
          break;
      }
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
      background: transparent;
      // background-image: linear-gradient(90deg,#fff 90%, #6cacc5);
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
        &.double {
          width: 160px;
        }
      }
    }
    .action-container {
      position: absolute;
      right: 10%;
      top: 10%;
      font-size: 100px;
      color: #f3ca6d;
    }
  }
}
</style>
