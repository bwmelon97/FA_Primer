import { createReducer, ActionType, createAction } from 'typesafe-actions';

/* Action Types */
const CHANGE_DNA_INPUT = 'CHANGE_DNA_INPUT';
// const REVERT_DNA = 'REVERT_DNA';
// const COMPLEMENTARY_COMBINATION = 'COMPLEMENTARY_COMBINATION';
const MAKE_PRIMER = 'MAKE_PRIMER';


/* actions */
export const changeDNAInput = createAction(CHANGE_DNA_INPUT)<string>();
// export const revertDNA = createAction(REVERT_DNA)();
// export const complementaryCombinate = createAction(COMPLEMENTARY_COMBINATION)();

// export const makePrimer = () => (dispatch: Dispatch<DNAAction>) => {
//     dispatch(revertDNA());
//     dispatch(complementaryCombinate());
// }
export const makePrimer = createAction(MAKE_PRIMER)();


// const actions = {changeDNAInput, revertDNA, complementaryCombinate}
const actions = {changeDNAInput, makePrimer}
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
    // [REVERT_DNA]: (state) => ( {...state, revertedSeq: revertString(state.DNASequence)} ),
    // [COMPLEMENTARY_COMBINATION]: (state) => ( 
    //     {...state, complementarySeq: createComplementaryString(state.revertedSeq)} 
    // )
    [MAKE_PRIMER]: (state) => {
        const revertedSeq = revertString(state.DNASequence)
        const complementarySeq = createComplementaryString(revertedSeq)
        return {
            ...state,
            revertedSeq, complementarySeq
        }
    }
})

const revertString = (str: string) => {
    const revertedStringArr = []
    for (const c of str) { revertedStringArr.unshift(c) }
    const revertedStr = revertedStringArr.join('');

    return revertedStr;
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
                complementaryStringArr.push(c);
                break;
        }
    }
    const complementaryStr = complementaryStringArr.join('');

    return complementaryStr
}

// const convertSequence = async (DNAseq: string) => {
//     const revertedDNA = await revertString(DNAseq);
//     const complementaryDNA = await createComplementaryString(revertedDNA);

//     return {
//         revertedDNA,
//         complementaryDNA
//     }
// }

export default DNA;