import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../modules";
import { changeDNAInput } from "../modules/DNA";


const useDNA = () => {
    const DNASequence = useSelector( (state: RootState) => state.DNA.DNASequence )
    const dispatch = useDispatch();

    const onChange = useCallback(
        (DNAStr: string) => dispatch(changeDNAInput(DNAStr)), 
        [dispatch]
    )

    return {
        DNASequence,
        onChange
    }
}

export default useDNA;