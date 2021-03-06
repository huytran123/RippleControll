**REACT-NATIVE-RIPPLE-CONTROLS**
------------
Base component for TouchableWithoutFeedback element.

![alt text](https://raw.githubusercontent.com/huytran123/RippleControls/master/Screen%20Recording%202019-01-15%20at%2010.54.57%20PM.gif)

**FEATURES**
------------
* Easy to use
* Easy to configurable
* Consistent on iOS and Android
* Can be used as drop-in replacement for TouchableOpacity, TouchableHighlight, TouchableNativeFeedback
* Pure javascript implementation.


**Installation**
------------
* Step 1: Install react-native-ripple-controls
> npm i --save react-native-ripple-controls

* Step 2: Install react-native-elements
> npm i --save react-native-elements

* Step 3: Install react-native-vector-icons
> npm i --save react-native-vector-icons

* Step 4: Link react-native-vector-icons
> react-native link react-native-vector-icons

Usage
------------
    import React, { Component } from "react";
    import {  StyleSheet, View } from "react-native";
    import {RippleTouchable, RippleButton, RippleIcon} from 'react-native-ripple-controls;
    
    export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RippleTouchable
                    containerStyle={{
                        width: "90%",
                        borderRadius: 10,
                        height: 100,
                        backgroundColor: "#ff1a1a"
                    }}
                />

                <RippleTouchable
                    rippleColor={"#1a6600"}
                    haveSubPress={true}
                    containerStyle={{
                        width: "90%",
                        marginTop: 20,
                        borderRadius: 10,
                        height: 100,
                        backgroundColor: "#e6f2ff"
                    }}
                >
                    <RippleIcon
                        containerStyle={{ marginTop: 20 }}
                        name={"birthday-cake"}
                        size={50}
                        type={"font-awesome-5"}
                        color={"#ff9900"}
                    />
                </RippleTouchable>

                <RippleIcon
                    containerStyle={{ marginTop: 20 }}
                    name={"birthday-cake"}
                    size={50}
                    type={"font-awesome-5"}
                    color={"#ff9900"}
                />

                <RippleButton
                    text={"BUTTON 1"}
                    textStyle={{ color: "#fff", fontSize: 30 }}
                    buttonContainerStyle={{
                        width: "90%",
                        marginTop: 20,
                        borderRadius: 10,
                        height: 100,
                        backgroundColor: "#009900"
                    }}
                />
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
    }
});

