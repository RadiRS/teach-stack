import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

//create listitem component
class ListItem extends Component {
  //lifecycle method
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  //render description if id of library same with id selected library
  renderDescription() {
    //destruct
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    //destruct
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    //return component cardsection, text and get value of the props
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
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

//get data state object and set to props
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

//return all action from actions and dispatch the action and pass to props in listitem
export default connect(
  mapStateToProps,
  actions
)(ListItem);
