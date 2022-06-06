import React from "react";
import { Box, Image, ColorMode, useColorMode, Center, Pressable, HStack} from "native-base";
import { FlatList, Text } from "react-native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from "react-redux";


const TestScreen = ({navigation}) => {
    const{colorMode} = useColorMode();
    const likeItems = useSelector((state) => state.like.likeList);
    const dispatch = useDispatch();

    return(
        <HStack mb={30} style={{flex: 1,backgroundColor:colorMode == "light" ? "#f8f8f8" : "#2E2015"}}>
            <Box flex={1} alignItems="center">
                <FlatList
                    data={likeItems}
                    renderItem={({ item }) => 
                     <Pressable onPress={() => {navigation.navigate('CookiePage', item)}}>
                        <Box ml={5} alignItems="center">
                                <Image 
                                    width= "78"
                                    height= "78"
                                    source={{uri: item.image}}
                                    alt="cookie"
                                    borderRadius={7} />
                                <Text>{item.name}</Text>
                            </Box>
                        </Pressable>
                        }
                    //默認情況下每行都需要提供一個不重複的key屬性
                    keyExtractor={(item) => item.id}
                    //設置垂直佈局（）
                    horizontal={false}
                    //設置水平的排列的個數（只有垂直佈局才起作用）
                    numColumns={3}
                />
            </Box>
        </HStack> 
    );
};



export default TestScreen;