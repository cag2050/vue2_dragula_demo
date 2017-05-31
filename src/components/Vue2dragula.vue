<template>
  <div id="app">
    <div class="container">
      <div name="fade" tag="div" v-dragula="items" drake="items">
        <div class="item" v-for="(item, index) in items" :key="item"><img :src="item" width="200px" height="130px"></div>
      </div>
    </div>
</div>
</template>

<script>
import scene1 from '../assets/scene1.jpg'
import scene2 from '../assets/scene2.jpg'
import scene3 from '../assets/scene3.jpg'
import scene4 from '../assets/scene4.jpg'
import scene5 from '../assets/scene5.jpg'

export default {
  data () {
    return {
        items: [scene1, scene2, scene3, scene4, scene5 ]
    }
  },
  created () {
    let service = this.$dragula.$service
    service.options('items', {direction: 'horizontal'})
  }
}
</script>

<style>
.gu-mirror {
  position: absolute;
  pointer-events: none;
  transition: all 0s !important;
}
.gu-transit {
  color:white;
    width: 198px;
    height: 128px;
  border:1px dotted blue;
  box-sizing: border-box;
  opacity:1;
}

.item {
  display: inline-block;
  width: 200px;
  height: 130px;
  background: blue;
  //padding: 5px;
  margin: 5px;
  //border: 1px white solid;
  cursor: move;
 // background: white;
  transition: all 1s;
  text-align: center;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

.fade-leave-active {
  position: absolute;
}
</style>
