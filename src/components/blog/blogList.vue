<template>
    <div>
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
        <blog-item></blog-item>
    </div>
</template>

<script>
    import blogItem from './blogItem.vue';

    export default {
        components: {
            'blogItem': blogItem
        }
    }

</script>

<style>
    
</style>