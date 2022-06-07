import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const likeSlice = createSlice({
    name:'like',
    initialState:{
        likeList: [],
    },
    reducers: {
        addToLike(state,action) {
            const newItem = action.payload;
            const existingItem = state.likeList.find((item) => item.id === newItem.id );

            if(existingItem){
                existingItem.likeTime++;
                Alert.alert("就業中心","已在我的愛餅中");
            }else{
                state.likeList.push({
                    id: newItem.id,
                    likeTime: 1,
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
                Alert.alert("就業中心","已加入愛餅");
            }

                
                
        },
        removeFromLike(state,action) {
            Alert.alert("就業中心","已從愛餅中移除")
            return {
                ... state ,
                likeList: state.likeList.filter(item => item.id !== action.payload.id)
              }
        },

    }
});

export const likeTime = (state) => state.like.likeTime;

export const likeActions = likeSlice.actions;
export default likeSlice;