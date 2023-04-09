<template>
    <div>
        <div class="image-cont">
            <img src="../assets/img/app-icon.png" />
        </div>
        <p>따뜻한 겨울</p>
    </div>
</template>

<script>
export default {
    created() {
        const _this = this;
        setTimeout(function(){
            _this.$router.replace({ path: '/login' })
        },3000);
        
    },
    methods : {
    }
}
</script>
<style scoped>
.image-cont{
    width: 100%;
    text-align: center;
    height: 320px;
    margin-top: 100px;
}
.image-cont img{
    width: 20rem;
}
p {
    text-align: center;
    font-size: 1.7rem;
    font-family: 나눔고딕;
    font-weight: bold;
}
</style>