import React from "react";
import { View, ViewStyle, TextStyle, StyleProp, Text, TouchableNativeFeedback } from "react-native";
import PropTypes from "prop-types";
import RippleIcon from "./RippleIcon";
import RippleTouchable from "./RippleTouchable";
type Props = {
    isRadioButton: Boolean,
    onCheckedChange(Boolean): Function,
    size: Number,
    checkBoxStyle: StyleProp<ViewStyle>,
    containerViewStyle: StyleProp<ViewStyle>,
    checked: Boolean,
    color: String,
    label: String,
    labelStyle: StyleProp<TextStyle>,
    colorRipple: String
};
export default class CheckBox extends React.PureComponent<Props> {
    iconType;
    iconChecked;
    iconUnChecked;
    static propTypes = {
        isRadioButton: PropTypes.bool,
        onCheckedChange: PropTypes.func,
        size: PropTypes.number,
        checkBoxStyle: PropTypes.any,
        containerViewStyle: PropTypes.any,
        checked: PropTypes.bool,
        color: PropTypes.string,
        label: PropTypes.string,
        colorRipple: PropTypes.string
    };
    static defaultProps = {
        isRadioButton: false,
        size: 25,
        checked: false,
        color: "blue",
        label: ""
    };
    constructor(props) {
        super(props);
        this.iconType = this.props.isRadioButton ? "ionicon" : "material-community";
        this.iconChecked = this.props.isRadioButton
            ? "ios-radio-button-on"
            : "checkbox-marked-outline";
        this.iconUnChecked = this.props.isRadioButton
            ? "ios-radio-button-off"
            : "checkbox-blank-outline";
    }
    render() {
        return (
            <View
                style={[
                    {
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: 5
                    },
                    this.props.containerViewStyle
                ]}
            >
                <RippleIcon
                    containerStyle={this.props.checkBoxStyle}
                    name={this.props.checked ? this.iconChecked : this.iconUnChecked}
                    color={this.props.color}
                    colorRipple={
                        this.props.colorRipple == null ? this.props.color : this.props.colorRipple
                    }
                    size={this.props.size}
                    type={this.iconType}
                    onPress={() => {
                        if (this.props.onCheckedChange != null)
                            this.props.onCheckedChange(!this.props.checked);
                    }}
                />
                {this.props.label != "" && this.props.label != null && (
                    <RippleTouchable
                        borderLess={false}
                        onPress={() => {
                            if (this.props.onCheckedChange != null)
                                this.props.onCheckedChange(!this.props.checked);
                        }}
                    >
                        <Text style={[{ color: "black", marginLeft: 5 }, this.props.labelStyle]}>
                            {this.props.label}
                        </Text>
                    </RippleTouchable>
                )}
            </View>
        );
    }
}
