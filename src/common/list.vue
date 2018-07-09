<template>
        <ul class="mr moreList">
            <li class="clear_fix" v-for="item of list" :key="item.id">
                <div class="column-img left">
                    <router-link :to="'/detail/' + item.id"><img :src="item.img_url" /></router-link>
                </div>
                <div class="column-text left">
                    <h2><router-link :to="'/detail/' + item.id">{{item.title}}</router-link></h2> 
                    <p class="dateview">
                        <span><router-link :to="'/category/' + item.cid">{{item.name}}</router-link></span>
                        <span>{{item.add_time}} </span><span>{{item.click_nums}}人浏览</span>
                    </p>
                </div>
            </li>
        </ul>
</template>
    
<script>
    export default {
        name : 'ArticleList',
        props: {
            list: Array
        }
    }
</script>

<style>

</style>
