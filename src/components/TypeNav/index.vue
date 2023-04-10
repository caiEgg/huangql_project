<template>
    <div class="typeNav">

        <div class="container">
            <h2 class="all" @mouseenter="showTypeNav($event)" @mouseleave="unshowTypeNav($event)">全部商品分类</h2>
            <nav class="nav">
                <a href="###">服装城</a>
                <a href="###">美妆馆</a>
                <a href="###">欢乐购超市</a>
                <a href="###">全球购</a>
                <a href="###">闪购</a>
                <a href="###">团购</a>
                <a href="###">有趣</a>
                <a href="###">秒杀</a>
            </nav>
            <transition name="sort">
                <div class="sort" ref="sort" v-show="showType">
                    <div class="all-sort-list2" ref="div" @click="goSearch($event)">
                        <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId">
                            <h3 @mouseenter="h3mouseEnter($event, index)" @mouseleave="h3mouseLeave($event, index)"
                                :categoryName="c1.categoryName" :category1Id="c1.categoryId">
                                <a :categoryName="c1.categoryName" :category1Id="c1.categoryId">{{
                                    c1.categoryName
                                }}</a>
                            </h3>
                            <div class="item-list clearfix" ref="itemList" @mouseenter="show(index, $event)"
                                @mouseleave="leave(index)">
                                <div class="subitem">
                                    <dl class="fore" v-for=" c2 in c1.categoryChild " :key="c2.categoryId">
                                        <dt>
                                            <a :categoryName="c2.categoryName" :category2Id="c2.categoryId">{{
                                                c2.categoryName
                                            }}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                                                <a :categoryName="c3.categoryName" :category3Id="c3.categoryId">{{
                                                    c3.categoryName
                                                }}</a>
                                            </em>
                                            <!-- <em>
                                            <a href="">文学</a>
                                        </em>
                                        <em>
                                            <a href="">经管</a>
                                        </em>
                                        <em>
                                            <a href="">畅读VIP</a>
                                        </em> -->
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </transition>
        </div>
    </div>

</template>


<script>
import { mapState } from 'vuex';

export default {
    name: 'TypeNav',
    data() {
        return {
            showType: true,
            isshow: '',

        }
    },
    computed: {
        ...mapState({
            categoryList: (state) => {
                return state.home.categoryList
            }
        })
    },
    methods: {
        h3mouseEnter(e, index) {
            if (this.$route.path != "/home") {
                clearTimeout(this.timer1, this.timer2)
                this.showType = true
            }
            this.$refs.itemList[index].style.display = "block"

            e.target.style.backgroundColor = 'skyblue'
            // 拿到所有的item
            var Nodes = this.$refs.div.childNodes;
            // 怎么获取它们的第一个孩子
            for (var i = 0; i < Nodes.length; i++) {
                // 判断这些h3是不是那个h3,不是的话，就修改颜色
                if (Nodes[i].firstChild != e.target) {
                    Nodes[i].firstChild.style.backgroundColor = '#fafafa'
                }
            }
        },
        show(index, e) {
            if (this.$route.path != '/home') {
                this.isshow = true
                e.target.style.display = "block"
            }
            this.$refs.itemList[index].style.display = "block"
        },
        leave(index) {
            this.$refs.itemList[index].style.display = "none"
            if (this.$route.path != '/home') {
                this.isshow = false
                this.showType = false
            }
        },
        h3mouseLeave(e, index) {

            if (this.$route.path != "/home" && this.isshow == false) {
                this.timer1 = setTimeout(() => {
                    this.showType = false
                }, 0.001);

                //异步判断，如果进到右边，那就变成true
                this.timer2 = setTimeout(() => {
                    if (this.isshow == true) {
                        this.showType = true
                    }
                }, 0.001);
            }

            this.$refs.itemList[index].style.display = "none"
            e.target.style.backgroundColor = '#fafafa'

        },
        // 事件委托，判断发生事件的子元素。
        goSearch(e) {

            /* this.$refs.sort.style.display = "none" 
            // 拿到点击的 名称，一级菜单id， 二级菜单id，三级菜单id
            如果点击了， 先拿到搜索框的关键词，再确认路径， 拿到query参数（显示在路径上） params参数（不显示在路径上）
            把这些id全都合并到query对象， name是一定有的， 1,2,3,这是只能选其中1个而已。  传了params拼接在路径上，传了query{名字，id}            */

            let { categoryname, category1Id, category2Id, category3Id } = e.target.attributes
                if (categoryname) {
                   /*  let params = { keyword: this.$route.params.keyword || undefined }
                    let location = { path: `/search/${params.keyword}` } */
                    let location = {name:'search',params:{keyword:this.keyword}}

                    /*  location.params = params */
                    let query = { categoryName: categoryname.value }
                    if (category1Id) {
                        query.category1Id = category1Id.value
                    } else if (category2Id) {
                        query.category2Id = category2Id.value
                    } else if (category3Id) {
                        query.category3Id = category3Id.value
                    }
                    location.query = query
                    this.$router.push(location)

                }
            // 因为这是header的东西，肯定要向search跳转，然后传递参数。 如果是本页面的话，不知道要跳转吗，应该是要的。跳转是肯定要的，这样才有路由参数的使用。 路由变化，才有路由参数， 只不过不用重新挂载而已

        },
        showTypeNav(e) {

            if (this.$route.path != "/home") {
                this.showType = true

            }
        },
        unshowTypeNav(e) {

            if (this.$route.path != "/home") {
                this.showType = false

            }

        },
    },
    // 通知vuex发请求，获取数据，存储于仓库之中
    mounted() {

        if (this.$route.path != '/home') {
            this.showType = false

        }
    },

}
</script>

<style lang="less">
.typeNav {
    border-bottom: 2px solid #e1251b;

    .container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        position: relative;

        .all {
            width: 210px;
            height: 45px;
            background-color: #e1251b;
            line-height: 45px;
            text-align: center;
            color: #fff;
            font-size: 14px;
            font-weight: bold;
        }

        .nav {
            a {
                height: 45px;
                margin: 0 22px;
                line-height: 45px;
                font-size: 16px;
                color: #333;
            }
        }


        .sort {

            left: 0;
            top: 43px;
            width: 210px;
            height: 461px;
            position: absolute;
            background: #fafafa;
            z-index: 999;


            .all-sort-list2 {
                overflow-y: scroll;
                overflow-x: hidden;
                height: 100%;


                .item {
                    h3 {
                        line-height: 30px;
                        font-size: 14px;
                        font-weight: 400;
                        overflow: hidden;
                        padding: 0 20px;
                        margin: 0;

                        a {
                            color: #333;
                        }

                    }

                    .item-list {
                        display: none;
                        position: absolute;
                        width: 734px;
                        min-height: 460px;
                        background: #f7f7f7;
                        left: 209px;
                        border: 1px solid #ddd;
                        top: 0;
                        z-index: 9999 !important;

                        .subitem {
                            float: left;
                            width: 650px;
                            padding: 0 4px 0 8px;


                            dl {
                                border-top: 1px solid #eee;
                                padding: 6px 0;
                                overflow: hidden;
                                zoom: 1;

                                &.fore {
                                    border-top: 0;
                                }

                                dt {
                                    float: left;
                                    width: 54px;
                                    line-height: 22px;
                                    text-align: right;
                                    padding: 3px 6px 0 0;
                                    font-weight: 700;
                                }

                                dd {
                                    float: left;
                                    width: 415px;
                                    padding: 3px 0 0;
                                    overflow: hidden;

                                    em {
                                        float: left;
                                        height: 14px;
                                        line-height: 14px;
                                        padding: 0 8px;
                                        margin-top: 5px;
                                        border-left: 1px solid #ccc;
                                    }
                                }
                            }
                        }
                    }

                    /*  &:hover {
                            .item-list {
                                display: block;
                            }
                        }
                     */

                }

                &::-webkit-scrollbar {
                    width: 0;
                    height: 0;
                }

            }

        }

        .sort-enter {
            height: 0px;
        }

        .sort-enter-to {
            height: 461px;
        }

        .sort-enter-active {
            transition: all .5s linear
        }
    }
}
</style>