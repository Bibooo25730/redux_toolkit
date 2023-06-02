import { useDispatch } from "react-redux";
import  {addUser}  from "../service/userservice";
import User from "./user/index"

const App =()=>{
    const dispath = useDispatch();
    return (
        <div><User/>
        <hr/>
        <button onClick={()=>{console.log(11)}}>查询</button>
        <button onClick={()=>dispath(addUser({id:'213',name:'cela'}))}>添加</button>
        </div>
    )
}


export default App;