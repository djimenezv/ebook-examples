import * as React from 'react';
import { PropTypes } from 'prop-types';
import Styles from './PictureLibraryManager.module.scss';
// search component properties and event definition
export interface IListProps {
    results?  : any,
    enabled : boolean
}

// search component definition as a functional component
const ListComponent : React.SFC<IListProps> = (props) => {
    return props.enabled ? ListComponentView(props) : null;
}

const ListComponentView = (props) => {
    return <div className={Styles.folderManager}>
        <span className={Styles.searchHeader}>{props.results.length} Results Found</span>
        <div className="list-group">{
            props.results.map((item) => {
                return (<a href={item.DirectLink} target='_blank' className='list-group-item list-group-item-action flex-column align-items-start'>
                    <span>{item.Title}</span>
                    <div>Author: {item.Author}</div>
                    <div>Created: {item.Created}</div>
                    <img src={item.ThumbNail}></img>
                </a>)
            })
        }
        </div>
    </div>
}

export default ListComponent;
