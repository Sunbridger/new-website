<style lang="less">
    .refress {
        background: rgba(221, 122, 23, .6);
        border-radius: 50%;
        width: 45px;
        height: 45px;
        text-align: center;
        line-height: 45px;
        color: #909399;
        font-size: 12px;
        float: right;
    }
    .icon-text {
        width: 16px;
        height: 16px;
        vertical-align: -3px;
        margin: 0 5px;
    }
    .ele-index {
        color: #f26d5f;
        margin-right: 4px;
    }
    .text-num {
        color: #808080;
        margin-left: 10px;
    }
    .text-body-box {
        padding: 25px 12px 0 12px;
        height: 100%;
    }
    .is-img-center {
        margin: 0 auto;
        display: block;
    }
</style>
<template>
    <div class="co-visit-data-box">
        <div class="text-body-box" v-if="todayhotData.length">
            <img class="is-img-center" src="https://img.t.sinajs.cn/t4/appstyle/searchpc/css/pc/img/search_logo.png" @click="init" />
            <div v-for="(el, index) in todayhotData" :key="el.text">
                <p>
                    <el-link :href="el.link">
                        <span class="ele-index">{{index+1}}.</span>
                        {{el.text}}
                        <span class="text-num">{{el.num}}</span>
                        <img v-if="el.icon" :src="el.icon" class="icon-text" />
                    </el-link>
                </p>
            </div>
        </div>
        <div class="text-body-box" v-if="bingduData.length">
            <center>《病毒相关新闻》</center>
            <div v-for="(el, index) in bingduData" :key="el.text">
                <p>
                    <el-link :href="el.link">
                        <span class="ele-index">{{index+1}}.</span>
                        {{el.text}}
                        <span class="text-num">{{el.num}}</span>
                        <img v-if="el.icon" :src="el.icon" class="icon-text" />
                    </el-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>

import { get } from 'api';

export default {
    data() {
        return {
            todayhotData: [],
            bingduData: []
        };
    },
    methods: {
        init() {
            get('/todayhot').then((data) => {
                this.todayhotData = data;
            });
            get('/getVirus').then((data) => {
                this.bingduData = data;
            });
        }
    },
    mounted() {
        this.init();
    }
};
</script>
