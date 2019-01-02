import { View, Text, ViewStyle, TextStyle, StyleProp } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import RippleTouchable from "./RippleTouchable";
type Props = {
    iconLeft: Element,
    iconRight: Element,
    text: String,
    buttonContainerStyle: StyleProp<ViewStyle>,
    textStyle: StyleProp<TextStyle>,
    rippleColor: String,
    onPress(event): void
};
export default class RippleButton extends React.PureComponent<Props> {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        iconLeft: PropTypes.element,
        iconRight: PropTypes.element,
        text: PropTypes.string,
        buttonContainerStyle: PropTypes.any,
        textStyle: PropTypes.any,
        rippleColor: PropTypes.string,
        onPress: PropTypes.func
    };

    static defaultProps = {
        rippleColor: "#000",
        text: ""
    };
    render() {
        return (
            <RippleTouchable
                containerStyle={[
                    {
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 5
                    },
                    this.props.buttonContainerStyle
                ]}
                rippleColor={this.props.rippleColor}
            >
                {this.props.iconLeft}
                <Text
                    style={[
                        { textAlign: "center", marginLeft: 5, marginRight: 5 },
                        this.props.textStyle
                    ]}
                >
                    {this.props.text}
                </Text>
                {this.props.iconRight}
            </RippleTouchable>
        );
    }
}
