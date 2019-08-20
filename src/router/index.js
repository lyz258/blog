import Vue from 'vue'
import Router from 'vue-router'
import showBlogs from '../components/showBlogs'
import AddBlog from '../components/AddBlog'
import SingleBlog from '../components/singleBlog'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path: '/',name: 'showBlogs',component: showBlogs},
    {path: '/AddBlog',name: 'AddBlog',component: AddBlog},
    {path: '/SingleBlog/:id',name: 'SingleBlog',component: SingleBlog},
    
  ]
})
