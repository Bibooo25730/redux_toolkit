import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axiosFn from "../util/request";

const initialState = {
    users:[
        {
            id:'001',
            name:'Angel eyes'
        }
    ]
}
const userApi = {
    queryUser:"user/query"
}
// 异步
export const userQuery = createAsyncThunk(
    "user/query",
    async()=>{
        console.log('userQuery')
         return await axiosFn.onGet(userApi.queryUser);
    }
)

// 同步
const userServiece = createSlice(
    {
        name:"user",
        initialState:initialState,
        reducers:{
            // 定义动作
           addUser(state,action){
            state.users.push(action.payload) //这个payload 大家可以可以在浏览器 redux 看到
           }
        },
        //异步处理完的结果，它进行一个判断,定制用户逻辑
        extraReducers:(builder)=>{
            // 判断数据完全回来 fulfilled
            builder.addCase(userQuery.fulfilled,(state,action)=>{
                console.log(action.payload)
            })
        }
    }
)

export default userServiece.reducer
//暴露动作

export const {addUser} = userServiece.actions;

