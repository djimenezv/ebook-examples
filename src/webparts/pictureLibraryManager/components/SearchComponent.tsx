import * as React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import Styles from './PictureLibraryManager.module.scss';

// search component properties and event definition
export interface ISearchProps {
    searchEvent ? (searchString) : PropTypes.func.isRequired
}

// search component definition as a stateless component
const Search: React.SFC < ISearchProps > = (props) => {
    return <div className = { Styles.container }>
            <div className = "form-group">
                <input  type = "text"
                        className = "form-control"
                        onChange = { evt => props.searchEvent(evt.target.value) }
                        placeholder = "Search" >
                </input>
              </div>
            </div>;
}
export default Search;
