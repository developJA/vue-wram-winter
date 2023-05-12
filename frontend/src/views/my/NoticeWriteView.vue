<template>
    <div>
      <div class="content">
        <div class="scroll-wrap">
            <div class="tbl-vert">
                <table>
                    <colgroup>
                        <col style="width:18%">
                        <col style="width:auto">
                    </colgroup>
                    <tbody>
                        <tr>
                            <th class="bold">분류</th>
                            <td class="left">
                                <div class="inp-text select" @click="showSelectPopup">
                                    <button id="btnSelBox" type="button" class="btn-select">선택</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th class="bold">제목</th>
                            <td class="left">
                                <input id="inpTitle">
                            </td>
                        </tr>
                        <tr>
                            <th class="bold">내용</th>
                            <td class="left">
                                <textarea id="txtContent" placeholder="등록할 내용을 입력하세요."></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        <div class="bottom-box pdtb15 no-flex">
            <button id="btnRegist" class="btn-txt" @click="registNotice">등록하기</button>
        </div>
      </div>
    </div>
</template>

<script>
import { regNoticeListApi } from '../../server/api.js';

export default {
    methods : {
        showSelectPopup() {
            const param = {};
            const _this = this;
            param.list = [
                { lb: '알림', value: 'alarm' },
                { lb: '이벤트', value: 'event' }
            ];
            _this.$popList(param)
            .then((rs) => {
                console.log('list popup callback', rs);
                document.getElementById('btnSelBox').innerText = rs.lb;
                document.getElementById('btnSelBox').setAttribute('data-value', rs.value);
            });
        },
        registNotice() {
            const _this = this;
            const yyyymmdd = new Date().toISOString().substring(0,10).replace(/-/g,'');
            var param = {
                writer_id : _this.getGlobal('USER_INFO').id,
                writer_name : _this.getGlobal('USER_INFO').name,
                title : document.getElementById('inpTitle').value,
                type_code : document.getElementById('btnSelBox').getAttribute('data-value'),
                type_name : document.getElementById('btnSelBox').innerText,
                content : document.getElementById('txtContent').value,
                reg_date : yyyymmdd
            }
            regNoticeListApi(param, function(rd){
                if(rd.status === 'SUCCESS'){
                    _this.$popAlert("정상적으로 저장되었습니다.")
                    .then(() => {
                        $router.go(-1); // 뒤로
                    });
                }
            })
        }
    }
}
</script>

<style scoped>
.inp-text.select {
    width: calc(100% - 7rem);
}
.inp-text.select .btn-select{
    display: block;
    overflow: hidden;
    width: 100%;
    height: 2.4rem;
    padding: 0.95rem 2.5rem 0.95rem 0.5rem;
    border: 0.1rem solid #e6e6e6;
    border-radius: 0.3rem;
    background: #ffffff url(../../assets/img/common/btn-select.png) no-repeat right 0.5rem center;
    background-size: 1.6rem;
    color: #333333;
    font-size: 1.1rem;
    line-height: 0.7rem;
    text-align: left;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    image-rendering: -webkit-optimize-contrast;
}
.tbl-vert table{
    width : 100%;
}
.tbl-vert td {
    padding: 0.3rem 0rem;
}
.tbl-vert th{
    text-align : left;
}
.tbl-vert input{
    width: 90%;
    height: 2rem;
}
.tbl-vert textarea{
    width: 90%;
    height: 15rem;
}
</style>
