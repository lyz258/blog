<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <blogs-header></blogs-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogsHeader from './components/BlogsHeader'
export default {
  name: 'App',
  components:{
    BlogsHeader
  }
}
</script>

<style>

</style>
