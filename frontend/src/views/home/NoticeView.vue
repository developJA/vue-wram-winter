<template>
    <div>
        <div class="content">
            <div class="scroll-wrap">
              <div class="list-wrap">
                <div>
                    <div class="cont-ttl">
                        <h3>공지사항</h3>
                    </div>
                    <ul>
                        <li v-for="listItem in notices" v-bind:key="listItem.item" @click="moveNotiDetail(listItem)">
                            <p class="title">[{{ listItem.type_name }}] {{ listItem.title }}</p>
                            <p class="cont">{{ listItem.content }}</p>
                            <div class="sub dark-gray">
                                <span>{{ CommonUtil.getYMD(listItem.reg_date) }}</span>
                                <strong> | </strong>
                                <span>작성자 : {{ listItem.writer_name }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import {getNoticeListApi} from '../../server/api.js';

export default {
    data() {
        return {
            notices : [],
        }
    },
    created() {
        const _this = this;
        getNoticeListApi({}, function(rd){
            if(rd.status === 'SUCCESS'){
                _this.notices = rd.data.noticeList;
            }
        })
    },
    methods : {
        moveNotiDetail(obj) {
            this.$router.push({
                name: 'noticeDetail',
                params: {
                    noticeInfo: obj,
                },
            });
        }
    }
};
</script>

<style scoped>
.list-wrap li {
    position: relative;
    line-height: 1.6rem;
    border-bottom: 0.1rem solid #E1E1E1;
    padding: 10px 5px;
}
.list-wrap p.title{
    font-weight: bold;
    line-height: 1.6rem;
}
.list-wrap p.cont{
    font-size: 0.9rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.list-wrap .sub{
    font-size: 0.7rem;
}
</style>
