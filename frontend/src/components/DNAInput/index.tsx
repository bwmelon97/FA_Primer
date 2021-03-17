import React from "react";

import * as S from "./DNAInput.styles";
import useDNA from "../../hooks/useDNA";
import useInput from "../../hooks/useInput";


function DNAInput () {

    const { 
        revertedDNA, complementarySeq,
        // setDNASequence, onRevert, createCompSeq, wholeInOne
        setDNASequence, clearDNAInput, wholeInOne
    } = useDNA();

    const validator = (value: string) => {
        return (
            value.endsWith('a') ||
            value.endsWith('A') ||
            value.endsWith('t') ||
            value.endsWith('T') ||
            value.endsWith('g') ||
            value.endsWith('G') ||
            value.endsWith('c') ||
            value.endsWith('C') ||
            value.endsWith(' ')
        )
    }

    const { value, onChange, onClear } = useInput({
        validator, callback: setDNASequence
    });

    const clearInput = () => {
        onClear();
        clearDNAInput();
    }

    return (
        <S.Container>
            <h2> Input DNA </h2>
            <S.DNAInput type='text' value={value} onChange={onChange} />
            <button onClick={clearInput} >clear</button>

            <button onClick={wholeInOne} >Make Primer</button>

            <h2> Reverted DNA </h2>
            {/* <button onClick={onRevert} > Revert !! </button> */}
            <h3> {revertedDNA} </h3>

            <h2> Complement Combination Sequence </h2>
            {/* <button onClick={createCompSeq} > Just Do it !! </button> */}
            <h3> {complementarySeq} </h3>
        </S.Container>
    )
}

export default DNAInput