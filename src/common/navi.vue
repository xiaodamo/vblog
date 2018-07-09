<template>
<div class="ms-crumb"><router-link :to="'/'">主页</router-link> > 
<template v-if="navInfo.first.id != undefined"><router-link :to="'/'+navInfo.navType+'/'+navInfo.first.id">{{navInfo.first.name}}</router-link> > </template>
<template v-if="navInfo.second.id != undefined"><router-link :to="'/'+navInfo.navType+'/'+navInfo.second.id">{{navInfo.second.name}}</router-link> </template>
</div>
</template>
    
<script>
export default {
    name : 'CommonNavi',
    props: {
        navInfo:Object,
    },
}
</script>

<style>

</style>
