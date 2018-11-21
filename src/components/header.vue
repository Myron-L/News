<template>
    <div class="base">
        <div class="bg">
            <div class="header-img">
                <div class="logo-top">
                    <img src="@/assets/logo_top.png" alt="BusinessNews" title="BusinessNews">
                </div>
                <div id="clock">
                    <p class="date">{{date}}</p>
                    <p class="time">{{time}}</p>
                    <p class="text">北京时间</p>
                </div>
            </div>
            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo head-menu"
                    mode="horizontal"
                    background-color="#a2a2a2"
                    text-color="#ffffff"
                    active-text-color="#ffffff"
                    :router=true>
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/World">国际</el-menu-item>
                <el-menu-item index="/Military">军事</el-menu-item>
                <el-menu-item index="/Image">图片</el-menu-item>
                <el-menu-item index="/History">历史</el-menu-item>
                <el-submenu class="login-hover" index="/Login">
                    <template  slot="title" >登陆</template>
                    <div style="width: 400px;height: 200px;">

                    </div>
                </el-submenu>
            </el-menu>
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
            activeIndex: this.$route.path,
            //时钟
            time: '',
            date: '',
            timerID : setInterval(this.updateTime, 1000),
        }
    },
    methods: {
        //时钟
        updateTime() {
            let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
            let cd = new Date();
            this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
            this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
        },
        zeroPadding(num, digit) {
            let zero = '';
            for(let i = 0; i < digit; i++) {
                zero += '0';
            }
            return (zero + num).slice(-digit);
        }
    },
    created() {

    },
    mounted() {
        this.updateTime();
    }
}
</script>
<style lang="scss" scoped>
    @import "~@/styles/themes.scss";
    .header-img{
        height: 150px;
        background: url("~@/assets/bg_header.png") no-repeat 250px 0;
        //line-height: 150px;
        .logo-top{
            padding-top: 60px;
            float: left;
            color: red;
        }
    }
    .head-menu{
        font-size: 50px;
        .login-hover{
            float: right;
        }
    }
    //时钟
    #clock {
        font-family: 'Share Tech Mono', monospace;
        text-align: center;
        color: black;
        float: right;
        margin-top: 20px;
        /*text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);*/
    }
    #clock .time {
        letter-spacing: 0.05em;
        font-size: 60px;
        padding: 5px 0;
    }
    #clock .date {
        letter-spacing: 0.1em;
        font-size: 20px;
    }
</style>