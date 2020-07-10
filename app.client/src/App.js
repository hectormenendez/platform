import React from "react";

import { Image, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

export const NAME = "App";

const Style = StyleSheet.create({
    Container: {
        backgroundColor: "red",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    Image: {
        width: 100,
        height: 100,
    },
});

function Component() {
    return (
        <React.Fragment>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <SafeAreaView style={Style.Container}>
                <Text>Hola Mundo</Text>
                <Image
                    source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
                    style={Style.Image}
                />
            </SafeAreaView>
        </React.Fragment>
    );
}
Component.displayName = NAME;

export default Component;
