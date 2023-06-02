import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:[
        {
            id:'001',
            name:'Angel eyes'
        }
    ]
}

const userServiece = createSlice(
    {
        name:"user",
        initialState:initialState,
        reducers:{
            // 定义动作
           addUser(state,action){
            state.users.push(action.payload) //这个payload 大家可以可以在浏览器 redux 看到
           }
        }
    }
)

export default userServiece.reducer
//暴露动作

export const {addUser} = userServiece.actions;