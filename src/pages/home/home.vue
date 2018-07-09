<template>
<div>
    <common-header :info="baseInfo"></common-header>
    <div class="ms-column-list">
    <article-list :list="articleList"></article-list>
    </div>
    <common-footer></common-footer>
</div>
</template>
    
<script>
import CommonHeader from 'common/header'
import ArticleList from 'common/list'
import CommonFooter from 'common/footer'
import axios from 'axios'
import api from '@/config/api'
import { baseUrl } from '@/config/env'
export default {
    name : 'home' ,
    components : {
        CommonHeader,
        ArticleList,
        CommonFooter,
    },
    data () {
        return {
            baseInfo: {
                webname: '',
                categoryList: []
            },
            articleList: []
        }
    },
    methods : {
        getHomePage() {
            axios({
                method: 'post',
                baseURL: baseUrl,
                url: api.getHomePage,
                timeout: 10000,
            }).then(this.getHomePageRes)
        },
        getHomePageRes(res) {
            res = res.data
            if(res.status && res.data) {
                this.baseInfo.webname = res.data.webname
                this.baseInfo.categoryList = res.data.category
                this.articleList = res.data.news
            }
        },
    },
    mounted () {
        this.getHomePage()
    }

}
</script>

<style>

</style>
