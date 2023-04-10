<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body" v-for="cart in cartList">
        <ul v-if="cart" class="cart-list" v-for="cartInfo, index in cart.cartInfoList" :key="cartInfo.id">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" :checked="cartInfo.isChecked == 1" @click="changeGoodCheck(cartInfo)">
          </li>
          <li class="cart-list-con2">
            <img :src="cartInfo.imgUrl">
            <div class="item-msg">{{ cartInfo.skuName }}</div>
          </li>

          <li class="cart-list-con4">
            <span class="price">{{ cartInfo.skuPrice }}</span>
          </li>
          <li class="cart-list-con5">
            <a class="mins" @click="changeSkuNum($event, cartInfo, -1)">-</a>
            <input autocomplete="off" type="text" :value="cartInfo.skuNum" minnum="1" class="itxt"
              @blur="changeSkuNum($event, cartInfo, $event.target.value - cartInfo.skuNum)">
            <a class="plus" @click="changeSkuNum($event, cartInfo, 1)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ cartInfo.skuPrice * cartInfo.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a class="sindelet" @click="deleteCartInfo(cartInfo)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>


      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" :checked="allCheck && cartInfoList.length >0" @click="changeAllCheck">
        <span>全选</span>
      </div>
      <div class="option">
        <a @click="deleteAllCartInfo">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>0</span>件商品
        </div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ totalPrice }}</i>
        </div>
        <div class="sumbtn">
          <a @click="goTrade"> 结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import throttle from 'lodash/throttle'
export default {
  name: 'ShopCart',
  data() {
    return {

    }
  },
  mounted() {
    this.getData()

  },
  computed: {
    cartList() {
      return this.$store.state.shopcart.CartList || []
    },
    ...mapGetters(['cartInfoList']),
    // 计算总价
    totalPrice() {
      let sum = 0
      if (this.cartList[0]) {
        let length = this.cartList[0].cartInfoList.length
        let cartInfoList = this.cartList[0].cartInfoList
        for (let i = 0; i < length; i++) {
          sum = cartInfoList[i].skuNum * cartInfoList[i].skuPrice + sum
        }
        return sum
      }
    },
    // 是否全选
    allCheck() {
      /*   let allCheck = true
        if (this.cartList[0]) {
          let length = this.cartList[0].cartInfoList.length
          let cartInfoList = this.cartList[0].cartInfoList
          for (let i = 0; i < length; i++) {
            if (cartInfoList[i].isChecked != 1) {
              allCheck = false
            }
          }
        }
        return allCheck */
      if (this.cartInfoList) {
        return this.cartInfoList.every(item => item.isChecked == 1)
      }

    }
  },
  methods: {
    getData() {
      this.$store.dispatch('reqCartListActions')
    },
    // 节流。 点击很多也是1秒钟执行1次
    changeSkuNum: throttle(
      async function ($event, cartInfo, newSkuNum) {
        if (isNaN(newSkuNum) || $event.target.value < 0) {
          console.log("你输入了非法的数字")
          $event.target.value = cartInfo.skuNum
          return
        } else {
          // 小数转整数
          newSkuNum = parseInt(newSkuNum)
        }
        if (cartInfo.skuNum <= 0 && newSkuNum < 0) {
          alert("购物车没有数据")
          return
        }
        await this.$store.dispatch('reqAddtoCardListActions', { skuId: cartInfo.skuId, skuNum: newSkuNum })
        this.getData()
        // 如果等于0，点击- 就提示没数据， 点击+就发请求 
      }, 1000
    ),
    // 删除购物车
    async deleteCartInfo(cartInfo) {
      await this.$store.dispatch('deleteCartInfoActions', cartInfo.skuId)

      this.getData()
    },
    // 改变商品选中状态
    async changeGoodCheck(cartInfo) {
      cartInfo.isChecked = cartInfo.isChecked == "1" ? "0" : "1"
      await this.$store.dispatch('changeGoodCheckActions', { skuId: cartInfo.skuId, isChecked: cartInfo.isChecked })
      this.getData()
    },
    // 删除选中的产品
    async deleteAllCartInfo() {
      let PromiseList = []
      for (let i = 0; i < this.cartInfoList.length; i++) {
        if (this.cartInfoList[i].isChecked == '1') {
          let promise = this.$store.dispatch('deleteCartInfoActions', this.cartInfoList[i].skuId)
          PromiseList.push(promise)
        }
      }
      await Promise.all(PromiseList)
      this.getData()
    },
    // 全选
    async changeAllCheck() {
      let PromiseList = []
      if (this.allCheck == false) {
        for (let i = 0; i < this.cartInfoList.length; i++) {
          if (this.cartInfoList[i].isChecked == '0') {
            let promise = this.$store.dispatch('changeGoodCheckActions', { skuId: this.cartInfoList[i].skuId, isChecked: "1" })
            PromiseList.push(promise)
          }
        }
        await Promise.all(PromiseList)
        this.getData()
      }else{
        for (let i = 0; i < this.cartInfoList.length; i++) {
            let promise = this.$store.dispatch('changeGoodCheckActions', { skuId: this.cartInfoList[i].skuId, isChecked: "0" })
            PromiseList.push(promise)
        }
        await Promise.all(PromiseList)
        this.getData()
      }

    },
    goTrade(){
      this.$router.push({name:'trade'})
    }
  },

}
</script>

<style lang="less" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      &>div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;

      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        &>li {
          float: left;
        }

        .cart-list-con1 {
          width: 15%;
        }

        .cart-list-con2 {
          width: 35%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }



        .cart-list-con4 {
          width: 10%;

        }

        .cart-list-con5 {
          width: 17%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 10%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 13%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      a {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        a {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: "Microsoft YaHei";
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>