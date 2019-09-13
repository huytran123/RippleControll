import { ViewStyle, StyleProp } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import PropTypes from "prop-types";
import RippleTouchable from "./RippleTouchable";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFeather from "react-native-vector-icons/Feather";
type Props = {
    /**
     * Name of icon
     */
    name: String,
    /**
     * Type: defaults to material-community, options are:
     * font-awesome-5, feather, ant-design, material-community, zocial, font-awesome, octicon, ionicon, foundation, evilicon, simple-line-icon, or entypo
     * @default 'material-community'
     */
    type: String,
    /**
     * Size of icon
     * @default 26
     */
    size: Number,
    /**
     * Color of icon
     *
     * @default 'black'
     */
    color: String,
    padding: Number,
    containerStyle: StyleProp<ViewStyle>,
    onPress(event): void,
    onLongPress(event): void
};

export default class RippleIcon extends React.PureComponent<Props> {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        name: PropTypes.string,
        type: PropTypes.oneOf([
            "material-community",
            "font-awesome",
            "font-awesome-5",
            "octicon",
            "ionicon",
            "foundation",
            "evilicon",
            "simple-line-icon",
            "zocial",
            "entypo",
            "ant-design",
            "feather"
        ]),
        size: PropTypes.number,
        color: PropTypes.string,
        containerStyle: PropTypes.any,
        onPress: PropTypes.func,
        onLongPress: PropTypes.func,
        colorRipple: PropTypes.string,
        padding: PropTypes.number
    };
    static defaultProps = {
        padding: 0,
        size: 26,
        color: "#000",
        type: "material-community"
    };
    renderIcon() {
        const { type } = this.props;
        if (type == "font-awesome-5") {
            return (
                <IconFontAwesome5
                    name={this.props.name}
                    size={this.props.size}
                    color={this.props.color}
                />
            );
        } else if (type == "feather") {
            return (
                <IconFeather
                    name={this.props.name}
                    size={this.props.size}
                    color={this.props.color}
                />
            );
        } else if (type == "ant-design") {
            return (
                <IconAntDesign
                    name={this.props.name}
                    size={this.props.size}
                    color={this.props.color}
                />
            );
        } else {
            return (
                <Icon
                    name={this.props.name}
                    size={this.props.size}
                    color={this.props.color}
                    type={this.props.type}
                />
            );
        }
    }
    render() {
        return (
            <RippleTouchable
                rippleSizeScale={2.5}
                isRippleCenter={true}
                rippleSize={this.props.size + this.props.padding}
                borderLess={false}
                rippleColor={this.props.color}
                containerStyle={[
                    {
                        width: this.props.size + this.props.padding,
                        height: this.props.size + this.props.padding,
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    this.props.containerStyle
                ]}
                onPress={this.props.onPress}
                onLongPress={this.props.onLongPress}
            >
                {this.renderIcon()}
            </RippleTouchable>
        );
    }
}
