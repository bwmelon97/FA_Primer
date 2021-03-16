import { createReducer, ActionType, createAction } from 'typesafe-actions';

/* Action Types */
const CHANGE_DNA_INPUT = 'CHANGE_DNA_INPUT';
const REVERT_DNA = 'REVERT_DNA'
        
/* actions */
export const changeDNAInput = createAction(CHANGE_DNA_INPUT)<string>();
export const revertDNA = createAction(REVERT_DNA)();

const actions = {changeDNAInput, revertDNA}
export type DNAAction = ActionType<typeof actions>;

/* DNA state */
type DNAState = { 
    DNASequence: string; 
    revertedSeq: string;
}
const initialState: DNAState = { 
    DNASequence: '', 
    revertedSeq: ''
}

/* reducer */
const DNA = createReducer<DNAState, DNAAction>(initialState, {
    [CHANGE_DNA_INPUT]: (state, action) => ({...state, DNASequence: action.payload}),
    [REVERT_DNA]: (state) => ( {...state, revertedSeq: revertString(state.DNASequence)} )
})

const revertString = (str: string) => {
    const revertedStringArr = []
    for (const c of str) { revertedStringArr.unshift(c) }
    const reveredStr = revertedStringArr.join('')

    return reveredStr;
}

export default DNA;