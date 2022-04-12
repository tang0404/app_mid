import React, { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Divider, Box, Center, ScrollView, Text, useColorMode } from "native-base";
import CookiesList from "../components/CookiesList";
import cookiesData from "../json/cookiesList.json";

const CookiesListScreen = ({navigation}) => {
const { colorMode } = useColorMode();
 
    return (
        <ScrollView style={{flex: 1,backgroundColor:colorMode == "light" ? "#f8f8f8" : "#2E2015"}}>
        <Center mt={30} mb={30}>
            <Box 
        bg={colorMode == "light" ? "#f8f8f8" : "#2E2015"} 
        flex={1}
        >
            <Text color="#CAC6C4" fontSize={12} mt="10" ml="3" mr="3" mb="5" paddingBottom={1.5} 
            borderBottomWidth={0.5} borderBottomColor="#CAC6C4">
                {cookiesData.title1}</Text>
            <CookiesList
                    list={cookiesData.data1}
                    navigation={navigation}
            />
            <Text color="#CAC6C4" fontSize={12} mt="10" ml="3" mr="3" mb="5" paddingBottom={1.5} 
            borderBottomWidth={0.5} borderBottomColor="#CAC6C4">
                {cookiesData.title2}</Text>
            <CookiesList
                    list={cookiesData.data2}
                    navigation={navigation}
            />
            <CookiesList
                    list={cookiesData.data3}
                    navigation={navigation}
            />
            <CookiesList
                    list={cookiesData.data4}
                    navigation={navigation}
            />
            <CookiesList
                    list={cookiesData.data5}
                    navigation={navigation}
            />
        </Box>
        </Center>
        
        </ScrollView>
    );
}

export default CookiesListScreen ;