<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="move"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
// 左边蒙版，是div的四分之一   右边大图，是div的4倍大  蒙版移动多少，大图移动2倍蒙版， 并且是相反方向
  export default {
    name: "Zoom",
    data(){
      return{
        currentIndex:0
      }
    },
    props:['skuImageList'],
    computed:{
      imgObj(){
        return this.skuImageList[this.currentIndex] ||{}
      }
    },
    
    mounted(){
      this.$bus.$on('changeImageIndex',(index) => {
        this.currentIndex = index
      })
    },
    methods:{
      move(e){   
          //鼠标在中间跟随 
        this.$refs.mask.style.left = e.layerX -100+"px"
        this.$refs.mask.style.top = e.layerY - 100+"px"
        // 处理边界超出
        if( this.$refs.mask.style.left.split('p')[0] < 0){
          this.$refs.mask.style.left = 0 +"px"
        }
        if( this.$refs.mask.style.top.split('p')[0] < 0){
          this.$refs.mask.style.top = 0 +"px"
        }
        if( this.$refs.mask.style.left.split('p')[0] > 200){
          this.$refs.mask.style.left = 200 +"px"
        }
        if( this.$refs.mask.style.top.split('p')[0] > 200){
          this.$refs.mask.style.top = 200 +"px"
        }
        // 放大图片
        this.$refs.big.style.left = -(this.$refs.mask.style.left.split('p')[0]*2) +"px"
        this.$refs.big.style.top = -(this.$refs.mask.style.top.split('p')[0]*2)+"px"

        
      }
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
      
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>