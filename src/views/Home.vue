<template>
  <div class="home">
    <div id="calculator">
      <div class="showBoard">
        <div class="wrap" id="result">
          <div class="text" v-if="showAnswer">{{result}}</div>
          <div class="text" v-else-if="showNum !== ''">{{showNum}}</div>
          <div class="text" v-else>{{oldNum}}</div>
        </div>
        <div class="action-container">
          <transition name="magnify">
            <div class="action">
              <i v-if="opClass!== ''" :class="`${opClass}`" class="fas"></i>
            </div>
          </transition>
        </div>
      </div>
      <div class="button-container">
        <!-- <div class="numBtn" @click="insertNum(num)" v-for="
        (num,num_index) in 9" :key="num_index">{{num}}</div>-->
        <div id="ac" class="btn double" @click="initData()">AC</div>
        <div id="reverse" class="btn" @click="reverse()">+/-</div>
        <div id="divide" class="btn opBtn" @click="insertOp('divide')">
          <i class="fas fa-divide"></i>
        </div>

        <div id="7" class="btn" @click="insertNum('7')">7</div>
        <div id="8" class="btn" @click="insertNum('8')">8</div>
        <div id="9"  class="btn" @click="insertNum('9')">9</div>
        <div id="times" class="btn opBtn" @click="insertOp('times')">
          <i class="fas fa-times"></i>
        </div>
 
        <div id="4" class="btn" @click="insertNum('4')">4</div>
        <div id="5" class="btn" @click="insertNum('5')">5</div>
        <div id="6" class="btn" @click="insertNum('6')">6</div>
        <div id="minus" class="btn opBtn" @click="insertOp('minus')">
          <i class="fas fa-minus"></i>
        </div>

        <div id="1" class="btn" @click="insertNum('1')">1</div>
        <div id="2" class="btn" @click="insertNum('2')">2</div>
        <div id="3" class="btn" @click="insertNum('3')">3</div>
        <div id="plus" class="btn opBtn" @click="insertOp('plus')">
          <i class="fas fa-plus"></i>
        </div>

        <div id="0" class="btn double" @click="insertNum('0')">0</div>
        <div id="dot" class="btn" @click="floatNum()">.</div>
        <div id="equal" class="btn opBtn" @click="showAnswer = true">
          <i class="fas fa-equals"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      result: "",
      showNum: "0",
      clickNum: "",
      oldNum: "",
      nowOp: "",
      opClass: "",
      showAnswer:false,
    };
  },
  mounted(){
  },
  methods: {
    insertNum(clickNum) {
      const vm = this;
      vm.showAnswer = false
        if ((vm.showNum === "0" || vm.showNum === "") && vm.nowOp === "") {
          vm.showNum = clickNum;
        } else {
          if (vm.oldNum !== "" && vm.nowOp !== "") {
            //有按下運算子
            if (vm.showNum === "") {
              vm.showNum = clickNum;
            } else {
              vm.showNum += clickNum;
            }
            vm.equal()
          } else {
            //只按數字
            if(vm.showNum === "0"){
               vm.showNum = clickNum;
            }else{
              vm.showNum += clickNum;
            }
          }
        }
    },
    insertOp(op) {
      const vm = this;
      vm.showAnswer = false
      if(vm.result!==""){
        vm.oldNum = vm.result
      }else if(vm.showNum !== "" && vm.showNum !== 0 && vm.showNum !== '0'){
        vm.oldNum = vm.showNum;
      }else{
        return false
      }
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
    reverse(){
      const vm = this
      if(vm.showNum !== NaN && vm.showNum !== Infinity && vm.showNum !== "" ){
        if(parseInt(vm.showNum) >= 0 ){
          vm.showNum = '-' + vm.showNum.toString() 
        }else{
          vm.showNum = vm.showNum.toString().replace(/-/g,'')
        }
      }
      vm.equal()

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
        //答案的檢查
        if(!isFinite(vm.result)){
          //可能是非數字的字串 或是 Infinity
          if(isNaN(vm.result)){
            // 是非數字的字串
          }else{
            // 是Infinity
            vm.initData()
            alert("數字不能除以零喔")
          }
        }else{
          //是正常數字
          vm.result =  vm.result.toString().substr(0,10)
          // let splitArr = vm.result.toString().split('.')
          // if(splitArr.length>1){
          //   //有小數點
          //   vm.result = `${splitArr[0]}.${Math.round(splitArr[1].substr(0,(9 - splitArr[0].length + 1)) /10)}`
          // }else{
          //   //沒小數點
          //   vm.result = Math.round(vm.result.toString().substr(0,10)/10)
          // }
        }
      }
    },
    initData() {
      const vm = this;
      console.log('initData')
      vm.opClass = "";
      vm.clickNum = "";
      vm.showNum = "0";
      vm.oldNum = "";
      vm.nowOp = "AC";
      vm.result = "";
      vm.showAnswer = false;
    },
    floatNum(){
      const vm = this
      if(vm.result !=="" && vm.showAnswer === true){
        //答案不為零則清空並加上小數點
        vm.initData()
        vm.result = "0."
      }else{
        //一般情況按小數點，需把現在的數字加上小數點
        vm.showNum += '.'
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
      position: relative;
      background: transparent;
      width: 320px;
      height: 100px;
      margin: auto;
      line-height: 100px;
      border-bottom: rgba(255, 255, 255, 0.6) 1px solid;
      border-bottom-style: dotted;
      font-size: 56px;
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
