import { useEffect } from "react";
import { useDispatch } from "react-redux";
import  {addUser,userQuery}  from "../service/userservice";
import axiosFn from "../util/request";
import User from "./user/index"

const App =()=>{
    const dispath = useDispatch();

    useEffect(()=>{
        // axiosFn.onGet('/').then(res=>{
        //     console.log(res)
        // })
    },[])
    return (
        <div><User/>
        <hr/>
        <button onClick={()=>dispath(userQuery())}>查询</button>
        <button onClick={()=>dispath(addUser({id:'213',name:'cela'}))}>添加</button>
        </div>
    )
}


export default App;