<template>
    <div>

    </div>
</template>

<script>
export default {
    created() {
        const _this = this;
        setTimeout(function(){
            _this.$router.replace({ path: 'home' })
        },3000);
        
    },
    methods : {
    }
}
</script>
<style scoped>

</style>