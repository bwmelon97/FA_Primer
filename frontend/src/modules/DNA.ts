import { createReducer, ActionType, createAction } from 'typesafe-actions';

/* Action Types */
const CHANGE_DNA_INPUT = 'CHANGE_DNA_INPUT';
        
/* actions */
export const changeDNAInput = createAction(CHANGE_DNA_INPUT)<string>();

const actions = {changeDNAInput}
export type DNAAction = ActionType<typeof actions>;

/* DNA state */
type DNAState = { 
    DNASequence: string;
}
const initialState: DNAState = { 
    DNASequence: ''
}

/* reducer */
const DNA = createReducer<DNAState, DNAAction>(initialState, {
    [CHANGE_DNA_INPUT]: (state, action) => ({...state, DNASequence: action.payload}),
})


export default DNA;