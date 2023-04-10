<template>
  <div class="pagination" v-if="startAndEndNum.totalPages > 1">
    <button v-if="pageNo > 1" @click="$emit('getPageNo',pageNo - 1)">上一页</button>
    <button v-if="startAndEndNum.start != 1 " @click="$emit('getPageNo',1)" :class="{active:pageNo ==1}">1</button>
    <button v-if="pageNo >= continues&&startAndEndNum.start >=3" >···</button>

    <button v-for="item, index in startAndEndNum.end " @click="$emit('getPageNo',item)" :class="{active:pageNo ==item}"  v-if="startAndEndNum.totalPages > 1 && item >=startAndEndNum.start">{{ item }}</button>


    <button v-if="(startAndEndNum.totalPages - pageNo)>=4">···</button>
    <button v-if="(startAndEndNum.totalPages - pageNo)>=Math.floor(continues/2) && startAndEndNum.end != startAndEndNum.totalPages" @click="$emit('getPageNo',startAndEndNum.totalPages)" :class="{active:pageNo == startAndEndNum.totalPages}">{{ startAndEndNum.totalPages }}</button>
    <button v-if="pageNo != startAndEndNum.totalPages" @click="$emit('getPageNo',pageNo + 1)">下一页</button>

    <button style="margin-left: 30px">共 {{ total  }} 条</button>
   
  </div>
</template>
  
<script>
export default {
  name: "Pagination",
  props: [
    'pageNo', 'totalSize', 'total', 'continues'
  ],
  computed: {
    startAndEndNum() {
      let { pageNo, totalSize, total, continues } = this
      let totalPages = Math.ceil(total / totalSize)
      let start = 0
      let end = 0
      if (totalPages > continues) {
        start = pageNo - Math.floor(continues / 2)
        end = pageNo + Math.floor(continues / 2)
        if (start < 1) {
          start = 1
        }
        if (end > totalPages) {
          end = totalPages
        }
      } else {
        start = 1
        end = totalPages
      }
      return { totalPages, start, end }
    }
  }
}
</script>
  
<style lang="less" scoped>
.pagination {
  text-align: center;

  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>