<template>
    <div v-theme:column="'wide'" class="show-blogs">
        <h1>博客总览</h1>
        <input type="text"  placeholder="搜索" v-model="search">
        <div id="single-blog" v-for="(blog,index) in filteredBlogs" :key="index">
            <router-link :to="'/SingleBlog/'+blog.id">
                <h2 v-rainbow>{{blog.title | to-uppercase | snippet}}</h2>
                <p v-rainbow>{{blog.body | snippet}}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'show-blogs',
    data(){
        return {
            blogs:[],
            search:""
        }
    },
    created(){
        //获取数据
        this.$http.get('./../static/posts.json')
        .then(function(data){
            console.log(data);
            this.blogs=data.body.slice(0,50);
        })
    },
    computed:{
        //搜索
        filteredBlogs:function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search);
            })
        }
    },
    filters:{
        // "to-uppercase":function(value){
        //     return value.toUpperCase();
        // }
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    // directives:{
    //     //随机颜色
    //     'rainbow':{
    //         bind(el,binding,vnode){
    //             el.style.color="#"+Math.random().toString(16).slice(2,8);
    //         }
    //     }
    // }
}
</script>

<style scoped>
.show-blogs{
    max-width: 800px;
    margin:0 auto;
}
#single-blog{
    padding:20px;
    margin: 20px 0;
    background: #eee;
}
</style>
