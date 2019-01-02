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
    containerStyle: StyleProp<ViewStyle>
};

export default class RippleTouchable extends React.PureComponent<Props> {
    rippleAnimated;
    startValueScale = 0.01;
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
        containerStyle: PropTypes.any
    };

    static defaultProps = {
        ...TouchableWithoutFeedback.defaultProps,
        rippleColor: "#000",
        onPress: event => {},
        borderLess: true,
        rippleSize: 0,
        rippleDuration: 400
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
        this.startRipple(event.nativeEvent);
        setTimeout(() => {
            console.log("ON_PRESS");
            if (this.props.onPress != null) this.props.onPress(event);
        }, this.props.rippleDuration / 2);
    };

    onLongPress = event => {
        this.startRipple(event.nativeEvent);
        setTimeout(() => {
            console.log("ON_PRESS");
            if (this.props.onLongPress != null) this.props.onLongPress(event);
        }, this.props.rippleDuration / 2);
    };

    startRipple(nativeEvent) {
        //stop current animation
        this.rippleAnimated.stop();
        this.state.scaleAnimate.setValue(this.startValueScale);

        //get location press
        var locationClick = { ...this.state.locationClick };
        console.log("onPress", nativeEvent);
        locationClick.y = parseInt(nativeEvent.locationY);
        locationClick.x = parseInt(nativeEvent.locationX);
        this.setState({ locationClick: locationClick, isShowRipple: true });

        //start animation
        this.rippleAnimated.start(() => {
            this.setState({ isShowRipple: false });
        });
    }
    render() {
        const { locationClick, isShowRipple } = this.state;
        var top = 0;
        var left = 0;

        var rippleSize = this.props.rippleSize == 0 ? 40 : this.props.rippleSize;
        var rippleSizeScale = this.props.rippleSize == 0 ? 10 : 2.5;

        if (this.props.rippleSize == 0) {
            top = locationClick.y - 20;
            left = locationClick.x - 20;
        }

        return (
            <TouchableWithoutFeedback onPress={this.onPress} onLongPress={this.onLongPress}>
                <View
                    pointerEvents={"box-only"}
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
                                width: rippleSize,
                                top: top,
                                left: left,
                                height: rippleSize,
                                borderRadius: rippleSize / 2,
                                backgroundColor: this.props.rippleColor,
                                transform: [
                                    {
                                        scale: this.state.scaleAnimate.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, rippleSizeScale]
                                        })
                                    }
                                ],
                                opacity: this.state.scaleAnimate.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.35, 0]
                                })
                            }}
                        />
                    )}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
