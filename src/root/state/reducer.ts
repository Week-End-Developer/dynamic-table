import { createReducer, on } from '@ngrx/store';
import { filterAction } from './actions';

export const initialState = "";



export const reducer = createReducer(
    initialState,
    on(filterAction, (state, { text: text }) => state = text),
);

export function textReducer(state: any, action: any) {
    return reducer(state, action);
}




