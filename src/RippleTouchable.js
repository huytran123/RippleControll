import React from "react";
import {
    TouchableWithoutFeedback,
    View,
    Animated,
    Easing,
    Platform,
    StyleProp,
    ViewStyle
} from "react-native";
import PropTypes from "prop-types";
type Props = {
    rippleColor: String,
    onPress(event): void,
    onLongPress(event): void,
    borderLess: Boolean,
    rippleSize: Number,
    rippleDuration: Number,
    rippleSizeScale: Number,
    containerStyle: StyleProp<ViewStyle>,
    isRippleCenter: Boolean,
    haveSubPress: Boolean
};

export default class RippleTouchable extends React.PureComponent<Props> {
    rippleAnimated;
    startValueScale = 0.01;
    leftRipple = 0;
    topRipple = 0;
    constructor(props) {
        super(props);
        this.state = {
            scaleAnimate: new Animated.Value(this.startValueScale),
            opacityAnimate: new Animated.Value(1),
            locationClick: { x: 0, y: 0 },
            isShowRipple: false
        };
    }

    static propTypes = {
        ...TouchableWithoutFeedback.propTypes,
        rippleColor: PropTypes.string,
        borderLess: PropTypes.bool,
        rippleSize: PropTypes.number,
        rippleDuration: PropTypes.number,
        containerStyle: PropTypes.any,
        rippleSizeScale: PropTypes.number,
        isRippleCenter: PropTypes.bool,
        haveSubPress: PropTypes.bool
    };

    static defaultProps = {
        ...TouchableWithoutFeedback.defaultProps,
        rippleColor: "#000",
        onPress: event => {},
        borderLess: true,
        rippleSize: 40,
        rippleDuration: 500,
        rippleSizeScale: 15,
        isRippleCenter: false,
        haveSubPress: false
    };

    componentDidMount() {
        this.setState({ isShowRipple: false });
        this.rippleAnimated = Animated.timing(this.state.scaleAnimate, {
            duration: this.props.rippleDuration,
            toValue: 1,
            easing: Easing.easeInCirc,
            useNativeDriver: Platform.OS === "android"
        });
    }
    onPress = event => {
        if (this.props.onPress == null) return;
        this.startRipple(event.nativeEvent);
        setTimeout(() => {
            if (this.props.onPress != null) this.props.onPress(event);
        }, this.props.rippleDuration);
    };

    onLongPress = event => {
        if (this.props.onLongPress == null) return;
        this.startRipple(event.nativeEvent);
        setTimeout(() => {
            if (this.props.onLongPress != null) this.props.onLongPress(event);
        }, this.props.rippleDuration);
    };

    startRipple(nativeEvent) {
        //stop current animation
        this.rippleAnimated.stop();
        this.state.scaleAnimate.setValue(this.startValueScale);

        //get location press
        var locationClick = { ...this.state.locationClick };
        locationClick.x = nativeEvent.locationX;
        locationClick.y = nativeEvent.locationY;
        this.setState({ locationClick: locationClick, isShowRipple: true });

        //set left and top ripple

        if (!this.props.isRippleCenter) {
            this.topRipple = locationClick.y - this.props.rippleSize / 2;
            this.leftRipple = locationClick.x - this.props.rippleSize / 2;
        }

        //start animation
        this.rippleAnimated.start(() => {
            this.setState({ isShowRipple: false });
        });
    }
    render() {
        const { isShowRipple } = this.state;

        return (
            <TouchableWithoutFeedback onPress={this.onPress} onLongPress={this.onLongPress}>
                <View
                    pointerEvents={this.props.haveSubPress ? "auto" : "box-only"}
                    style={[
                        { overflow: this.props.borderLess ? "hidden" : "visible" },
                        this.props.containerStyle
                    ]}
                >
                    {this.props.children}
                    {isShowRipple && (
                        <Animated.View
                            pointerEvents={"none"}
                            style={{
                                position: "absolute",
                                width: this.props.rippleSize,
                                top: this.topRipple,
                                left: this.leftRipple,
                                height: this.props.rippleSize,
                                borderRadius: this.props.rippleSize / 2,
                                backgroundColor: this.props.rippleColor,
                                transform: [
                                    {
                                        scale: this.state.scaleAnimate.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [
                                                this.startValueScale,
                                                this.props.rippleSizeScale
                                            ]
                                        })
                                    }
                                ],
                                opacity: this.state.scaleAnimate.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.45, 0]
                                })
                            }}
                        />
                    )}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
