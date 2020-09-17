<style lang="less">
    @import '../src/styles/common.less';
    body {
        margin: 0;
        padding: 0;
        font-family: Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    }
</style>

<template>
    <div id="app">
        <router-view></router-view>

        <van-tabbar route>
            <van-tabbar-item to="/index" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item to="/mall" icon="hot-sale-o">商城</van-tabbar-item>
            <van-tabbar-item to="/weibo" icon="eye-o">热点新闻</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

import { get } from 'api';

export default {
    name: 'app',
    created() {
        this.$router.replace('index');
        this.trackFn();
    },
    methods: {
        trackFn() {
            get('/sendmaidian', {
                ua: navigator.userAgent
            });
        }
    }
};

</script>
