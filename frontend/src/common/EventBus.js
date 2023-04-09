import Vue from 'vue';
import _ from 'lodash';
const EventBus = new Vue();

export default EventBus;

export function $popAlert(param) {
    console.log('alert eventBus');
    if(_.isString(param)) param = { text: param };
    EventBus.$emit('showAlert', param);
    EventBus.$off('CBAlert');
    return new Promise((resolve) => {
        EventBus.$on('CBAlert', () => {
            EventBus.$off('CBAlert');
            resolve(true);
        })
    })
}

export function $popConfirm(param) {
    if (_.isString(param)) param = { text: param };
    
    EventBus.$emit('showConfirm', param);

    EventBus.$off('CBConfirm');// 기 존재되는 이벤트 초기화
    
    return new Promise((resolve) => {
        EventBus.$on('CBConfirm', (rs) => {
            EventBus.$off('CBConfirm');
            resolve(rs, param);
        });
    })
}

export function $popList(param, callback) {
    if (_.isString(param)) param = { text: param };
    
    EventBus.$emit('showList', param, callback);

    EventBus.$off('CBList');// 기 존재되는 이벤트 초기화
    
    return new Promise((resolve) => {
        EventBus.$on('CBList', (rs) => {
            EventBus.$off('CBList');
            resolve(rs);
        });
    })
}