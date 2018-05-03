import * as React from 'react';
import styles from './Tasktracker.module.scss';
import { ITasktrackerProps } from './ITasktrackerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { bindActionCreators, } from 'redux';
import { Provider } from 'react-redux';
import * as ReactDom from 'react-dom';
import { IState } from '../Reducers';
export default class Tasktracker extends React.Component < ITasktrackerProps, {} > {
public render(): JSX.Element {
return (<div className = { styles.container }>
           <div>
             <div className = { styles.title} > My Tasks </div>
               <div className = { styles.header } >
                  <span> Task </span>
                  <span> Due Date </span>
                  <span> Days Left </span>
                  <span> % Complete </span>
              </div>
              {
                this.props.tasks.map(function(element) {
                  return <div className = { styles.item} >
                     <span> { element.title } </span>
                     <span> { element.duedate.format('yyyy-dd-MM') } </span>
                     <span className = { styles.number } > { element.daysleft} </span>
                     <span className = { styles.number } > { element.percentcomplete } %</span>
                   </div>
               })
              }
            </div>
          </div>);
        }
     }
