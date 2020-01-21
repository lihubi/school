<template>
    <div class="marginbox">
        <HeaderTop title="发表">
            <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" slot="left"></a>
        </HeaderTop>
        <div>
            <div class="mui-input-row" style="margin: 10px 5px;">
                <textarea id="textarea" rows="7" placeholder="说出你遇到的困难。。。"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop";
    export default {
        name: "publish",
        components:{
            HeaderTop
        }
    }
</script>

<style scoped>

</style>