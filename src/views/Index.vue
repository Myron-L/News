<template>
    <div v-title data-title="新闻首页" class="page">
        <div class="main-content">
            <div class="block-special-topic">
                <div class="type">
                    <p>Special topics</p>
                </div>
                <div class="title">
                    <p>LONG ESTABLISHED FACT THAT A READER BE DISTRACTED.</p>
                </div>
            </div>
            <div style="height:17px;"></div>
            <div class="block-home-slider">
                <div class="block">
                    <el-carousel
                            trigger="click">
                        <el-carousel-item v-for="(item,index) in picHomeSliderList" :key="index">
                            <img :src="item.imgUrl"/>
                            <div class="caption">
                                <div class="title">
                                    {{item.title}}
                                </div>
                                <p>
                                    {{item.content}}
                                </p>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div class="line_2"></div>
            <!--<div class="block_home_col_1" >-->
            <!--<div class="block_home_post" v-for="(item, index) in picHomeNewsLiftList" :key="index">-->
            <!--<div class="pic">-->
            <!--<img :src="item.imgUrl"/>-->
            <!--</div>-->
            <!--<div class="text">-->
            <!--<p class="title">-->
            <!--{{item.title}}-->
            <!--</p>-->
            <!--<div class="date">-->
            <!--<p>11 July, 2012</p>-->
            <!--</div>-->
            <!--<div class="icons">-->
            <!--<ul>-->
            <!--<li>-->
            <!--<a href="#" class="views">56</a>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="block_home_col_2">-->
            <!--<div class="block_home_post" v-for="(item, index) in picHomeNewsRightList" :key="index">-->
            <!--<div class="pic">-->
            <!--<img :src="item.imgUrl"/>-->
            <!--</div>-->
            <!--<div class="text">-->
            <!--<p class="title">-->
            <!--{{item.title}}-->
            <!--</p>-->
            <!--<div class="date">-->
            <!--<p>11 July, 2012</p>-->
            <!--</div>-->
            <!--<div class="icons">-->
            <!--<ul>-->
            <!--<li>-->
            <!--<a href="#" class="views">56</a>-->
            <!--</li>-->
            <!--</ul>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->

            <!--</div>-->
            <h3 class="main-news">Main News</h3>
            <div class="block_topic_news">
                <article class="block_topic_post" v-for="(item, index) in mainNewsList" :key="index">
                    <p class="title">
                        <a href="#">
                            {{item.title}}
                        </a>
                    </p>
                    <div class="f_pic">
                        <a href="#" class="general_pic_hover scale initialized">
                            <img :src="item.imgUrl" alt="">
                        </a>
                    </div>
                    <p class="text">
                       {{item.text}}
                    </p>
                    <div class="info">
                        <div class="date">
                            <p>{{item.date}}</p>
                        </div>
                        <div class="r_part">
                            <div class="category">
                                <p><a href="#">Business</a></p>
                            </div>
                            <a href="#" class="views">{{item.views}}</a>
                        </div>
                    </div>
                </article>
            </div>
            <!--分页-->
            <div class="block_pager">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        @current-change="handleCurrentChange"
                        :page-size=4
                        :total="mainNewsTotalNum">
                </el-pagination>
            </div>

        </div>
        <div class="sidebar">
            <div class="block_popular_posts">
                <h4>Popular Posts</h4>
                <div class="block_home_col_1" >
                    <div class="block_home_post" v-for="(item, index) in popularPostsList" :key="index">
                        <div class="pic">
                            <img :src="item.imgUrl"/>
                        </div>
                        <div class="text">
                            <p class="title">
                                {{item.title}}
                            </p>
                            <div class="date">
                                <p>11 July, 2012</p>
                            </div>
                            <div class="icons">
                                <ul>
                                    <li>
                                        <a href="#" class="views">56</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="block_popular_stuff">
                <h4>Popular Photo<a href="#">Show all photos</a></h4>
                <div class="media" v-for="(item,index) in popularPhotoList" :key="index">
                    <div class="media-img">
                        <a href="#">
                            <img :src="item"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */

export default {
    name: '',
    components: {},
    data() {
        return {
            picHomeSliderList : [
                {
                    imgUrl:require( '@/assets/pic_home_slider_1.jpg'),
                    title:'Many desktop publishing packages and web page.',
                    content:'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised.'
                },
                {
                    imgUrl:require( '@/assets/pic_home_slider_2.jpg'),
                    title:'Many desktop publishing packages and web page.',
                    content:'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised.'
                },
                {
                    imgUrl:require( '@/assets/pic_home_slider_3.jpg'),
                    title:'Many desktop publishing packages and web page.',
                    content:'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised.'
                },
                {
                    imgUrl:require( '@/assets/pic_home_slider_4.jpg'),
                    title:'Many desktop publishing packages and web page.',
                    content:'There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised.'
                }

            ],
            popularPostsList : [
                {
                    imgUrl:require( '@/assets/pic_home_slider_1.jpg'),
                    title:'Many variations of of available, but the majority.'
                },
                {
                    imgUrl:require( '@/assets/pic_home_slider_2.jpg'),
                    title:'Many variations of of available, but the majority.'
                },
                {
                    imgUrl:require( '@/assets/pic_home_slider_3.jpg'),
                    title:'Many variations of of available, but the majority.'
                },
                {
                    imgUrl:require( '@/assets/pic_home_slider_4.jpg'),
                    title:'Many variations of of available, but the majority.'
                }
            ],
            mainNewsList : [
                {
                    imgUrl:require( '@/assets/pic_home_main_news_1.jpg'),
                    title:'Many desktop publishing packages and web page editors now use.',
                    text:'There are many variations of passages of available, but the majority have alteration.',
                    date:'11 July, 2012',
                    views:'150'
                },
                {
                    imgUrl:require( '@/assets/pic_home_main_news_2.jpg'),
                    title:'Many desktop publishing packages and web page editors now use.',
                    text:'There are many variations of passages of available, but the majority have alteration.',
                    date:'11 July, 2012',
                    views:'150'
                },
                {
                    imgUrl:require( '@/assets/pic_home_main_news_3.jpg'),
                    title:'Many desktop publishing packages and web page editors now use.',
                    text:'There are many variations of passages of available, but the majority have alteration.',
                    date:'11 July, 2012',
                    views:'150'
                },
                {
                    imgUrl:require( '@/assets/pic_home_main_news_4.jpg'),
                    title:'Many desktop publishing packages and web page editors now use.',
                    text:'There are many variations of passages of available, but the majority have alteration.',
                    date:'11 July, 2012',
                    views:'150'
                },
            ],
            popularPhotoList : [
                require('@/assets/pic_home_slider_1.jpg'),
                require('@/assets/pic_home_slider_2.jpg'),
                require('@/assets/pic_home_slider_3.jpg')
            ],
            mainNewsTotalNum : 20
        }
    },
    methods: {
        handleCurrentChange(val){
            let tempList = [];
            for (let i=0;i<4;i++){
                tempList.push(this.mainNewsList.pop());
            }
            this.mainNewsList = tempList;
        }
    },
    created() {
    },
    mounted() {
    }
}

</script>
<style lang="scss" scoped>
    .main-content{
        width: 60%;
        float: left;
        .block-special-topic{
            height: 24px;
            .type{
                height: 100%;
                float: left;
                background-color: #f24024;
                padding: 0 7px 0 8px;
                border-radius:2px 0 0 2px;
                position:relative;
                p{
                    margin: 0;
                    font-size: 11px;
                    color: #ffffff;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 24px;
                }
            }
            .title{
                height: 100%;
                overflow: hidden;
                background: url("~@/assets/arrow_13.png") no-repeat #f4f4f4;
                p{
                    height: 24px;
                    margin: 0;
                    line-height: 24px;
                    padding-left: 15px;
                    font-size: 11px;
                    color: #383838;
                    font-weight: bold;
                    text-transform: uppercase;
                }
            }
        }
        .block-home-slider{
            padding: 1px;
            position: relative;
            background-color: #ffffff;
            border: 4px solid #f2f2f2;

            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }

            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
            img{
                width: 100%;
            }
            .caption{
                padding: 10px;
                position: relative;
                bottom: 100px;
                background: #000000a3;
                height: 100px;
                color: white;
                p{
                    margin-top: 10px;
                    font-size: 13px;
                    color: #cccccc;
                }
            }
        }
        .main-news{
            padding-bottom: 20px;
            border-bottom: 2px solid #cccccc;
            font-family: Arial, Helvetica, sans-serif;
            color: #1a1a1a;
            line-height: 1em;
            font-size: 16px;
            font-weight: bold;
        }
        .block_topic_news{
            margin-left: -20px;
            margin-bottom: -20px;
            margin-top: 10px;
            overflow: hidden;
            .block_topic_post{
                width: 41%;
                margin-left: 20px;
                margin-bottom: 20px;
                float: left;
                padding: 12px 16px 0;
                position: relative;
                background-color: #ffffff;
                border: 1px solid #ededed;
                .title{
                    padding-bottom: 13px;
                    line-height: 18px;
                    a{
                        font-size: 13px;
                        color: #383838;
                        font-weight: bold;
                    }
                }
                .f_pic{
                    margin-bottom: 13px;
                    padding: 1px;
                    display: inline-block;
                    background-color: #ffffff;
                    border: 4px solid #f2f2f2;
                    line-height: 0;
                    img{
                        width: 240px;
                        height: auto;
                    }
                }
                .text{
                    padding-bottom: 15px;
                    color: #666666;
                    line-height: 18px;
                }
                .info{
                    border-top: 1px solid #f2f2f2;
                    .date{
                        height: 40px;
                        float: left;
                        p{
                            font-size: 11px;
                            color: #868686;
                            line-height: 40px;
                        }
                    }
                    .r_part{
                        float: right;
                        .category{
                            height: 40px;
                            float: left;
                            p{
                                font-size: 9px;
                                color: #5a8ea1;
                                text-transform: uppercase;
                                line-height: 42px;
                                a{
                                    font-size: 9px;
                                    color: #5a8ea1;
                                    text-transform: uppercase;
                                }
                            }
                        }
                        .views{
                            height: 40px;
                            line-height: 40px;
                            margin-left: 9px;
                            padding-left: 21px;
                            float: left;
                            display: block;
                            background: url("~@/assets/icon_view_1.png") no-repeat 0 15px;
                            font-size: 11px;
                            color: #8a8a8a;
                        }
                    }
                }
            }
        }
        .block_pager{
            padding-top:  20px;
            margin: auto;
            text-align: center;
        }
    }
    .line_2{
        height: 5px;
        clear: both;
        overflow: hidden;
        background: url("~@/assets/line_2.gif") repeat-x;
        margin:15px 0 28px;
    }
    .block_home_post{
        height: 80px;
        margin: 10px 0 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #cccccc;
        overflow: hidden;
        .pic{
            border: 3px solid #f2f2f2;
            margin-right: 12px;
            float: left;
            img{
                height: 60px;
            }
        }
        .text{
            overflow: hidden;
            .title{
                margin: 0;
                padding-bottom: 10px;
                color: #343434;
                font-weight: bold;
                line-height: 17px;
            }
            .date{
                float: left;
                p{
                    padding-bottom: 0;
                    font-size: 12px;
                    color: #868686;
                }
            }
            .icons{
                float: right;
                ul{
                    margin: 0;
                    list-style: none;
                    li{
                        margin-left: 0;
                        display: block;
                        float: left;
                        font-size: 0;
                        a{
                            padding-left: 20px;
                            padding-bottom: 1px;
                            background-repeat: no-repeat;
                            background-position: 0 1px;
                            text-decoration: none;
                            display: block;
                            font-size: 12px;
                            color: #919191;
                            line-height: 1em;
                        }
                        .views{
                            background-image: url("~@/assets/icon_view_1.png")
                        }

                    }
                }

            }
        }
    }
    .sidebar{
        float: right;
        width: 39%;
        .block_popular_posts{
            h4{
                padding-bottom: 14px;
                font-size: 14px;
                font-weight: bold;
                color: #1a1a1a;
            }
        }
        .block_popular_stuff{
            padding-bottom: 18px;
            h4{
                a{
                    position: relative;
                    left: 150px;
                    font-weight: normal;
                    font-size: 12px;
                    color:  #919191;
                }
            }
            .media{
                margin-bottom: 8px;
                padding: 1px;
                position: relative;
                background-color: #ffffff;
                border: 4px solid #f2f2f2;
                .media-img{
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
</style>