<template>
  <ul>
    <v-film-item v-for="(film, index) in films" :film="film" key="index"></v-film-item>
    <router-link to='/film'><v-more>更多热门电影</v-more></router-link>
  </ul>
</template>
<style lang="less">

</style>

<script>
  export default{
    props: {
      films: {
        type: Array,
        required: true
      }
    }
  }

</script>
