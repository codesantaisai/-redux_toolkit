import { createSlice } from "@reduxjs/toolkit"

const initialState=[
    {id:'0',name:"Jathurshan"},
    {id:'1',name:"Meidheen"}
]
export const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{

    }
});

export const selectAllUsers = (state)=>state.users;
export default usersSlice.reducer;