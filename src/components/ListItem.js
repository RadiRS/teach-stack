import React, { Component } from "react";
import { connect } from 'react-redux';
import { Text } from "react-native";
import { CardSection } from "./common";
import * as actions from '../actions';

//create listitem component
class ListItem extends Component {
  render() {
    //destruct styles
    const { titleStyle } = styles;
    console.log(this.props);
    //return component cardsection, text and get value of the props 
    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
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
export default connect(null, actions) (ListItem);
