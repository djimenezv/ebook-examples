import { IState }  from './Reducers';
import * as React from 'react';
import { connect } from 'react-redux';
import Tasktracker from './components/Tasktracker';
const mapStateToProps = (state: IState) => ({
    store: state
});
const container = ({ store }) => (
  <div>
    <Tasktracker tasks = { store.tasks } description = { 'My Tasks List' } >
    </Tasktracker>
  </div>)
  export default connect(mapStateToProps)(container);
