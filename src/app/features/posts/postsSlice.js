import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {
        id:1,
        title:"Learning redux toolkit",
        content:"It's easy"
    },
    {
        id:2,
        title:"I want to code my self",
        content:"It's easy"
    }
]

export const postsSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded(state,action){
                state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state)=>state.posts;
export const {postAdded} = postsSlice.actions;
export default postsSlice.reducer;
