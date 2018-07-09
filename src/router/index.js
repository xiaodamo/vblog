import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import detail from '@/pages/detail/detail'
import category from '@/pages/list/category'
import tags from '@/pages/tags/tags'
import about from '@/pages/about/about'
import contact from '@/pages/contact/contact'
import toComment from '@/pages/contact/toComment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail,
      meta: {
        title: '文章详情'
      }
    },
    {
      path: '/category/:id/:p?',
      name: 'category',
      component: category,
      meta: {
        title: '文章列表(分类)'
      }
    },
    {
      path: '/tags/:id/:p?',
      name: 'tags',
      component: tags,
      meta: {
        title: '文章列表(标签)'
      }
    },
    {
      path: '/aboutme',
      name: 'about',
      component: about,
      meta: {
        title: '关于小达摩'
      }
    },
    {
      path: '/contact/:p?',
      name: 'contact',
      component: contact,
      meta: {
        title: '留言'
      }
    },
    {
      path: '/toComment',
      name: 'toComment',
      component: toComment,
      meta: {
        title: '提交留言'
      }
    },

  ]
})
