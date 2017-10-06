<template>

  <div>
    <div class="blog-header">
      <div class="container">
        <navbar></navbar>
        <router-view name="page-header"></router-view>
      </div>
    </div>

    <div class="container">
      <router-view name="page-content"></router-view>
    </div>
    
  </div>

</template>

<script>
  import navbar from './components/navbar.vue';

  export default {
    components: {
      'navbar': navbar
    }
  }

</script>

<style>
  .blog-header {
    margin-top: 0;
    background-color: #8476AD;
  }

  .container {
    max-width: 700px;
    margin: auto;
    padding-bottom: 2%;
    padding-top: 2%;
  }
</style>