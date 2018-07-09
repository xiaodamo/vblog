<template>

<div class="sidebar-new">
	<h4 class="sidebar-title">热门文章</h4>
	<div class="detail-recommend-article" v-if="firstHot">
		<h4 class="detail-recommend-article-title">
			<router-link class="detail-recommend-article-title-link" :to="'/detail/'+firstHot.id">{{firstHot.title}}</router-link>
		</h4>
		<p class="detail-recommend-article-summary">
			{{firstHot.content}}
		</p>

	</div>
	<ul class="info-list">
		<li class="info-list-item" v-for="item of otherHot" :key="item.id">
			<router-link class="info-list-link" :to="'/detail/'+item.id" v-bind:title="item.title">{{item.title}}</router-link>
		</li>

	</ul>
</div>

</template>

<script>
export default {
  name: "hots",
  props: {
    list: Array
  },
  computed: {
	  firstHot(){
		  let data = {}
		  if (this.list) {
			let arr = []
			arr = this.list.slice(0,1)
			data = arr[0]
			data.content = (data.content).replace(/<[^>]+>/g,"")
		  }

		  return data
		  
	  },
	  otherHot(){
		return this.list.slice(1)
	  }
  }
};
</script>

<style>
</style>


