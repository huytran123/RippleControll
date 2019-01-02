import { View, TouchableNativeFeedback, ViewStyle, StyleProp } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import RippleTouchable from "./RippleTouchable";
type Props = {
    name: String,
    type: String,
    size: Number,
    color: String,
    containerStyle: StyleProp<ViewStyle>,
    onPress(): void
};

export default class RippleIcon extends React.PureComponent<Props> {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        name: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.number,
        color: PropTypes.string,
        containerStyle: PropTypes.any,
        onPress: PropTypes.func,
        colorRipple: PropTypes.string
    };
    static defaultProps = {
        size: 20,
        color: "#000",
        onPress: () => {}
    };
    render() {
        return (
            <RippleTouchable
                rippleSize={this.props.size}
                borderLess={false}
                rippleColor={this.props.color}
                containerStyle={[
                    { width: this.props.size, height: this.props.size },
                    this.props.containerStyle
                ]}
                onPress={() => {
                    this.props.onPress();
                }}
            >
                <Icon
                    name={this.props.name}
                    size={this.props.size}
                    color={this.props.color}
                    type={this.props.type}
                />
            </RippleTouchable>
        );
    }
}
