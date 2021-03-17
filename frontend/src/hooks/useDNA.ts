import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../modules";
// import { changeDNAInput, complementaryCombinate, makePrimer, revertDNA } from "../modules/DNA";
import { changeDNAInput, clearInput, makePrimer } from "../modules/DNA";


const useDNA = () => {
    const DNASequence = useSelector( (state: RootState) => state.DNA.DNASequence )
    const revertedDNA = useSelector( (state: RootState) => state.DNA.revertedSeq )
    const complementarySeq = useSelector( (state: RootState) => state.DNA.complementarySeq )

    const dispatch = useDispatch();
    const setDNASequence = useCallback(
        (DNAStr: string) => dispatch(changeDNAInput(DNAStr)), 
        [dispatch]
    )
    const clearDNAInput = useCallback(() => dispatch(clearInput()), [dispatch] )
    // const onRevert = useCallback(() => dispatch(revertDNA()), [dispatch])
    // const createCompSeq = useCallback(() => dispatch(complementaryCombinate()), [dispatch])
    const wholeInOne = useCallback(() => dispatch(makePrimer()), [dispatch])

    return {
        DNASequence, revertedDNA, complementarySeq,
        // setDNASequence, onRevert, createCompSeq, wholeInOne
        setDNASequence, clearDNAInput, wholeInOne
    }
}

export default useDNA;