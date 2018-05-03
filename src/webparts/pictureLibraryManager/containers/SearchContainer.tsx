import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { IState } from '../Reducers';
import { setSearchString, showUploadForm, searchAction } from '../Actions';
import { PropTypes } from 'prop-types';
import Search from '../components/SearchComponent';

class SearchContainer extends React.Component <ISearch> {
    render() {
        return <Search searchEvent = {
                this.onSearchAction
                }> </Search>;
    }
    onSearchAction = (searchString) => {
        this.context.store.dispatch(setSearchString(searchString));
        this.context.store.dispatch(searchAction)
    }
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    }
}
export interface ISearch {}
export default SearchContainer;
