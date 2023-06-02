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

        }
    }
)

export default userServiece.reducer