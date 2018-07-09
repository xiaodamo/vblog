<template>

<div class="detail-recommend">
		<h4 class="detail-recommend-title">相关推荐</h4>
		<div class="info-list detail-recommend-list">
			<div class="c-grid c-grid-expand">
                <div class="c-g-12" v-for="item of list" :key="item.id">
					<li class="info-list-item"><router-link class="info-list-link" :to="'/detail/'+item.id">{{item.title}}</router-link></li>
				</div>

			</div>
		</div>
</div>

</template>

<script>
export default {
  name: "recommands",
  props: {
    list: Array
  }
};
</script>

<style>
</style>


