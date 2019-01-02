import React from "react";
import { TextInput, TextStyle, StyleProp } from "react-native";
import PropTypes from "prop-types";
type Props = {
  style: StyleProp<TextStyle>,
  number: Number,
  onChangeText(value): void,
  decimalSeparator: String,
  thousandsSeparator: String
};
export default class TextInputNumber extends React.PureComponent<Props> {
  static propTypes = {
    style: PropTypes.any,
    onChangeText: PropTypes.func,
    number: PropTypes.number,
    decimalSeparator: PropTypes.string,
    thousandsSeparator: PropTypes.string
  };
  static defaultProps = {
    number: null,
    decimalSeparator: ",",
    thousandsSeparator: ".",
    decimalSeparator: ",",
    thousandsSeparator: ".",
    onChangeText: text => {}
  };
  constructor(props) {
    super(props);
    this.state = {
      numberFormated: this.formatNumber(this.props.number)
    };
  }

  formatNumber(number = 0) {
    if (number == null || number == "" || number == undefined) return "";

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
      <TextInput
        keyboardType={"number-pad"}
        style={this.props.style}
        onChangeText={value => {
          var number = value.replace(new RegExp("\\" + this.props.thousandsSeparator, "g"), "");
          this.setState({ numberFormated: this.formatNumber(number) });
          this.props.onChangeText(this.state.numberFormated);
        }}
      >
        {this.state.numberFormated}
      </TextInput>
    );
  }
}
