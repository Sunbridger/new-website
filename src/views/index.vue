<style lang="less">
    .pg-index {
        .van-swipe-item {
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            background-color: #39a9ed;
        }
        .banner-img {
            width: 100%;
            height: 80px;
        }
    }
</style>

<template>
    <div class="pg-index">
        <!-- 顶部搜索 -->
        <van-search
            v-model="searchVal"
            shape="round"
            @search="searchFn"
            placeholder="请输入搜索关键词"
        />
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <!-- 导航标签 -->
        <van-grid>
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
        <!-- banner图 -->
        <img class="banner-img" src="https://alp.alicdn.com/1599861232706-2100-220.png" alt="">
    </div>
</template>

<script>
export default {
    components: {

    },
    props: {

    },
    data() {
        return {
            searchVal: ''
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        searchFn() {
            console.log(this.searchVal);
        }
    },
    computed: {

    },
    watch: {

    }
};
</script>
