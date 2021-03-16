import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../modules";
import { changeDNAInput, complementaryCombinate, revertDNA } from "../modules/DNA";


const useDNA = () => {
    const DNASequence = useSelector( (state: RootState) => state.DNA.DNASequence )
    const revertedDNA = useSelector( (state: RootState) => state.DNA.revertedSeq )
    const complementarySeq = useSelector( (state: RootState) => state.DNA.complementarySeq )

    const dispatch = useDispatch();
    const onChange = useCallback(
        (DNAStr: string) => dispatch(changeDNAInput(DNAStr)), 
        [dispatch]
    )
    const onRevert = useCallback(() => dispatch(revertDNA()), [dispatch])
    const createCompSeq = useCallback(() => dispatch(complementaryCombinate()), [dispatch])

    return {
        DNASequence, revertedDNA, complementarySeq,
        onChange, onRevert, createCompSeq
    }
}

export default useDNA;