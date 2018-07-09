<template>

<div class="sidebar-hottag">
	<h4 class="sidebar-title">热门标签</h4>
	<div class="sidebar-hottag-list">
									      
		<router-link :to="'/tags/'+item.id" v-bind:title="item.name" class="sidebar-hottag-item" v-for="item of list" :key="item.id">{{item.name}}</router-link>
		            					
	</div>
</div>

</template>

<script>
export default {
  name: "tags",
  props: {
    list: Array
  }
};
</script>

<style>
</style>


