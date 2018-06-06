import React, { Component } from 'react';
import { connect } from 'react-redux';

//create component list for display data to the listview
class LibraryList extends Component {
    render () {
        return;
    }
}

//uses connect helper to get access to data state from library
export default connect()(LibraryList);