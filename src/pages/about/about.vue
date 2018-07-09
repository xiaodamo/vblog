<template>
<div>
    <common-header :info="baseInfo"></common-header>
    <common-navi :navInfo="navInfo"></common-navi>
    <about :info="about"></about>
    <common-footer></common-footer>
</div>
</template>
    
<script>
import CommonHeader from 'common/header'
import CommonNavi from 'common/navi'
import about from './components/info'
import CommonFooter from 'common/footer'
import page from 'common/page'
import axios from 'axios'
import api from '@/config/api'
import { baseUrl } from '@/config/env'
export default {
    name : 'tags' ,
    components : {
        CommonHeader,
        CommonNavi,
        about,
        CommonFooter,
    },
    data () {
        return {
            baseInfo: {
                webname: '',
                categoryList: []
            },
            navInfo: {},
            about: {},
        }
    },
    methods : {
        getInfo() {
            axios({
                method: 'post',
                baseURL: baseUrl,
                url: api.getAbout,
                timeout: 10000,
            }).then(this.getInfoRes)
        },
        getInfoRes(res) {
            res = res.data
            if(res.status && res.data) {
                this.baseInfo.webname = res.data.webname
                this.baseInfo.categoryList = res.data.category
                this.navInfo = {
                    navType : 'aboutme',
                    first : {},
                    second : {id:'',name:'关于小达摩'},
                }
                this.about = res.data.about
            }
        },
    },
    watch: {
        '$route': ['getInfo']
    },
    mounted () {
        this.getInfo()
    }

}
</script>

<style>

</style>
