import { Store, createStore, applyMiddleware } from 'redux';
import { initialStore, rootReducers, IState } from './Reducers';
import thunk from 'redux-thunk';
import { assign } from 'lodash';

export const CreateStore = (SPContext) : Store<IState> => {
    const initStore = assign(initialStore, { spContext : SPContext});
    return createStore(rootReducers, initStore, applyMiddleware(thunk));
}
