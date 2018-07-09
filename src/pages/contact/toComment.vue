<template>
    <div id="respond" class="comments comment-respond">
        <h3 id="reply-title" class="comment-reply-title">发表留言
            <small>
                <div id="cancel-comment-reply-link" style="display:none;"><i class="icon-remove-sign"></i>
                </div>
            </small>
        </h3>
        <div id="commentform" class="comment-form" >
            <p class="comment-notes"><span id="email-notes">电子邮件地址不会被公开。</span> 必填项已用<span class="required">*</span>标注
            </p>
            <p class="comment-form-author"><label for="author">姓名 <span class="required">*</span></label>
                <input id="author" name="author" type="text" v-model="author" placeholder="请输入您的名字!" size="30"
                        maxlength="10" required/></p>
            <p class="comment-form-email"><label for="email">电子邮件 <span class="required">*</span></label>
                <input id="email" name="email" type="text" v-model="email" placeholder="博主回复你会通知到此邮箱!" size="30"
                        maxlength="30" required/></p>
            <p class="comment-form-url"><label for="url">站点</label> <input id="url" name="url" type="text"
                                                                            v-model="url" size="30"
                                                                            maxlength="200"/></p>
            <p class="comment-form-comment"><label for="comment">评论</label> <textarea 
                                                                                        name="comment"
                                                                                        cols="45" rows="8"
                                                                                        maxlength="65525"
                                                                                        placeholder="上述电子邮件地址不会被公开,只作为博主回复联系方式!"
                                                                                        v-model="comment"
                                                                                        required></textarea>
            </p>
            <p class="form-submit">
                <span class="emotion"></span>
                <input name="submit" id="submit" class="submit" value="留言" @click="postComment"/>
                <input class="submit" value="返回" style="margin-right:20px;" @click="back"/>
            </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
import api from '@/config/api'
import { baseUrl } from '@/config/env'
export default {
  name: "toComment",
  data () {
            return {
                author: '',
                email: '',
                url: '',
                comment: '',
            }
        },
  methods: {
        back () {
            if (window.history.length <= 1) {
                this.$router.push({path:'/'})
                return false
            } else {
                this.$router.go(-1)
            }
            //上面都没执行就说明卡在当前页不是最后一条， histroy记录数量大于1，又没有回退记录，只能返回首页，
         //如果上面都执行了 页面都跳走了，这个也就不用管了   
            // setTimeout(() => {
            //     this.$router.push({path:'/'})      
            // },500)
        },
        postComment () {
            let param = {
                    author: this.author,
                    email: this.email,
                    url: this.url,
                    comment: this.comment,
            }
            axios.post(baseUrl + api.postComments, qs.stringify(param))
            .then(this.postCommentRes)

            // axios({
            //     method: 'post',
            //     baseURL: baseUrl,
            //     url: api.postComments,
            //     params: {
            //         author: _this.author,
            //         email: _this.email,
            //         url: _this.url,
            //         comment: _this.comment,
            //     },
            //     timeout: 10000,
            // }).then(this.getContactRes)
        },
        postCommentRes (res) {
            res = res.data
            if(res.status) {
                this.$router.push({path:'/contact'})
            }else{
                alert(res.msg)
            }
        },
    },
};
</script>

<style scoped>
.comments {
    width: 100%;
    margin-bottom: 20px;
    padding: 0 15px;
}

#respond h3 {
    display: inline-block;
    font-size: 24px;
    font-weight: normal;
    margin: 10px 0;
}

#respond .comment-notes {
    display: none;
}

#respond p {
    position: relative;
    margin-bottom: 10px;
}
.comment-notes, .comments .logged-in-as {
    width: 100% !important;
    font-size: 11px;
    line-height: 18px;
    text-transform: uppercase;
    margin-top: 5px !important;
}

#respond input[type="text"] {
    width: 100%;
    height: 36px;
    padding: 5px 10px 5px 35px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-appearance: none;
}

#respond textarea {
    padding: 10px 10px 40px;
    width: 100%;
    height: 200px;
    line-height: 22px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-appearance: none;
    resize: none;
}

.submit {
    width: 95px;
    text-align: center;
    font-size: 14px;
    border-bottom-right-radius: 3px;
    cursor: pointer;
    height: 38px;
    line-height: 38px;
    display: block;
    float: right;
    padding: 0 20px;
    outline: 0;
    border: 1px solid #00a1d6;
    color: #fff;
    background: #00a1d6;
}

.comment-form-author:before, .comment-form-email:before, .comment-form-url:before {
    position: absolute;
    font-family: FontAwesome;
    padding-left: 10px;
    height: 38px;
    line-height: 38px;
}

.comment-form-author:before, .comment-form-email:before, .comment-form-url:before {
    position: absolute;
    font-family: FontAwesome;
    padding-left: 10px;
    height: 38px;
    line-height: 38px;
}

.comment-form-author:before, .comment-form-email:before, .comment-form-url:before {
    position: absolute;
    font-family: FontAwesome;
    padding-left: 10px;
    height: 38px;
    line-height: 38px;
}

*, *::before, *::after {
    box-sizing: border-box;
}

</style>

