**REACT-NATIVE-RIPPLE-CONTROLS**
------------
Base component for TouchableOpacity element with activeOpacity=0.9.

![alt text](https://github.com/huytran123/RippleControls/blob/master/Screen%20Recording%202019-01-15%20at%2010.54.57%20PM.gif)

**FEATURES**
------------
* Easy to use
* Configurable
* Consistent look and feel on iOS and Android
* Can be used as drop-in replacement for TouchableOpacity
* Pure javascript implementation.
* **RippleIcon** control support icon types: **material-community**, **font-awesome**, **font-awesome-5**,**octicon**, **onicon**, **foundation**, **evilicon**, **simple-line-icon**, **zocial**, **entypo**, **ant-design**, **feather**

**Installation**
------------
> npm i --save react-native-ripple-controls

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
                        containerStyle={{
                            width: "90%",
                            marginTop: 20,
                            borderRadius: 10,
                            height: 100,
                            backgroundColor: "#e6f2ff"
                        }}
                    />
    
                    <RippleIcon
                        containerStyle={{ marginTop: 20 }}
                        name={"birthday-cake"}
                        size={50}
                        type={"font-awesome-5"}
                        color={"#ff9900"}
                    />
    
                    <RippleButton
                        text={"BUTTON 1"}
                        textStyle={{color:"#fff", fontSize:30}}
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
    
