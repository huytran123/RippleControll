import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
type Props = {
  color: String,
  orientation: String,
  size: Number
};
export default class MyDivider extends React.PureComponent<Props> {
  static propTypes = {
    color: PropTypes.string,
    orientation: PropTypes.oneOf(["h", "v"]),
    size: PropTypes.number
  };
  static defaultProps = {
    color: "grey",
    orientation: "h",
    size: 1
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.color,
          width: this.props.orientation == "h" ? "100%" : this.props.size,
          height: this.props.orientation == "h" ? this.props.size : "100%"
        }}
      />
    );
  }
}
