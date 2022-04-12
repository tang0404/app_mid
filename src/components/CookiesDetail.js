import React,{useState} from "react";
import { Box, HStack, VStack, AspectRatio, Text, Image, Pressable,useColorMode, Center} from "native-base"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CookiesDetail = ({ cookies }) => {
const { colorMode } = useColorMode();
// const [change, setChange] = useState(true);
//   const changeIcon = () => {
//       setChange(!change);
//   };
  return (
    <Box>
        <VStack 
            // borderLeftWidth= "7"
            mt="5"
            ml="18"
            mr="18"
            // borderLeftColor="#FFC764"
        >
        <Image 
            width= "78"
            height= "78"
            source={{uri: cookies.image}}
            alt="cookie"
            borderRadius={7}
        />
        <Text
          color={colorMode == "light" ? "#2E2015" : "#f8f8f8"} 
          textAlign="center" fontWeight="bold" mt="1.5" mb="1.5">{cookies.name}</Text>
        </VStack>

         {/* <Pressable onPress={() => changeIcon()}>
              
              {change ? 
              <Text width="50"height="30" 
              bg="#000"
              color="#FFC764"
              >
              ttt</Text>
                       :<MaterialCommunityIcons name={'bookmark'} color={'#6200EE'} size={24} />
              }
              </Pressable> */}
      
    </Box>
  )};

export default CookiesDetail;