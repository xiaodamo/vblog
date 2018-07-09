<template>
    <div id="comment-jump" class="comments">
            <div id="comments" class="clearfix">
                <h3 id="comments-title">共{{page.counts}}条留言<router-link :to="'/toComment'" class="liuyan">我要留言</router-link></h3>
                <ul class="commentlist comdot" id="commentTarget">
                    <li class="comment byuser bypostauthor even thread-even depth-1 clearfix" v-for="item of list" :key="item.id">
                        <div class="comment-block" >
                            <div class="author-img"><img :src="item.avatar" class="avatar avatar-100" height="100" width="100"></div>
                            <div class="comment-body clearfix">
                                <div class="comment-name">
                                    <span class="arrow left"></span>
                                    <cite class="fn">{{item.name}}</cite><span class="fr">{{item.id}}L</span>
                                </div>
                                <div class="comment-text" >
                                    <p v-html="item.content"></p>
                                </div>
                                <div class="comment-info clearfix">
                                    <span class="comment-date">
                                    <a class="comment-time" href="javascript:void(0)">{{item.add_time}}</a>
                                    </span>
                                    <span class="comment-edit"></span>
                                </div>
                            </div>
                        </div>
                        <ul class="children" v-if="item.reply!=''">
                            <li class="comment odd alt depth-2 clearfix" >
                                <div class="comment-block" >
                                    <div class="author-img"><img src="@/assets/images/logo.jpg" class="avatar avatar-100" height="100" width="100">
                                    </div>
                                    <div class="comment-body clearfix">
                                        <div class="comment-name">
                                            <span class="arrow left"></span>
                                            <cite class="fn"><a href='javascript:void(0)' rel='external nofollow'
                                                                class='url'>博主小达摩 (回复)</a></cite> <span
                                                    class="fr"></span>
                                        </div>
                                        <div class="comment-text">
                                            <p v-html="item.reply"></p>
                                        </div>
                                        <div class="comment-info clearfix">
                                        <span class="comment-date">
                                        <a class="comment-time" href="javascript:void(0)">{{item.reply_time}}</a>
                                        </span>
                                            <span class="comment-edit"></span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <div class="clearfix"></div>
                </ul>
                <div style="padding-bottom: 20px;">
                    <div class="page">
                            <page :info="page"></page>
                    </div>
                </div>            
            </div>
        </div>
</template>

<script>
import page from 'common/page'
import { baseUrl } from '@/config/env'
export default {
  name: "ContactList",
  components: {
      page: page
  },
  props: {
    list: Array,
    page: Object
  },
  methods: {

        changeContactPage () {
            this.$emit('showContactPage')
        }

  },
  watch: {
     '$route': ['changeContactPage']
  },
};
</script>

<style scoped>
.comments {
    width: 95%;
    margin: 0 auto;
}

.comments #comments {
    display: inline-block;
    width: 90%;
    margin: 0 auto;
    padding: 0 10px 0 20px
}

.comments #comments #comments-title {
    position: relative;
    display: inline-block;
    width: 100%;
    font-size: 18px;
    padding: 5px 10px;
    margin: 10px 0 20px -20px;
    border-radius: 3px
}

.comments #comments #comments-title:before {
    display: none
}

.comments #comments .commentlist {
    position: relative;
    border-left: 1px solid #e8e2d2;
    display: block;
    padding: 15px 0;
    list-style-type: none !important;
    counter-reset: li
}

.comments #comments .commentlist li {
    position: relative;
    float: left;
    width: 100%;
    padding: 0 0 10px 0;
    margin: 0 0 10px 0;
    list-style: none
}

.comments #comments .commentlist li .commentcount {
    position: absolute;
    right: 7px;
    height: auto;
    top: 14px;
    z-index: 999
}

.comments #comments .commentlist li .comment-block {
    position: relative;
    padding: 10px 0 10px 30px;
    border: 0 !important
}

.comments #comments .commentlist li .comment-block .author-img {
    position: absolute;
    top: 10px;
    left: -21px;
    padding: 5px;
    width: 30px;
    height: 30px;
    background: #fff;
    box-shadow: 0 0 1px #bfb7a3;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.15) inset;
    border-radius: 46px
}

.comments #comments .commentlist li .comment-block .author-img img {
    display: block;
    max-width: none !important;
    width: 32px !important;
    height: 32px !important;
    border-radius: 32px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.22);
    -webkit-transition: .4s all ease-in-out;
    -moz-transition: .4s all ease-in-out;
    -o-transition: .4s all ease-in-out;
    -ms-transition: .4s all ease-in-out;
    transition: .4s all ease-in-out
}

.comments #comments .commentlist li .comment-block:hover .author-img img {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg)
}

.comments #comments .commentlist li .comment-block .comment-body {
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 0 1px #bfb7a3
}

.comments #comments .commentlist li .comment-block .comment-body .comment-name {
    position: relative;
    padding: 5px 10px;
    border-bottom: 1px solid #e8e2d2
}

.comments #comments .commentlist li .comment-block .comment-body .comment-name .arrow {
    position: absolute;
    left: 10px;
    top: 25px
}

.comments #comments .commentlist li .comment-block .comment-body .comment-name .arrow:before {
    position: absolute;
    display: inline-block;
    content: '';
    top: -15px;
    right: 10px;
    left: auto;
    border: 8px solid transparent;
    border-right-color: rgba(95, 95, 95, 0.15)
}

.comments #comments .commentlist li .comment-block .comment-body .comment-name .arrow:after {
    position: absolute;
    display: inline-block;
    content: '';
    top: -14px;
    right: 10px;
    left: auto;
    border: 7px solid transparent;
    border-right-color: #fff
}

.comments #comments .commentlist li .comment-block .comment-body .comment-name .fn, .comments #comments .commentlist li .comment-block .comment-body .comment-name .fn a {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold
}

.comments #comments .commentlist li .comment-block .comment-body .comment-name .author {
    margin-left: 5px;
    font-size: 12px
}

.comments #comments .commentlist li .comment-block .comment-body .comment-text {
    padding: 5px 10px;
    min-height: 60px
}

.comments #comments .commentlist li .comment-block .comment-body .comment-text p {
    font-size: 13px;
    line-height: 1.5em;
    margin: .5em 0 !important;
    word-wrap: break-word;
    text-indent: 0;
    clear: none
}

.comments #comments .commentlist li .comment-block .comment-body .comment-text blockquote {
    background: #eee;
    color: #888
}

.comments #comments .commentlist li .comment-block .comment-body .comment-info {
    padding: 5px 10px;
    color: #a49d8c
}

.comments #comments .commentlist li .comment-block .comment-body .comment-info a {
    color: #a49d8c
}

.comments #comments .commentlist li .comment-block .comment-body .comment-info a:hover {
    color: #333
}

.comments #comments .commentlist li .comment-block .comment-body .comment-info span {
    display: inline-block;
    line-height: 20px;
    font-size: 12px;
    margin-right: 8px
}

.comments #comments .commentlist li .comment-block .comment-body .comment-info .comment-date {
    float: right
}

.comments #comments .commentlist li .comment-block .comment-body .comment-info .comment-reply {
    float: left
}

.comments #comments .commentlist li .comment-block .comment-body .comment-info .comment-reply a:before {
    content: "\f112";
    font-family: FontAwesome;
    margin-right: 5px
}

.comments #comments #respond {
    padding-left: 30px;
    margin-bottom: 30px
}

.comments #comments #respond h3 {
    display: inline-block;
    font-size: 24px;
    font-weight: normal;
    margin: 10px 0
}

.comments #comments #respond label {
    display: none;
    position: absolute;
    top: 12px;
    left: 10px
}

.comments #comments #respond p {
    position: relative;
    margin-bottom: 10px
}

.comments #comments #respond .required {
    font-size: 10px
}

.comments #comments #respond input[type="text"] {
    width: 100%;
    height: 36px;
    padding: 5px 10px 5px 35px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-appearance: none
}

.comments #comments #respond input[type="text"]:focus {
    outline: 0
}

.comments #comments #respond textarea {
    padding: 10px 10px 40px;
    width: 100%;
    height: 200px;
    line-height: 22px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-appearance: none;
    resize: none
}

.comments #comments #respond textarea:focus {
    outline: 0
}

.comments #comments #respond .comment-form-comment {
    width: 100%;
    display: inline-block
}

.comments #comments #respond #wp-smiley {
    margin-bottom: 5px
}

.comments #comments #respond .comment-notes {
    display: none
}

.comments #comments #respond .form-submit {
    position: absolute;
    right: 1px;
    bottom: 6px;
    display: inline-block;
    float: right;
    width: 100%;
}

.comments #comments #respond #submit {
    width: 95px;
    text-align: center;
    font-size: 14px;
    border-bottom-right-radius: 3px;
    cursor: pointer;
    height: 38px;
    line-height: 38px;
    display: block;
    float:right;
    padding: 0 20px;
    outline: 0
}

.children {
    margin-left: 20px;
    padding-left: 5px
}

.children:after {
    clear: both;
    content: "";
    display: table
}

.children li {
    padding-left: 30px;
    margin-bottom: 0 !important;
    padding-bottom: 0 !important
}

.children li:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none !important
}

.depth-1 > .children {
    position: relative
}

.depth-1 > .children:before {
    content: '';
    position: absolute;
    left: -21px;
    width: 1px;
    height: 100%;
    background: #867f6f
}

#comments-title .liuyan{
    display: block;
    float: right;
    color:#009fff;
}

.fr {
    float: right !important;
}


</style>