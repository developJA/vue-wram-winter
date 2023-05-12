<template>
    <div>
        <div class="content">
            <div class="scroll-wrap">
                <div class="title-cont">
                    <h3>{{ noticeInfo.title }}</h3>
                </div>
                <div class="title-sub">
                    <span>작성자 : <strong>{{ noticeInfo.writer_name }}</strong></span>
                    <span class="date">작성일 : <strong>{{ CommonUtil.getYMD(noticeInfo.reg_date) }}</strong></span>
                </div>
                <div>
                    <div class="mrtb10" v-html="notiCont"></div>
                </div>
                
                
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            noticeInfo : {}
        }
    },
    created() {
        const { params } = this.$router.currentRoute;
        this.noticeInfo = params.noticeInfo;
        console.log(this.noticeInfo );
        this.noticeInfo.content.replace(/\n/g, '<br>');
        console.log(this.noticeInfo.content);
    },
    computed : {
        notiCont(){
            return this.noticeInfo.content.replace(/\n/g, '<br>');
        }
    }
}
</script>

<style scoped>
.title-cont{
    padding: 0rem 0.1rem;
    border-bottom: 0.1rem solid #000;
}
.title-sub{
    background: #eee;
    padding : 0.25rem;
    font-size: 0.8rem;
}
.title-sub .date {
    position: absolute;
    right: 1rem;
}

</style>