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
                                    <button type="button" class="btn-select">선택</button>
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
                                <textarea placeholder="등록할 내용을 입력하세요."></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        <div class="bottom-box pdtb15 no-flex">
            <button id="btnRegist" class="btn-txt" @click="">등록하기</button>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    methods : {
        showSelectPopup() {
            const param = {};
            const _this = this;
            param.list = [
                { lb: '알림', value: 'alarm' },
            ];
            _this.$popList(param, function (rs) {
                console.log('list popup callback', rs);
                document.getElementById('inpSelBox').value = rs.lb;
                document.getElementById('inpSelBox').setAttribute('data-value', rs.value);
            });
        },
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
