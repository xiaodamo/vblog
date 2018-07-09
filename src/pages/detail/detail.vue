<template>
<div>
    <common-header :info="baseInfo"></common-header>
    <common-navi :navInfo="navInfo"></common-navi>
    <detail-info :info="article" :others="others"></detail-info>
    <common-footer></common-footer>
</div>
</template>

<script>
import CommonHeader from 'common/header'
import CommonNavi from 'common/navi'
import DetailInfo from './components/info'
import CommonFooter from 'common/footer'
import axios from 'axios'
import api from '@/config/api'
import { baseUrl } from '@/config/env'
export default {
    name : 'detail',
    components : {
        CommonHeader,
        CommonNavi,
        DetailInfo,
        CommonFooter,
    },
    data () {
        return {
            baseInfo: {
                webname: '',
                categoryList: []
            },
            article: {},
            navInfo: {},
            others:{
                recommands: [],
                hots: [],
                tags: [],
                cateInfo: {}
            }

        }
    },
    methods : {
        getDetail() {
            axios({
                method: 'post',
                baseURL: baseUrl,
                url: api.getDetail,
                params: {
                    id: this.$route.params.id
                },
                timeout: 10000,
            }).then(this.getDetailRes)
        },
        getDetailRes(res) {
            res = res.data
            if(res.status && res.data) {
                this.baseInfo.webname = res.data.webname
                this.baseInfo.categoryList = res.data.category
                this.article = res.data.article
                this.navInfo = {
                    navType : 'category',
                    first : res.data.parent_cate? {id : res.data.parent_cate.id, name : res.data.parent_cate.text}:{},
                    second : res.data.cate_info? {id : res.data.cate_info.id, name : res.data.cate_info.text}:{},
                }
                this.others={
                    recommands : res.data.recommand,
                    hots : res.data.hotviews,
                    tags : res.data.tags,
                    cateInfo : res.data.cate_info
                }
            }
            
        },
    },
    watch: {
        '$route': ['getDetail']
    },
    mounted () {
        this.getDetail()
    }
}
</script>

<style>

</style>


