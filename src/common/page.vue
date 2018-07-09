<template>
<div class="page" v-if="info.counts>0">
        
        <template v-for="item of getPageList" >
            <b v-if="parseInt(item.id) === parseInt(info.currentPage)" :key="item.id">{{item.id}}</b>
            <router-link v-else :to="info.pageUrI + item.id" :key="item.id">{{item.id}}</router-link>
        </template>

</div> 
</template>
    
<script>
    export default {
        name : 'page',
        props: {
            info: Object,
        },
        computed: {
            getPageList(){
                let pages = parseInt(this.info.pageNums)
                let list = []
                if(pages>1){
                    for(let i=0;i<pages;i++){
                        list.push({id:i+1})
                    }
                }
                
                return list
            }
        }
    }
</script>

<style>

</style>
