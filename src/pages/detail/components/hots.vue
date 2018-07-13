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
			data.content = this.subString((data.content).replace(/<[^>]+>/g,""), 100, true)
		  }

		  return data
		  
		},
	  otherHot(){
			return this.list.slice(1)
	  }
	},
	methods:{
		subString(str, len, hasDot) {
            let newLength = 0
            let newStr = ""
            let chineseRegex = /[^\x00-\xff]/g
            let singleChar = ""
            let strLength = str.replace(chineseRegex, "**").length
            for (let i = 0; i < strLength; i++) {
                singleChar = str.charAt(i).toString()
                if (singleChar.match(chineseRegex) != null) {
                    newLength += 2
                }
                else {
                    newLength++
                }
                if (newLength > len) {
                    break
                }
                newStr += singleChar
            }

            if (hasDot && strLength > len) {
                newStr += "..."
            }
            return newStr
		},
	}
};
</script>

<style>
</style>


