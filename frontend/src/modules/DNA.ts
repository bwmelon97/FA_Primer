import { createReducer, ActionType, createAction } from 'typesafe-actions';

/* Action Types */
const CHANGE_DNA_INPUT = 'CHANGE_DNA_INPUT';
const REVERT_DNA = 'REVERT_DNA'
const COMPLEMENTARY_COMBINATION = 'COMPLEMENTARY_COMBINATION'
        
/* actions */
export const changeDNAInput = createAction(CHANGE_DNA_INPUT)<string>();
export const revertDNA = createAction(REVERT_DNA)();
export const complementaryCombinate = createAction(COMPLEMENTARY_COMBINATION)();

const actions = {changeDNAInput, revertDNA, complementaryCombinate}
export type DNAAction = ActionType<typeof actions>;

/* DNA state */
type DNAState = { 
    DNASequence: string; 
    revertedSeq: string;
    complementarySeq: string;
}
const initialState: DNAState = { 
    DNASequence: '', 
    revertedSeq: '',
    complementarySeq: ''
}

/* reducer */
const DNA = createReducer<DNAState, DNAAction>(initialState, {
    [CHANGE_DNA_INPUT]: (state, action) => ({...state, DNASequence: action.payload}),
    [REVERT_DNA]: (state) => ( {...state, revertedSeq: revertString(state.DNASequence)} ),
    [COMPLEMENTARY_COMBINATION]: (state) => ( 
        {...state, complementarySeq: createComplementaryString(state.revertedSeq)} 
    )
})

const revertString = (str: string) => {
    const revertedStringArr = []
    for (const c of str) { revertedStringArr.unshift(c) }
    const reveredStr = revertedStringArr.join('')

    return reveredStr;
}

const createComplementaryString = (str: string) => {
    const complementaryStringArr = [];
    for (const c of str) {
        switch (c) {
            case 'a': case 'A':
                complementaryStringArr.push('t');
                break;

            case 't': case 'T':
                complementaryStringArr.push('a');
                break;

            case 'g': case 'G':
                complementaryStringArr.push('c');
                break;

            case 'c': case 'C':
                complementaryStringArr.push('g');
                break;

            default:
                break;
        }
    }
    const complementaryStr = complementaryStringArr.join('');

    return complementaryStr;
}

export default DNA;