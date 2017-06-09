<template>
<div v-dragula="items" drake="items" class="items">
    <div class="item" v-for="(item, index) in items" :key="item">
        <div class="container">
            <img :src="item" width="200px" height="130px">
            <div class="word">图片说明</div>
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
            items: [ scene1, scene2, scene3, scene4, scene5 ]
        }
    },
    created () {
        let service = this.$dragula.$service
        service.options('items', {direction: 'horizontal'})
    }
}
</script>

<style lang="stylus">
.items
    margin-top 30px
.item
    display: inline-block;
    width: 200px;
    height: 130px;
    margin-left: 5px;
    cursor: move;
    transition: all 1s;
    text-align: center;
    .container
        height 152px
        .word
            visibility: hidden;
            height: 22px;
        &:hover
            .word
                visibility visible

.gu-mirror {
    position: absolute;
    pointer-events: none;
    transition: all 0s !important;
    height: 152px;
}
.gu-mirror .container .word {
    display: none;
}

.gu-transit {
    color:white;
    border-radius: 2px;
    border: 1px dashed #e1e1e1;
    box-sizing: border-box;
    top: -22px;
    position: relative;
    opacity:1;
}

.gu-transit img {
    display:none;
}
.gu-transit .word {
    display:none;
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
