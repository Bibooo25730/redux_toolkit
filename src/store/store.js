import { configureStore } from "@reduxjs/toolkit";
import userservice from "../service/userservice";
// store 存很多数据啊，用户啊，商品啊，每个数据都是分块的，不可能把所有数据都关起来，要进去分片
export  const stroe = configureStore({
    reducer:{ //命名空间
         user:userservice
    }
})