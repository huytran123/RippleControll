/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import CheckBox from "./src/controls/CheckBox";
import RippleTouchable from "./src/controls/RippleTouchable";
import RippleIcon from "./src/controls/RippleIcon";
import RippleButton from "./src/controls/RipppleButton";
import { Icon } from "react-native-elements";

const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android:
        "Double tap R on your keyboard to reload,\n" + "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <RippleTouchable rippleSize={10}>
                    <Text style={[styles.welcome, { height: 100, width: 200 }]}>
                        Welcome to React Native!
                    </Text>
                </RippleTouchable>
                <RippleButton
                    iconRight={
                        <Icon name={"ios-megaphone"} size={20} type={"ionicon"} color={"white"} />
                    }
                    text="aloala"
                    buttonContainerStyle={{
                        height: 100,
                        width: 200,
                        backgroundColor: "red",
                        borderRadius: 5
                    }}
                />
                <RippleIcon name={"ios-megaphone"} size={25} type={"ionicon"} color={"green"} />

                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
