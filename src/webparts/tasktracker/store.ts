import { Store, createStore, applyMiddleware } from 'redux';
import { IState, TaskReducer , InitialState } from './Reducers';
import { getMyTasks } from './Model';
import thunk  from 'redux-thunk';

export const actionLoad = (dispatch, getState)=>{
    return getMyTasks(getState().context).then((response)=>{
        dispatch({
            type:'load',
            value:response
        })
    });
}

export const CreateStore = (initialState) : Store<IState> => {
    return createStore(TaskReducer,initialState, applyMiddleware(thunk));
}
