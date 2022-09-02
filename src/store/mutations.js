
// import {INCREMENT} from "./mutations-types"
import Vue from'vue';
export default{//大概就是放函数的吧
    // [INCREMENT](state){
    //     state.count++
    // },
    UPDATETHEMECOLOR(state,payload){
        state.themecolor = payload.color
    },
    UPDATEFONTCOLOR(state,payload){
        state.fontcolor = payload.color
    },
    UPDATEHISTORYRECORDS(state,payload){
        Vue.set(state,'historyRecord',payload.records)
    }
}