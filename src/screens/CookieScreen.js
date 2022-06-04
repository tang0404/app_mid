
import React, { useState } from "react";
import { Image, Box, Center, ScrollView, Text, useColorMode, VStack, HStack } from "native-base";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CookiesListScreen from "./CookiesListScreen";

const CookieScreen = ({ route }) => {
    var color;
    const { name, image, fileImage_B, fileImage_D, skillImage, skillName, CDtime, equipment1, equipment2, recommend  } = route.params;
    const { colorMode } = useColorMode();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const ifEquip =(type) => {
        switch (type) {
            case "傷害抵抗":
                return color = "#785140";
            case "冷卻":
                return color = "#9A308F";
            case "攻擊":
                return color = "#CB0203"
            default:
                break;
        }
    }
    const equipNum = (e1, e2) =>{
        if(e1 && e2){
            return(
            <Text fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"F8F8F8"}>
                適合配料：
                <Text color={ifEquip(e1)}>{e1}</Text>、
                <Text color={ifEquip(e2)}>{e2}</Text>
            </Text>);
        }else{
            return(
            <Text fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"F8F8F8"}>
                適合配料：
                <Text color={ifEquip(e1)}>{e1}</Text>
            </Text>);
        }
    }
    return(
        <ScrollView style={{flex: 1,backgroundColor:colorMode == "light" ? "#f8f8f8" : "#2E2015"}}>
            <Center mt={5}>
                {colorMode == "light" ?
                    (<Image
                        width= "315"
                        height= "165"
                        source={{uri: fileImage_B}}
                        alt="fileImage_B"
                    /> ):
                    (<Image
                        width= "315"
                        height= "165"
                        source={{uri: fileImage_D}}
                        alt="fileImage_D"
                    /> )
                }
                <Box width={315} borderRadius={6} bg={colorMode == "light" ? "white" : "#564334"}>
                    <Text color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} fontSize={15} fontWeight="bold" 
                        mt="18" ml="18" mr="3" mb="3" pl={3} borderLeftWidth={4} borderLeftColor="#FFC764">就業能力分析</Text>

                        <HStack ml={34} mb={30} alignItems="center">
                            <Image
                            width="83"
                            height="83"
                            source={{uri: skillImage}}
                            alt="skillImage"
                            />
                            <VStack ml={17}>
                                <Text fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"F8F8F8"}>{skillName}</Text>
                                <Text fontSize={15} fontWeight="bold" color="#CAC6C4">CD {CDtime}秒</Text>
                            </VStack>
                        </HStack>

                    <Center width={280} pt={30} pb={30} mb={30} borderBottomWidth={1}  borderTopWidth={1} borderColor="#CAC6C4" alignSelf="center">
                                    {/* <Text fontSize={15} fontWeight="bold" color={colorMode == "light" ? "#2E2015":"F8F8F8"}>
                                        適合配料：
                                        <Text color={ifEquip(equipment1)}>{equipment1}</Text>
                                        <Text color={ifEquip(equipment2)}>{equipment2}</Text>
                                    </Text> */}
                                {equipNum(equipment1, equipment2)}
                                
                            
                    </Center>
                    

                    <Box height={38} borderBottomRadius={6} bgColor="#FFC764"></Box>
                </Box>
            </Center>
        </ScrollView>
    );
}

export default CookieScreen;