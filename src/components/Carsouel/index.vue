<template>
    <div class="swiper-container" ref="cur">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item,index in carouselList" :key="index">
                <img :src="require(`${item.imgUrl}`)">
            </div>

        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default{
    watch:{
        carouselList:{
            immediate:true,
            handler(){
                // 数据有了，但是dom结构不一定能出来，所以要等dom更新
                this.$nextTick(() => {
                    new Swiper(this.$refs.cur, {
                        autoplay: {
                            delay: 1000,
                            stopOnLastSlide: false,
                            disableOnInteraction: true,
                        },
                        loop: true, // 循环模式选项

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                    })
                })
            }
        }
    },
     mounted(){
       
     },
     props: {
        carouselList: {            
            required: true
        }
    },  
}
</script>