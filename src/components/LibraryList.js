import React, { Component } from 'react';
import { connect } from 'react-redux';

//create component list for display data to the listview
class LibraryList extends Component {
    render () {
        console.log(this.props);
        return;
    }
}

/*get state objek from global application inside redux store and take
some properties and provide to props inside LibraryList*/
const mapStateToProps = state => {
    return { libraries: state.libraries };
}

//uses connect helper to get access to data state from library
export default connect(mapStateToProps)(LibraryList);