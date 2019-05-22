<template>
  <div class="basicAnimationContainer">
    <div class="item" @click="bounceShow=!bounceShow">
      <transition enter-active-class="bounceIn" leave-active-class="bounceOut">
        <div v-show="bounceShow" class="tag">bounce</div>
      </transition>
    </div>
    <div class="item" @click="zoomDownShow=!zoomDownShow">
      <transition
        enter-active-class="zoomInDown animated"
        leave-active-class="zoomOutDown animated"
      >
        <div v-show="zoomDownShow" class="tag">zoom down</div>
      </transition>
    </div>
    <div class="item" @click="rotateShow=!rotateShow">
      <transition enter-active-class="rotateIn animated" leave-active-class="rotateOut animated">
        <div v-show="rotateShow" class="tag">rotate</div>
      </transition>
    </div>
    <div class="item" @click="fadeShow=!fadeShow">
      <transition enter-active-class="fadeIn animated" leave-active-class="fadeOut animated">
        <div v-show="fadeShow" class="tag">fade</div>
      </transition>
    </div>
    <div class="item" @click="bounceDownShow=!bounceDownShow">
      <transition
        enter-active-class="bounceInDown animated"
        leave-active-class="bounceOutDown animated"
      >
        <div v-show="bounceDownShow" class="tag">bounce down</div>
      </transition>
    </div>
    <div class="item" @click="bounceUpShow=!bounceUpShow">
      <transition
        enter-active-class="bounceInUp animated"
        leave-active-class="bounceOutUp animated"
      >
        <div v-show="bounceUpShow" class="tag">bounce Up</div>
      </transition>
    </div>
    <div class="item" @click="bounceLeftShow=!bounceLeftShow">
      <transition
        enter-active-class="bounceInLeft animated"
        leave-active-class="bounceOutLeft animated"
      >
        <div v-show="bounceLeftShow" class="tag">bounce Left</div>
      </transition>
    </div>
    <div class="item" @click="bounceRightShow=!bounceRightShow">
      <transition
        enter-active-class="bounceInRight animated"
        leave-active-class="bounceOutRight animated"
      >
        <div v-show="bounceRightShow" class="tag">bounce Right</div>
      </transition>
    </div>

    <div class="item" @click="slideDownShow=!slideDownShow">
      <transition
        enter-active-class="slideInDown animated"
        leave-active-class="slideOutDown animated"
      >
        <div v-show="slideDownShow" class="tag">slide down</div>
      </transition>
    </div>
    <div class="item" @click="slideUpShow=!slideUpShow">
      <transition enter-active-class="slideInUp animated" leave-active-class="slideOutUp animated">
        <div v-show="slideUpShow" class="tag">slide Up</div>
      </transition>
    </div>
    <div class="item" @click="slideLeftShow=!slideLeftShow">
      <transition
        enter-active-class="slideInLeft animated"
        leave-active-class="slideOutLeft animated"
      >
        <div v-show="slideLeftShow" class="tag">slide Left</div>
      </transition>
    </div>
    <div class="item" @click="slideRightShow=!slideRightShow">
      <transition
        enter-active-class="slideInRight animated"
        leave-active-class="slideOutRight animated"
      >
        <div v-show="slideRightShow" class="tag">slide Right</div>
      </transition>
    </div>
    <div class="item" @click="hingeShow=!hingeShow">
      <transition enter-active-class="hinge animated" leave-active-class="hinge animated">
        <div v-show="hingeShow" class="tag">hinge</div>
      </transition>
    </div>
    <div class="item" @click="jackInTheBoxShow=!jackInTheBoxShow">
      <transition
        enter-active-class="jackInTheBox animated"
        leave-active-class="jackInTheBox animated"
      >
        <div v-show="jackInTheBoxShow" class="tag">jackInTheBox</div>
      </transition>
    </div>
    <div class="item" @click="rollShow=!rollShow">
      <transition enter-active-class="rollIn animated" leave-active-class="rollOut animated">
        <div v-show="rollShow" class="tag">roll</div>
      </transition>
    </div>
  </div>
</template>

<script>
import animateCss from '../../css/animate.css';
export default {
  components: {
  },
  data() {
    return {
      bounceShow: true,
      zoomDownShow: true,
      rotateShow: true,
      fadeShow: true,
      bounceDownShow: true,
      bounceUpShow: true,
      bounceLeftShow: true,
      bounceRightShow: true,
      slideDownShow: true,
      slideUpShow: true,
      slideLeftShow: true,
      slideRightShow: true,
      hingeShow: true,
      jackInTheBoxShow: true,
      rollShow: true
    };
  }
};
</script>

<style lang="less" scoped>
.basicAnimationContainer {
  display: flex;
  flex-wrap: wrap;
  .item {
    min-width: 200px;
    min-height: 65px;
    margin: 20px;
    // background-color: #5c759b1a;
    cursor: pointer;
    .tag {
      display: inline-block;
      padding: 8px;
      border: rgba(103, 194, 58, 0.2) 1px solid;
      border-radius: 8px;
      font-size: 2em;
      background-color: rgba(103, 194, 58, 0.1);
      color: #67c23a;
    }
  }
}
</style>
