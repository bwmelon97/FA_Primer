import React from "react";
import useDNA from "../../hooks/useDNA";
import useInput from "../../hooks/useInput";

function DNAInput () {

    const { 
        revertedDNA, complementarySeq,
        setDNASequence, onRevert, createCompSeq
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
            value.endsWith('C') 
        )
    }

    const { value, onChange } = useInput({
        validator, callback: setDNASequence
    });

    return (
        <>
            <h2> Input DNA </h2>
            <input type='text' value={value} onChange={onChange} />

            <h2> Reverted DNA </h2>
            <button onClick={onRevert} > Revert !! </button>
            <h3> {revertedDNA} </h3>

            <h2> Complement Combination Sequence </h2>
            <button onClick={createCompSeq} > Just Do it !! </button>
            <h3> {complementarySeq} </h3>
        </>
    )
}

export default DNAInput