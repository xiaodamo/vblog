<template>

<div class="ms-content">
    <div class="ms-about" v-html="info.content">
    </div>
    <div class="ms-about-c">
            <p>网名：<span>xiaodamo</span> | 小达摩</p>
            <p>籍贯：辽宁省—沈阳市</p>
            <p>现居：辽宁省—沈阳市</p>
            <p>年龄：33</p>
            <p>职业：PHP开发</p>
            <p>技能掌握：Html、PHP、测试</p>
            <p>喜欢的电影：《速度与激情7》</p>
            <p>喜欢的书：《明朝那些事》</p>
            <p>喜欢的音乐：《绅士》《一半》</p>
    </div>
</div>


</template>

<script>
export default {
  name: "aboutInfo",
  props: {
    info: Object
  }
};
</script>

<style>
</style>


