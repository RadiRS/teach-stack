import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { CardSection } from "./common";
import * as actions from "../actions";

//create listitem component
class ListItem extends Component {
  render() {
    //destruct 
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    
    //return component cardsection, text and get value of the props
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

//create styles object
const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

//return all action from actions and dispatch the action and pass to props in listitem
export default connect(
  null,
  actions
)(ListItem);
