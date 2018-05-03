import { assign } from 'lodash';

export interface IState {
    tasks: any[]
}

export const InitialState: IState ={
    tasks: []
}

export const TaskReducer = (state = InitialState, action: any) => {

    switch(action.type) {
        case 'load': return assign({}, state, {
            tasks: action.value
        });
        default: return state;
    }
}
