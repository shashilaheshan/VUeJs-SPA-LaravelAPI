import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from "./views/Articles";
import AddArticle from "./views/add_article/AddArticle";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
        meta:{title:'SPA Home'}
    },
      {
          path: '/articles',
          name: 'articles',
          component:Articles,
          meta:{title:'Articles'}
      },
      {
          path:'/add_article',
          name:'add_article',
          component:AddArticle,
          meta:{title:'Add Article'}
      },

  ]
})
