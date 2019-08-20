<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <form v-if="!Submmited">
        <label for="" >博客标题</label>
        <input class="a" type="text" v-model="blog.title" required/>

        <label for="">博客内容</label>
        <textarea v-model="blog.content"></textarea>

        <div id="checkboxes">
            <label for="">Vue.js</label>
            <input type="checkbox" value="Vue.js" v-model="blog.categories">
            <label for="">Node.js</label>
            <input type="checkbox" value="Node.js" v-model="blog.categories">
            <label for="">React.js</label>
            <input type="checkbox" value="React.js" v-model="blog.categories">
            <label for="">Angular.js</label>
            <input type="checkbox" value="Angular.js" v-model="blog.categories">
        </div>
        <label for="">作者:</label>
        <select v-model="blog.author">
            <option v-for="author in authors" :key="author">
                {{author}}
            </option>
        </select>
        <button @click.prevent="post">添加博客</button>
    </form>

    <div v-if="Submmited">您的博客发布成功！！</div>

    <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题:{{blog.title}}</p>
        <p>博客内容:</p>
        <p>{{blog.content}}</p>
        <p>博客分类:</p>
        <ul>
            <li v-for="category in blog.categories" :key="category">
                {{category}}
            </li>
        </ul>
        <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data () {
    return {
        blog:{
            tilte:"",
            content:"",
            categories:[],
            author:"",
        },
        authors:["Hemiaj","Henry","Bucky"],
        Submmited:false
    }
  },
  methods:{
      post:function(){
          this.$http.post("https://jsonplaceholder.typicode.com/posts",{
              tilte:this.blog.title,
              body:this.blog.content,
              userId:1
          })
          .then(function(data){
              console.log(data);
              this.Submmited= true;
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add-blog *{
    box-sizing: border-box;
}
.add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}
label{
    display: block;
    margin: 20px 0px;
}
.a{
    width: 100%;
    height: 40px;
}
textarea{
    height: 200px;
}
input [type="text"],textarea,select{
    display: block;
    width:100%;
    padding: 8px
}
#checkboxes label{
    display: inline-block;    
    margin-top: 20px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 30px;
}
button{
    display: block;
    margin: 20px 0;
    background: red;
    color: aliceblue;
    border:0;
    padding: 10px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}
#preview{
    padding: 30px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
}
h3{
    margin-top: 10px;
}
</style>
