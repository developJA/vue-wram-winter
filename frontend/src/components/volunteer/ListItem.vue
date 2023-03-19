<template>
    <div>
        <div class="title underline">
            <span>서울시 마포구 상암동</span>
        </div>
        <div class="total">
            <span>전체 <em class="blue">3186</em>건</span>
        </div>
        <div class="list-wrap">
            <ul>
                <li class="bt-bld"  @click="moveDetail">
                    <div class="top">
                        <span class="left dark-gray">3186</span>
                        <span class="icon bg-green">모집중</span>
                        <span class="icon bg-blue">서울</span>
                        <span class="icon bg-pink">대면</span>
                    </div>
                    <p class="bold">시설봉사</p>
                    <p class="bold blue">사랑재요양원</p>
                    <p class="dark-gray">2023-03-01 ~ 23023-05-01</p>
                    <p class="bold">필요/신청인원 : <strong class="dark-gray">3/0</strong></p>
                </li>
                <li class="bt-bld">
                    <div class="top">
                        <span class="left dark-gray">3186</span>
                        <span class="icon bg-green">모집중</span>
                        <span class="icon bg-blue">서울</span>
                        <span class="icon bg-pink">대면</span>
                    </div>
                    <p class="bold">시설봉사</p>
                    <p class="bold blue">사랑재요양원</p>
                    <p class="dark-gray">2023-03-01 ~ 23023-05-01</p>
                    <p class="bold">필요/신청인원 : <strong class="dark-gray">3/0</strong></p>
                </li>
                <li class="bt-bld">
                    <div class="top">
                        <span class="left dark-gray">3186</span>
                        <span class="icon bg-green">모집중</span>
                        <span class="icon bg-blue">서울</span>
                        <span class="icon bg-pink">대면</span>
                    </div>
                    <p class="bold">시설봉사</p>
                    <p class="bold blue">사랑재요양원</p>
                    <p class="dark-gray">2023-03-01 ~ 23023-05-01</p>
                    <p class="bold">필요/신청인원 : <strong class="dark-gray">3/0</strong></p>
                </li>
                <li class="bt-bld">
                    <div class="top">
                        <span class="left dark-gray">3186</span>
                        <span class="icon bg-green">모집중</span>
                        <span class="icon bg-blue">서울</span>
                        <span class="icon bg-pink">대면</span>
                    </div>
                    <p class="bold">시설봉사</p>
                    <p class="bold blue">사랑재요양원</p>
                    <p class="dark-gray">2023-03-01 ~ 23023-05-01</p>
                    <p class="bold">필요/신청인원 : <strong class="dark-gray">3/0</strong></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods : {
        moveDetail(){
            this.$router.push({ path: 'donationDetail' })
        }
    }
}
</script>

<style scoped>
</style>