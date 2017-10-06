<template>
    <div class="portfolio-item">
        <h3>Project Name </h3>
        <p><span class="tech-stack">Node.js</span> <span class="tech-stack">Vue.js</span><span class="fa-stack icon-github">
                    <i class="fa fa-square fa-stack-2x"></i>
                    <i class="fa fa-github fa-stack-1x"></i>
                  </span>
        </p>
        <img class="portfolio-image" src="https://i.imgur.com/TTjdsgc.gif" height="380px">
        <p>English and German: Most of the time in these languages we don’t read the word as a combination of letters probably
            because they use Latin script</p>

    </div>
</template>

<script>
    export default {

    }

</script>

<style>
    .portfolio-item {
        margin-bottom: 40px;
        padding: 10px;
    }

    .portfolio-item:hover {
        box-shadow: 10px 10px 5px #888888;
    }

    .tech-stack {
        background-color: #5a6e79;
        color: white;
        font-size: 14px;
        border-radius: 4px;
        padding: 4px;
    }

    img {
        max-width: 95%;
        margin: 2%;
    }

    .fa-stack-1x {
        color: white;
    }

    .icon-github {
        color: #24292E;
        /* color: #5a6e79; */
        margin-left: 13px;
    }

</style>