import { useSelector } from "react-redux"

export default function user(){
    const users = useSelector(state=>state.user.users) //拿的是store的命名
    return (
        <div>
            <ul>
                {users.map((item,index)=><li key={index}>{item.id}-{item.name}</li>)}
            </ul>
        </div>
    )
}