<template>
    <header id="header" class="mui-bar mui-bar-nav ">
        <slot name="left"></slot>
        <h1 class="mui-title">{{title}}</h1>
        <slot name="right"></slot>
    </header>
</template>

<script>
    export default {
        name: "index",
        props:{
            title:String
        }
    }
</script>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
}
</style>