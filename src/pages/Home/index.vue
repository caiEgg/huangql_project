<template>

    <div>
        
        <TypeNav></TypeNav>
        <listContainer></listContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
         <div v-for = "item in floorList" :key = "item.id">
             <Floor :floorList="item"></Floor>
         </div>
        <Brand></Brand>
    </div>
</template>


<script>
import listContainer from '@/pages/Home/listContainer/index.vue'
import Recommend from '@/pages/Home/Recommend/index.vue'
import Rank from '@/pages/Home/Rank/index.vue'
import Like from '@/pages/Home/Like/index.vue'
import Floor from '@/pages/Home/Floor/index.vue'
import Brand from '@/pages/Home/Brand/index.vue'
export default{
    name:'Home',
    components:{
        listContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    computed:{
        floorList(){
            return this.$store.state.home.floorList
        }
    },
    mounted(){
        this.$store.dispatch('getFloorList')
        
    }
}
</script>
<style>

</style>