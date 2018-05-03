import * as React from 'react';
import styles from './PictureLibraryManager.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import FileUploadContainer from '../containers/UploaderContainer';
import SearchContainer from '../containers/SearchContainer'
import ListContainer  from '../containers/ListContainer';

export class PictureLibraryManager extends React.Component<IApp, {}> {
  public render() {
    return (<div>
            <div className={styles.webpartcontainer}>
              <SearchContainer/>
              <FileUploadContainer/>
            </div>
            <ListContainer/></div>);
  }


  getChildContext() {
    return {
      store: this.props.store
    };
  }

  static childContextTypes= {
    store:  React.PropTypes.object.isRequired
  }

}

export interface IApp {
    description : string
    store? : any
}
