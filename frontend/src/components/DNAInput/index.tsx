import React from "react";
import useDNA from "../../hooks/useDNA";

function DNAInput () {

    const { DNASequence, onChange } = useDNA();

    console.log(DNASequence)

    return (
        <>
            <input type='text' onChange={(e) => onChange(e.target.value)} />
        </>
    )
}

export default DNAInput