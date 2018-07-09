<template>
<div class="ms-header">
    <div class="mr clear_fix">    

        <div class="ms-back-top left">
            <router-link :to="'/'">{{info.webname}}</router-link>
        </div>
	    <div class="ms-i right clear_fix">
            <a href="#" @click="menuClick(disMenu)"> <i class="ms-pull right"></i></a>
        </div>

        <!--博客栏目列表-->
        <div class="ms-menu" :class="{show:disMenu}" >
            <div class="m_title">
                <span>快速导航</span><a href="javascript:void(0)" @click="menuClick(disMenu)" class="close-menu" ></a>
            </div>

            <div class="mr">
                <dl class="clear_fix" v-for="item of info.categoryList" :key="item.id">
                    <dt @click="menuClick(disMenu)"><router-link :to="'/category/'+item.id" >{{item.text}}</router-link></dt>
                    <dd @click="menuClick(disMenu)"><router-link v-for="child of item.children" :key="child.id" :to="'/category/'+child.id" >{{child.text}}</router-link></dd>
                </dl>
            </div>
        </div>

	</div>

</div> 
</template>
    
<script>
export default {
    name : 'CommonHeader',
    props: {
        info: Object,
    },
    data(){
        return {
            disMenu: false,
        }
    },
    methods:{
        menuClick (disMenu) {
            this.disMenu = !disMenu
        }
    }
}
</script>

<style>

</style>
