<template>
<div>
<!--正文-->
<div class="ms-content">
<!--文章信息-->
<div class="content_p">
		<div class="ms-content-title mr">
			<h1>{{info.title}}</h1>
			<div class="ms-content-s clear_fix">
				<span class="left">时间：{{info.add_time}}</span>
				
				<span class="right">阅读：<span id="countnum">{{info.click_nums}}</span></span>
			</div>
		</div>
	</div>
<div class="content_pading">
<!--文章内容-->
<div class="ms-content-p" v-html="info.content">
</div>

<!--本文标签-->
		<div class="ms-article-tag">
		<strong>标签：</strong>
		
		<router-link :to="'/tags/'+item.id" class="ms-article-tag-link" v-for="item of info.mytag" :key="item.id">{{item.name}}</router-link>
		
		</div>
<!--原创声明-->
<div class="ms-authorbio">
			<img alt="小达摩" src="@/assets/images/logo.jpg" class="avatar">
			<ul class="spostinfo">
				<li><strong>版权声明：</strong>原创文章由<router-link :to="'/'" rel="author">{{info.author}}</router-link>发表在
                <router-link :to="'/category/' + others.cateInfo.id" rel="category tag">{{others.cateInfo.text}}</router-link>分类下，{{info.update_time}}最后更新，转载注明出处。</li>
			</ul>
		</div>

</div>
</div>
<div class="ms-detail-ft">
<!--相关推荐-->
<recommands :list="others.recommands"></recommands>
<!--相关推荐-->
<!--上下篇-->
<div class="detail-pages">
<div class="detail-pages-item detail-pages-prev"><span class="detail-pages-label">上一篇：</span><span class="detail-pages-tit">
    <router-link v-if="info.alongs.pre.id!=undefined" :to="'/detail/'+info.alongs.pre.id" class="detail-pages-link">{{info.alongs.pre.title}}</router-link>
    <router-link v-else :to="'#'" class="detail-pages-link">没有了
    </router-link>
    </span>
</div>
<div class="detail-pages-item detail-pages-next"><span class="detail-pages-label">下一篇：</span><span class="detail-pages-tit">
    <router-link v-if="info.alongs.next.id!=undefined" :to="'/detail/'+info.alongs.next.id" class="detail-pages-link">{{info.alongs.next.title}}
    </router-link>
    <router-link v-else :to="'#'" class="detail-pages-link">没有了
    </router-link>
    </span> 
</div>
</div>
</div>

<!--热门标签-->
<tags :list="others.tags"></tags>
<!--热门标签-->
<!--热门文章-->
<hots :list="others.hots"></hots>
<!--热门文章-->

</div>
</template>

<script>
import recommands from './recommands'
import hots from './hots'
import tags from './tags'
export default {
    name : 'DetailInfo',
	components : {
        recommands,
        hots,
        tags,
    },
    props: {
        info: Object,
        others: Object,
    }
}
</script>

<style>

</style>


