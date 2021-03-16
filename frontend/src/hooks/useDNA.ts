import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../modules";
import { changeDNAInput, revertDNA } from "../modules/DNA";


const useDNA = () => {
    const DNASequence = useSelector( (state: RootState) => state.DNA.DNASequence )
    const revertedDNA = useSelector( (state: RootState) => state.DNA.revertedSeq )

    const dispatch = useDispatch();
    const onChange = useCallback(
        (DNAStr: string) => dispatch(changeDNAInput(DNAStr)), 
        [dispatch]
    )
    const onRevert = useCallback(() => dispatch(revertDNA()), [dispatch])

    return {
        DNASequence, revertedDNA,
        onChange, onRevert
    }
}

export default useDNA;