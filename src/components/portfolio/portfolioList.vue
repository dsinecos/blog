<template>
    <div>
        <portfolio-item></portfolio-item>
        <portfolio-item></portfolio-item>
        <portfolio-item></portfolio-item>
    </div>
</template>

<script>
    import portfolioItem from './portfolioItem.vue';

    export default {
        components: {
            'portfolioItem': portfolioItem
        }

    }
</script>