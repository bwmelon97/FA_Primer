import React from "react";
import useDNA from "../../hooks/useDNA";

function DNAInput () {

    const { 
        DNASequence, revertedDNA, complementarySeq,
        onChange, onRevert, createCompSeq
    } = useDNA();

    console.log(DNASequence)

    return (
        <>
            <h2> Input DNA </h2>
            <input type='text' onChange={(e) => onChange(e.target.value)} />

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