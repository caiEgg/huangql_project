<template><!--list-content-->
    <div class="main">
        <TypeNav></TypeNav>
        <div class="py-container">
            <!--bread-->
            <div class="bread">
                <ul class="fl sui-breadcrumb">
                    <li>
                        <a href="#">全部结果</a>
                    </li>
                </ul>
                <ul class="fl sui-tag">
                    <li class="with-x" v-if="searchParams.categoryName">{{ searchParams.categoryName }}
                        <i @click="removeCategoryName">×</i>
                    </li>
                    <li class="with-x" v-if="searchParams.keyword">{{ searchParams.keyword }}
                        <i @click="removeKeyword">×</i>
                    </li>
                    <li class="with-x" v-if="searchParams.trademark">{{ searchParams.trademark.split(":") [1]}}
                        <i @click="removeTrademark">×</i>
                    </li>
                    
                        <li class="with-x" v-for="prop,index in searchParams.props" :key="index" v-if="prop">{{ prop.split(":") [1]}}
                            <i @click="removeProp(prop)">×</i>
                        </li>
                   
                    
                </ul>
            </div>
            <!--selector-->
            <SearchSelector @searchTradeMark="searchTradeMark" @getPropsList="getPropsList"></SearchSelector>
            <!-- <div class="clearfix selector">
                    <div class="type-wrap logo">
                        <div class="fl key brand">品牌</div>
                        <div class="value logos">
                            <ul class="logo-list">
                                <li>索尼（SONY）</li>
                                <li>TCL</li>
                                <li>长虹（CHANGHONG）</li>
                                <li>飞利浦（PHILIPS）</li>
                                <li>风行电视</li>
                                <li><img src="./images/phone06.png" /></li>
                                <li><img src="./images/phone07.png" /></li>
                                <li><img src="./images/phone08.png" /></li>
                                <li><img src="./images/phone09.png" /></li>
                                <li><img src="./images/phone10.png" /></li>
                                <li><img src="./images/phone11.png" /></li>
                                <li><img src="./images/phone12.png" /></li>
                                <li><img src="./images/phone12.png" /></li>
                                <li><img src="./images/phone14.png" /></li>
                                <li><img src="./images/phone01.png" /></li>
                                <li><img src="./images/phone06.png" /></li>
                                <li><img src="./images/phone07.png" /></li>
                                <li><img src="./images/phone02.png" /></li>
                            </ul>
                        </div>
                        <div class="ext">
                            <a href="javascript:void(0);" class="sui-btn">多选</a>
                            <a href="javascript:void(0);">更多</a>
                        </div>
                    </div>
                    <div class="type-wrap">
                        <div class="fl key">网络制式</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li>
                                    <a>GSM（移动/联通2G）</a>
                                </li>
                                <li>
                                    <a>电信2G</a>
                                </li>
                                <li>
                                    <a>电信3G</a>
                                </li>
                                <li>
                                    <a>移动3G</a>
                                </li>
                                <li>
                                    <a>联通3G</a>
                                </li>
                                <li>
                                    <a>联通4G</a>
                                </li>
                                <li>
                                    <a>电信3G</a>
                                </li>
                                <li>
                                    <a>移动3G</a>
                                </li>
                                <li>
                                    <a>联通3G</a>
                                </li>
                                <li>
                                    <a>联通4G</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext"></div>
                    </div>
                    <div class="type-wrap">
                        <div class="fl key">显示屏尺寸</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li>
                                    <a>4.0-4.9英寸</a>
                                </li>
                                <li>
                                    <a>4.0-4.9英寸</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext"></div>
                    </div>
                    <div class="type-wrap">
                        <div class="fl key">摄像头像素</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li>
                                    <a>1200万以上</a>
                                </li>
                                <li>
                                    <a>800-1199万</a>
                                </li>
                                <li>
                                    <a>1200-1599万</a>
                                </li>
                                <li>
                                    <a>1600万以上</a>
                                </li>
                                <li>
                                    <a>无摄像头</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext"></div>
                    </div>
                    <div class="type-wrap">
                        <div class="fl key">价格</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li>
                                    <a>0-500元</a>
                                </li>
                                <li>
                                    <a>500-1000元</a>
                                </li>
                                <li>
                                    <a>1000-1500元</a>
                                </li>
                                <li>
                                    <a>1500-2000元</a>
                                </li>
                                <li>
                                    <a>2000-3000元 </a>
                                </li>
                                <li>
                                    <a>3000元以上</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext">
                        </div>
                    </div>
                    <div class="type-wrap">
                        <div class="fl key">更多筛选项</div>
                        <div class="fl value">
                            <ul class="type-list">
                                <li>
                                    <a>特点</a>
                                </li>
                                <li>
                                    <a>系统</a>
                                </li>
                                <li>
                                    <a>手机内存 </a>
                                </li>
                                <li>
                                    <a>单卡双卡</a>
                                </li>
                                <li>
                                    <a>其他</a>
                                </li>
                            </ul>
                        </div>
                        <div class="fl ext">
                        </div>
                    </div>
                </div> -->
            <!--details-->
            <div class="details clearfix">
                <div class="sui-navbar">
                    <div class="navbar-inner filter">
                        <ul class="sui-nav">
                            <li :class="{active:isOne == true}">
                                <a @click="changeOrder(1)">综合 <span v-show="isOne"><i v-show="showOneDirection">↓</i><i v-show="showOneDirection==false">↑</i></span></a>
                            </li>
                            <li @click="changeOrder(2)" :class="{active:isOne == false}">
                                <a >价格 <span v-show="isOne==false"><i v-show="showTwoDirection">↓</i><i v-show="showTwoDirection==false">↑</i></span></a>
                            </li>
                            
                           <!--  <li>
                                <a  @click="priceUp">价格⬆</a>
                            </li>
                            <li>
                                <a @click="priceDown">价格⬇</a>
                            </li> -->
                        </ul>
                    </div>
                </div>
                <div class="goods-list">
                    <ul class="yui3-g">
                        <li class="yui3-u-1-5" v-for="item in listData.goodsList" :key="item.id" >
                            <div class="list-wrap">
                                <div class="p-img">
                                    <!-- :src="require(`${item.defaultImg}`) -->
                                    <router-link target="_blank" :to="`/detail/${item.id}`"><img v-lazy="item.defaultImg" /></router-link>
                                </div>
                                <div class="price">
                                    <strong>
                                        <em>¥</em>
                                        <i>{{ item.price }}</i>
                                    </strong>
                                </div>
                                <div class="attr">
                                    <a target="_blank"
                                        title="促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】">{{ item.title }}</a>
                                </div>
                                <div class="commit">
                                    <i class="command">已有<span>2000</span>人评价</i>
                                </div>
                                <div class="operate">
                                    <a href="success-cart.html" target="_blank"
                                        class="sui-btn btn-bordered btn-danger">加入购物车</a>
                                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
                <!-- <div class="fr page">
                    <div class="sui-pagination clearfix">
                        <ul>
                            <li class="prev disabled">
                                <a href="#">«上一页</a>
                            </li>
                            <li class="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">4</a>
                            </li>
                            <li>
                                <a href="#">5</a>
                            </li>
                            <li class="dotted"><span>...</span></li>
                            <li class="next">
                                <a href="#">下一页»</a>
                            </li>
                        </ul>
                        <div><span>共10页&nbsp;</span></div>
                    </div>
                </div> -->
                <Pagination :pageNo="searchParams.pageNo" :totalSize="searchParams.pageSize" :total="total"  :continues="5" @getPageNo="getPageNo"></Pagination>
            </div>
            <!--hotsale-->
            <div class="clearfix hot-sale">
                <h4 class="title">热卖商品</h4>
                <div class="hot-list">
                    <ul class="yui3-g">
                        <li class="yui3-u-1-4">
                            <div class="list-wrap">
                                <div class="p-img">
                                    <img src="./images/like_01.png" />
                                </div>
                                <div class="attr">
                                    <em>Apple苹果iPhone 6s (A1699)</em>
                                </div>
                                <div class="price">
                                    <strong>
                                        <em>¥</em>
                                        <i>4088.00</i>
                                    </strong>
                                </div>
                                <div class="commit">
                                    <i class="command">已有700人评价</i>
                                </div>
                            </div>
                        </li>
                        <li class="yui3-u-1-4">
                            <div class="list-wrap">
                                <div class="p-img">
                                    <img src="./images/like_03.png" />
                                </div>
                                <div class="attr">
                                    <em>金属A面，360°翻转，APP下单省300！</em>
                                </div>
                                <div class="price">
                                    <strong>
                                        <em>¥</em>
                                        <i>4088.00</i>
                                    </strong>
                                </div>
                                <div class="commit">
                                    <i class="command">已有700人评价</i>
                                </div>
                            </div>
                        </li>
                        <li class="yui3-u-1-4">
                            <div class="list-wrap">
                                <div class="p-img">
                                    <img src="./images/like_04.png" />
                                </div>
                                <div class="attr">
                                    <em>256SSD商务大咖，完爆职场，APP下单立减200</em>
                                </div>
                                <div class="price">
                                    <strong>
                                        <em>¥</em>
                                        <i>4068.00</i>
                                    </strong>
                                </div>
                                <div class="commit">
                                    <i class="command">已有20人评价</i>
                                </div>
                            </div>
                        </li>
                        <li class="yui3-u-1-4">
                            <div class="list-wrap">
                                <div class="p-img">
                                    <img src="./images/like_02.png" />
                                </div>
                                <div class="attr">
                                    <em>Apple苹果iPhone 6s (A1699)</em>
                                </div>
                                <div class="price">
                                    <strong>
                                        <em>¥</em>
                                        <i>4088.00</i>
                                    </strong>
                                </div>
                                <div class="commit">
                                    <i class="command">已有700人评价</i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</div>
</template>


<script>

import SearchSelector from './SearchSelector/SearchSelector.vue';
export default {
    //Home组件一进来，发请求，获取服务器的数据，刷新到页面上。 接着location.query = {}，push(location)跳转到Search组件，传递路径参数
    // Search组件接收路径参数，在页面挂载前把路径参数设置到请求参数，接着页面挂载完毕发请求，刷新页面。 继续监听页面路由变化，继续发请求

    name: 'Search',
    data() {
        return {
            searchParams: {
                category1Id: '',
                category2Id: '',
                category3Id: '',
                categoryName: '',
                keyword: '',
                order: '1:dsec',
                pageNo: 1,
                pageSize: 10,
                props: [],
                trademark: ''
            },
            showOneDirection:true,
            showTwoDirection:true
        }
    },
    beforeMount() {
        // 试过了，id不管是字符串还是数字都可以，主要是keyword在跳转路径时传递的params路径参数keyword不能是空，所以设置成undefined，发请求时，整合的请求参数searchParams.keyword不能是undefined，设置成空字符串
        Object.assign(this.searchParams, this.$route.query, this.$route.params);
        this.checkKeyword();
    },

    mounted() {
        this.getData();
    },
    computed: {
        listData() {
            return this.$store.state.search.listData
        }, 
        isOne(){
            return this.searchParams.order.indexOf('1') !=-1
        },
        total(){
            return this.listData.total
        },
        
        
    },
    watch: {
        $route() {
            // 把上一次请求参数的数据清空
            this.searchParams.category1Id = undefined
            this.searchParams.category2Id = undefined
            this.searchParams.category3Id = undefined
            this.searchParams.pageNo = 1
            // 再从路由当中拿新的数据
            Object.assign(this.searchParams, this.$route.query, this.$route.params);
            this.checkKeyword();
            this.getData()
        }
    },
    components: {
        SearchSelector
    },
    methods: {
        // 发请求
        getData() {
            this.$store.dispatch('getList', this.searchParams)
        },
        checkKeyword() {
            if (this.searchParams.keyword == "undefined" || this.searchParams.keyword == undefined) {
                this.searchParams.keyword = undefined
            }
        },
        // 删除分类的名字
        removeCategoryName() {
            // 设置成undefined就不会在请求参数中
            this.searchParams.category1Id = undefined
            this.searchParams.category2Id = undefined
            this.searchParams.category3Id = undefined
            this.searchParams.categoryName = undefined
            this.searchParams.pageNo = 1
            // 重新刷新请求数据
            
            // 之前的路径要清空,直接不传递query参数
            let location = {nama:'search'}
            if(this.$route.params){
                location.params = this.$route.params
            }
            this.$router.push(location)
        },
        // 删除搜索框关键字
        removeKeyword(){
            // 去除掉面包屑那一行
            this.searchParams.keyword = undefined;
             //通知Header组件清空搜索框
            this.$bus.$emit('clearKeyword')              
            //跳转路由
            this.$router.push({
                name:'search',
                query:this.$route.query,
                
            })
        },
        removeTrademark(){
            // 取消品牌面包屑
            this.searchParams.trademark = undefined;
            // 刷新数据
            this.getData()
            this.searchParams.pageNo = 1
        },
        searchTradeMark(trademark){
            this.searchParams.pageNo = 1
            this.searchParams.trademark = `${trademark.tmId}:${trademark.tmName}`
            this.getData()
        },
        // 获取子组件传递过来的数据，组合发请求
        getPropsList(attr, attrValue){
            let prop = `${attr.attrId}:${attrValue}:${attr.attrName}`
            if(this.searchParams.props.indexOf(prop)==-1){
                this.searchParams.props.push(prop)
            }
            this.searchParams.pageNo = 1
            this.getData()
        },
        removeProp(prop){
            this.searchParams.props = this.searchParams.props.filter(item => item != prop)
            this.getData()
            this.searchParams.pageNo = 1
        },
        // 排序处理
        changeOrder(flag){
            this.searchParams.pageNo = 1
            let order = this.searchParams.order.split(':')[1]
            // 综合排序
            if(flag == 1){
                // 从价格过来的默认状态
                if(this.isOne == false){
                    order = "dsec"
                    this.showOneDirection = true
                }else{
                    // 不是默认状态
                    order = order=="dsec"?"asc":"dsec"
                    this.showOneDirection = !this.showOneDirection
                }
            }else{
            // 价格排序
               //  从综合过来的默认状态
                if(this.isOne){
                    order = "dsec"
                    this.showTwoDirection = true
                }else{
                    // 不是默认状态
                    order = order=="dsec"?"asc":"dsec"
                    this.showTwoDirection = !this.showTwoDirection
                }               
            }
            this.searchParams.order = flag + ":" + order
            this.getData()
        },
        getPageNo(pageNo){
            this.searchParams.pageNo = pageNo
            this.getData()
        },
        
        

    }
}
</script>
<style lang="less" scoped>
.main {
    margin: 10px 0;

    .py-container {
        // 最大的容器 设置最大宽度并且居中
        width: 1200px;
        margin: 0 auto;
        margin-top: 15px;

        .bread {
            margin-bottom: 5px;
            overflow: hidden;

            .sui-breadcrumb {
                padding: 3px 15px;
                margin: 0;
                font-weight: 400;
                border-radius: 3px;
                float: left;

                li {
                    // block--为了可以设置宽高 inline 不独占一行
                    display: inline-block;
                    line-height: 18px;

                    a {
                        color: #666;
                        text-decoration: none;

                        &:hover {
                            color: #4cb9fc;
                        }
                    }
                }
            }

            .sui-tag {
                margin-top: -5px;
                list-style: none;
                font-size: 0;
                line-height: 0;
                padding: 5px 0 0;
                margin-bottom: 18px;
                float: left;

                .with-x {
                    font-size: 12px;
                    margin: 0 5px 5px 0;
                    display: inline-block;
                    overflow: hidden;
                    color: #000;
                    background: #f7f7f7;
                    padding: 0 7px;
                    height: 20px;
                    line-height: 20px;
                    border: 1px solid #dedede;
                    white-space: nowrap;
                    transition: color 400ms;
                    cursor: pointer;

                    i {
                        margin-left: 10px;
                        cursor: pointer;
                        font: 400 14px tahoma;
                        display: inline-block;
                        height: 100%;
                        vertical-align: middle;
                    }

                    &:hover {
                        color: #28a3ef;
                    }
                }
            }
        }

        .selector {
            border: 1px solid #ddd;
            margin-bottom: 5px;
            overflow: hidden;

            .logo {
                border-top: 0;
                margin: 0;
                position: relative;
                overflow: hidden;

                .key {
                    padding-bottom: 87px !important;
                }
            }

            .type-wrap {
                margin: 0;
                position: relative;
                border-top: 1px solid #ddd;
                overflow: hidden;

                .key {
                    width: 100px;
                    background: #f1f1f1;
                    line-height: 26px;
                    text-align: right;
                    padding: 10px 10px 0 15px;
                    float: left;
                }

                .value {
                    overflow: hidden;
                    padding: 10px 0 0 15px;
                    color: #333;
                    margin-left: 120px;
                    padding-right: 90px;

                    .logo-list {
                        li {
                            float: left;
                            border: 1px solid #e4e4e4;
                            margin: -1px -1px 0 0;
                            width: 105px;
                            height: 52px;
                            text-align: center;
                            line-height: 52px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-weight: 700;
                            color: #e1251b;
                            font-style: italic;
                            font-size: 14px;

                            img {
                                max-width: 100%;
                                vertical-align: middle;
                            }
                        }
                    }

                    .type-list {
                        li {
                            float: left;
                            display: block;
                            margin-right: 30px;
                            line-height: 26px;

                            a {
                                text-decoration: none;
                                color: #666;
                            }
                        }
                    }
                }

                .ext {
                    position: absolute;
                    top: 10px;
                    right: 10px;

                    .sui-btn {
                        display: inline-block;
                        padding: 2px 14px;
                        box-sizing: border-box;
                        margin-bottom: 0;
                        font-size: 12px;
                        line-height: 18px;
                        text-align: center;
                        vertical-align: middle;
                        cursor: pointer;
                        padding: 0 10px;
                        background: #fff;
                        border: 1px solid #d5d5d5;
                    }

                    a {
                        color: #666;
                    }
                }
            }
        }

        .details {
            margin-bottom: 5px;

            .sui-navbar {
                overflow: visible;
                margin-bottom: 0;

                .filter {
                    min-height: 40px;
                    padding-right: 20px;
                    background: #fbfbfb;
                    border: 1px solid #e2e2e2;
                    padding-left: 0;
                    border-radius: 0;
                    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

                    .sui-nav {
                        position: relative;
                        left: 0;
                        display: block;
                        float: left;
                        margin: 0 10px 0 0;

                        li {
                            float: left;
                            line-height: 18px;

                            a {
                                display: block;
                                cursor: pointer;
                                padding: 11px 15px;
                                color: #777;
                                text-decoration: none;
                            }

                            &.active {
                                a {
                                    background: #e1251b;
                                    color: #fff;
                                }
                            }
                        }
                    }
                }
            }

            .goods-list {
                margin: 20px 0;

                ul {
                    display: flex;
                    flex-wrap: wrap;

                    li {
                        height: 100%;
                        width: 20%;
                        margin-top: 10px;
                        line-height: 28px;

                        .list-wrap {
                            .p-img {
                                padding-left: 15px;
                                width: 215px;
                                height: 255px;

                                a {
                                    color: #666;

                                    img {
                                        max-width: 100%;
                                        height: auto;
                                        vertical-align: middle;
                                    }
                                }
                            }

                            .price {
                                padding-left: 15px;
                                font-size: 18px;
                                color: #c81623;

                                strong {
                                    font-weight: 700;

                                    i {
                                        margin-left: 3px;
                                    }
                                }
                            }

                            .attr {
                                padding-left: 15px;
                                width: 85%;
                                overflow: hidden;
                                margin-bottom: 8px;
                                min-height: 38px;
                                cursor: pointer;
                                line-height: 1.8;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;

                                a {
                                    color: #333;
                                    text-decoration: none;
                                }
                            }

                            .commit {
                                padding-left: 15px;
                                height: 22px;
                                font-size: 13px;
                                color: #a7a7a7;

                                span {
                                    font-weight: 700;
                                    color: #646fb0;
                                }
                            }

                            .operate {
                                padding: 12px 15px;

                                .sui-btn {
                                    display: inline-block;
                                    padding: 2px 14px;
                                    box-sizing: border-box;
                                    margin-bottom: 0;
                                    font-size: 12px;
                                    line-height: 18px;
                                    text-align: center;
                                    vertical-align: middle;
                                    cursor: pointer;
                                    border-radius: 0;
                                    background-color: transparent;
                                    margin-right: 15px;
                                }

                                .btn-bordered {
                                    min-width: 85px;
                                    background-color: transparent;
                                    border: 1px solid #8c8c8c;
                                    color: #8c8c8c;

                                    &:hover {
                                        border: 1px solid #666;
                                        color: #fff !important;
                                        background-color: #666;
                                        text-decoration: none;
                                    }
                                }

                                .btn-danger {
                                    border: 1px solid #e1251b;
                                    color: #e1251b;

                                    &:hover {
                                        border: 1px solid #e1251b;
                                        background-color: #e1251b;
                                        color: white !important;
                                        text-decoration: none;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            /* .page {
                width: 733px;
                height: 66px;
                overflow: hidden;
                float: right;

                .sui-pagination {
                    margin: 18px 0;

                    ul {
                        margin-left: 0;
                        margin-bottom: 0;
                        vertical-align: middle;
                        width: 490px;
                        float: left;

                        li {
                            line-height: 18px;
                            display: inline-block;

                            a {
                                position: relative;
                                float: left;
                                line-height: 18px;
                                text-decoration: none;
                                background-color: #fff;
                                border: 1px solid #e0e9ee;
                                margin-left: -1px;
                                font-size: 14px;
                                padding: 9px 18px;
                                color: #333;
                            }

                            &.active {
                                a {
                                    background-color: #fff;
                                    color: #e1251b;
                                    border-color: #fff;
                                    cursor: default;
                                }
                            }

                            &.prev {
                                a {
                                    background-color: #fafafa;
                                }
                            }

                            &.disabled {
                                a {
                                    color: #999;
                                    cursor: default;
                                }
                            }

                            &.dotted {
                                span {
                                    margin-left: -1px;
                                    position: relative;
                                    float: left;
                                    line-height: 18px;
                                    text-decoration: none;
                                    background-color: #fff;
                                    font-size: 14px;
                                    border: 0;
                                    padding: 9px 18px;
                                    color: #333;
                                }
                            }

                            &.next {
                                a {
                                    background-color: #fafafa;
                                }
                            }
                        }
                    }

                    div {
                        color: #333;
                        font-size: 14px;
                        float: right;
                        width: 241px;
                    }
                }
            } */
        }

        .hot-sale {
            margin-bottom: 5px;
            border: 1px solid #ddd;

            .title {
                font-weight: 700;
                font-size: 14px;
                line-height: 21px;
                border-bottom: 1px solid #ddd;
                background: #f1f1f1;
                color: #333;
                margin: 0;
                padding: 5px 0 5px 15px;
            }

            .hot-list {
                padding: 15px;

                ul {
                    display: flex;

                    li {
                        width: 25%;
                        height: 100%;

                        .list-wrap {

                            .p-img,
                            .price,
                            .attr,
                            .commit {
                                padding-left: 15px;
                            }

                            .p-img {
                                img {
                                    max-width: 100%;
                                    vertical-align: middle;
                                    border: 0;
                                }
                            }

                            .attr {
                                width: 85%;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                overflow: hidden;
                                margin-bottom: 8px;
                                min-height: 38px;
                                cursor: pointer;
                                line-height: 1.8;
                            }

                            .price {
                                font-size: 18px;
                                color: #c81623;

                                strong {
                                    font-weight: 700;

                                    i {
                                        margin-left: -5px;
                                    }
                                }
                            }

                            .commit {
                                height: 22px;
                                font-size: 13px;
                                color: #a7a7a7;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>