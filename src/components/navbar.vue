<template>
    <div>
        <ul>
            <!-- <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li> -->

            <li><router-link to="/portfolio">Portfolio</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/">Blog</router-link></li>
        </ul>

        <hr>
    </div>
</template>

<script>
    export default {

    }

</script>

<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    li {
        float: right;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover {
        text-decoration: none;
        color: #333333;
    }

    li a:active {
        text-decoration: none;
        color: #333333;
    }

    a {
        color: white;
        font-size: 18px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
</style>