<template>
<div>
    <common-header :info="baseInfo"></common-header>
    <common-navi :navInfo="navInfo"></common-navi>
    <contact-list :list="contactList" :page="pageInfo" @showContactPage="getContact"></contact-list>
    <common-footer></common-footer>
</div>
</template>
    
<script>
import CommonHeader from 'common/header'
import CommonNavi from 'common/navi'
import ContactList from './components/list'
import CommonFooter from 'common/footer'
import page from 'common/page'
import axios from 'axios'
import api from '@/config/api'
import { baseUrl } from '@/config/env'
export default {
    name : 'contact' ,
    components : {
        CommonHeader,
        CommonNavi,
        ContactList,
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
            contactList: [],
            pageInfo: {
                currentPage: 1,
                counts: 0,
                pageUrI: '/contact/',
                pageNums: 0
            }
            
        }
    },
    methods : {
        getContact() {
            axios({
                method: 'post',
                baseURL: baseUrl,
                url: api.getContact,
                params: {
                    p: this.$route.params.p
                },
                timeout: 10000,
            }).then(this.getContactRes)
        },
        getContactRes(res) {
            res = res.data
            if(res.status && res.data) {
                this.baseInfo.webname = res.data.webname
                this.baseInfo.categoryList = res.data.category
                this.navInfo = {
                    navType : 'contact',
                    first : {},
                    second : {id:'',name:'留言板'},
                }
                this.contactList = res.data.contacts
                this.pageInfo.currentPage = res.data.p?res.data.p:1
                this.pageInfo.counts = res.data.counts
                this.pageInfo.pageNums = res.data.pageNums
            }
        },
    },
    watch: {
        '$route': ['getContact']
    },
    mounted () {
        this.getContact()
    }

}
</script>

<style>

</style>
