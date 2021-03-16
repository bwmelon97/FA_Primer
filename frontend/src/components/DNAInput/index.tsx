import React from "react";
import useDNA from "../../hooks/useDNA";

function DNAInput () {

    const { 
        DNASequence, revertedDNA, 
        onChange, onRevert 
    } = useDNA();

    console.log(DNASequence)

    return (
        <>
            <input type='text' onChange={(e) => onChange(e.target.value)} />

            <h2> Reverted DNA </h2>
            <button onClick={onRevert} > Revert !! </button>
            <h3> {revertedDNA} </h3>
        </>
    )
}

export default DNAInput