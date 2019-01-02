import React from "react";
import { Text, TextStyle, StyleProp } from "react-native";
import CodeHelper from "../utils/CodeHelper";
import PropTypes from "prop-types";
type Props = {
  style: StyleProp<TextStyle>,
  number: Number,
  onPress: void,
  iconCurrency: String,
  decimalSeparator: String,
  thousandsSeparator: String
};
export default class TextNumber extends React.PureComponent<Props> {
  static propTypes = {
    style: PropTypes.any,
    number: PropTypes.number,
    onPress: PropTypes.func,
    iconCurrency: PropTypes.string,
    decimalSeparator: PropTypes.string,
    thousandsSeparator: PropTypes.string
  };
  static defaultProps = {
    number: null,
    iconCurrency: "",
    decimalSeparator: ",",
    thousandsSeparator: "."
  };
  constructor(props) {
    super(props);
  }

  formatNumber(number = 0) {
    if (CodeHelper.isNull(number)) return "";
    var strValue = number + "";
    var arr = strValue.split(".");
    if (arr.length == 1) {
      arr = strValue.split(",");
    }
    var result = [];
    var partThousand = arr[0];
    var length = partThousand.length;
    while (length > 3) {
      result.push(partThousand.substr(length - 3, 3));
      length = length - 3;
    }
    result.push(partThousand.substr(0, length));

    var value = result.reverse().join(this.props.thousandsSeparator);

    if (arr.length > 1) {
      value = value + this.props.decimalSeparator + arr[1];
    }
    return value;
  }

  render() {
    return (
      <Text style={this.props.style} onPress={this.props.onPress}>
        this.props.iconCurrency+ this.formatNumber(this.props.number)}
      </Text>
    );
  }
}
