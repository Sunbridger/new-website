<style lang="less">
    .pg-watchTb {
        padding: 23px;
    }
</style>
<template>
    <div class="pg-watchTb">
        添加商品页面
    </div>
</template>
<script>

/**
 * @param {String} url jd商品链接
 * @param {Object} good jd商品的属性
 * @param {Boolean} load 是否可点击加载中判断
 * @param {String} svgHtml svg的验证码
 * @param {Object} methods
 * @param {Function} methods.submit 提交商品
 * @param {Function} methods.getCap 获取验证码
 */

import { get } from 'api';

export default {
    data() {
        return {
            url: '',
            good: {},
            load: false,
            svgHtml: '',
            text: '',
            verification: ''
        }
    },
    methods: {

        submit() {
            if (this.verification) {
                if (this.verification.toLocaleLowerCase() !== this.text.toLocaleLowerCase()) {
                    this.$message('验证码错误');
                    return;
                }
                this.load = true;
                let good_url = this.url.split('?')[0];
                if (!good_url.includes('https')) {
                    this.$message('请输入JD商品的链接');
                    this.load = false;
                    return;
                }
                get('/getJDinfo', {good_url}).then(({data}) => {
                    if (!data.good_title) {
                        this.$message('商品链接有误，请重试');
                    } else {
                        this.good = data;
                        localStorage.setItem('addItem', true);
                    }
                }).catch(() => {
                    this.url = '';
                    this.$message('暂时不支持搞活动的商品 敬请期待');
                }).finally(() => {
                    this.load = false;
                    this.verification = '';
                    this.getCap();
                });
            } else {
                this.$message('请输入验证码');
            }
        },
        getCap() {
            get('/getcap').then(({data}) => {
                this.text = data.text;
                this.svgHtml = data.data;
            })
        }
    },
    created() {
        this.getCap();
    },
    components: {

    }
};
</script>
