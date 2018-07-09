<template>
<div>
    <common-header :info="baseInfo"></common-header>
    <common-navi :navInfo="navInfo"></common-navi>
    <div class="ms-column-list">
        <article-list :list="articleList"></article-list>
        <page :info="pageInfo"></page>
    </div>
    <common-footer></common-footer>
</div>
</template>
    
<script>
import CommonHeader from 'common/header'
import CommonNavi from 'common/navi'
import ArticleList from 'common/list'
import CommonFooter from 'common/footer'
import page from 'common/page'
import axios from 'axios'
import api from '@/config/api'
import { baseUrl } from '@/config/env'
export default {
    name : 'category' ,
    components : {
        CommonHeader,
        CommonNavi,
        ArticleList,
        page,
        CommonFooter,
    },
    data () {
        return {
            baseInfo: {
                webname: '',
                categoryList: []
            },
            navInfo: {},
            articleList: [],
            pageInfo: {
                currentPage: 1,
                counts: 0,
                pageUrI: '/category/'+this.$route.params.id+'/',
                pageNums: 0
            }
            
        }
    },
    methods : {
        getList() {
            axios({
                method: 'post',
                baseURL: baseUrl,
                url: api.getList,
                params: {
                    id: this.$route.params.id,
                    p: this.$route.params.p
                },
                timeout: 10000,
            }).then(this.getListRes)
        },
        getListRes(res) {
            res = res.data
            if(res.status && res.data) {
                this.baseInfo.webname = res.data.webname
                this.baseInfo.categoryList = res.data.category
                this.navInfo = {
                    navType : 'category',
                    first : res.data.parent_cate? {id : res.data.parent_cate.id, name : res.data.parent_cate.text}:{},
                    second : res.data.cate_info? {id : res.data.cate_info.id, name : res.data.cate_info.text}:{},
                }
                this.articleList = res.data.articles
                this.pageInfo.currentPage = res.data.p?res.data.p:1
                this.pageInfo.counts = res.data.counts
                this.pageInfo.pageNums = res.data.pageNums
            }
        },
    },
    watch: {
        '$route': ['getList']
    },
    mounted () {
        this.getList()
    }

}
</script>

<style>

</style>
