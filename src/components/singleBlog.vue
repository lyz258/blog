<template>
    <div id="single-blog">
        <h1 v-rainbow>{{blog.title}}</h1>
        <article v-rainbow>{{blog.body}}</article>
    </div>
</template>

<script>
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(function(data){
            console.log(data);
            this.blog=data.body;
        })
    },
    // directives:{
    //     'rainbow1':{
    //         bind(el,binding,vnode){
    //             el.style.color="#"+Math.random().toString(16).slice(2,8);
    //         }
    //     }
    // }

}
</script>

<style scoped>
    #single-blog{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: #eee;
        border: 1px dotted #aaa;
    }
</style>
