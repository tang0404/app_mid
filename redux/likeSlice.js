import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name:'like',
    initialState:{
        likeList: [],
        // showLike: false
    },
    reducers: {
        addToLike(state,action) {
            const newItem = action.payload;
                state.likeList.push({
                    // id: newItem.id,
                    // name: newItem.name,
                    // image: newItem.image
                    id: newItem.id,
                    // like: true,
                    name: newItem.name,
                    image: newItem.image,
                    fileImage_B: newItem.fileImage_B,
                    fileImage_D: newItem.fileImage_D,
                    skillImage: newItem.skillImage,
                    skillName:  newItem.skillName,
                    skillDescription1: newItem.skillDescription1,
                    skillDescription2: newItem.skillDescription2,
                    skillDescription3: newItem.skillDescription3,
                    CDtime: newItem.CDtime,
                    equipment1: newItem.equipment1, 
                    equipment2: newItem.equipment2,
                    recommend: newItem.recommend,
                    recomName: newItem.recomName,
                    value: newItem.value
                })
        },
        removeFromLike(state,action) {
            // const id = action.payload;
            // const existingItem = state.likeList.find(item => item.id === id);
            // state.likeList.find(item => item.like = false);
            // existingItem.like = false;
            // state.likeList = state.likeList.filter(item => item.id === id);
            return {
                ... state ,
                likeList: state.likeList.filter(item => item.id !== action.payload.id)
              }
        },
        // setShowLike(state) {
        //     state.showLike = true;
        // }
    }
});

export const likeActions = likeSlice.actions;
// export const {removeFromLike} = likeSlice.actions;
export default likeSlice;