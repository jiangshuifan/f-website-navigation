
import {INCREMENT} from "./mutations-types"
export default{//大概就是放函数的吧
    // [INCREMENT](state){
    //     state.count++
    // },
    // setlinkdata(state,payload){
    //     state.linklist = payload.res
    // }
    changeThemeColor(state,payload){
        state.themecolor = payload.color
    }
}