import { ScrollView } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image, Linking, Pressable } from "react-native";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CookiesListScreen from "./CookiesListScreen";

const CookieScreen = ({ route }) => {
    const { title, artist, url, image, star, starNum, description, price } = route.params;
    return(
        <Text>hello</Text>
    );
}

export default CookieScreen;