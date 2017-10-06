<template>
    <div class="blog-list-item">
        <div class="blog-header-container">
            <h3 class="blog-post-title">Testing box-sizing: border-box</h3>
            <h5 class="blog-post-date">5th October 2017</h5>
        </div>

        <p>Meta-question: how do you keep track of these? Every now and then I come upon something and I think "Oh, I should
            definitely re-read this!"</p>
    </div>
</template>

<script>
    export default {

    }

</script>

<style>
    .blog-list-item p {
        font-family: "Work Sans", sans-serif;
        line-height: 1.5;
        font-size: 18px;
        text-rendering: optimizeLegibility;
        color: #444;
    }

    .blog-post-title {
        float: left;
        /* clear: both; */
        /* display: inline-block; */
    }

    .blog-post-date {
        margin-top: 5%;
        float: right;
        /* clear: both; */
        /* display: inline-block; */
    }

    .blog-header-container {
        /* border: 1px solid #000000; */
        overflow: auto;
        width: 100%;
    }

    .blog-list-item:hover {
        box-shadow: 10px 10px 2px #aaa;
    }
</style>