import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

//create component list for display data to the listview
class LibraryList extends Component {

    componentWillMount() {
        //create datasource to listview
        const ds = new ListView.DataSource({ 
            rowHasChanged: (r1, r2) => r1 != r2
        });

        //set datasource to use libraries at the listview
        this.DataSource = ds.cloneWithRows(this.props.libraries);
    }

    //method to render a single element of the object to the list
    renderRow(library) {
        return <ListItem library={library} />;
    }

    render () {
        return (
            <ListView 
                dataSource={this.dataSource} 
                renderRow={this.renderRow}
                />
           
        )
    }
}

/*get state objek from global application inside redux store and take
some properties and provide to props inside LibraryList*/
const mapStateToProps = state => {
    return { libraries: state.libraries };
}

//uses connect helper to get access to data state from library
export default connect(mapStateToProps)(LibraryList);