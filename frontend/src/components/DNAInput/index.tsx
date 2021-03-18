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
            value.endsWith(' ') ||
            value === ''
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
        <S.Page>
            <S.Container>
                <S.Title>Convert DNA</S.Title>

                <S.SubTitle> Input DNA </S.SubTitle>
                <S.InputBox>
                    <S.DNAInput value={value} onChange={onChange}  />
                    <S.ButtonBox>
                        <S.InputButton onClick={clearInput} >Clear</S.InputButton>
                        <S.InputButton onClick={wholeInOne} >Convert</S.InputButton>
                    </S.ButtonBox>
                </S.InputBox>

                <S.ResultBox>
                    <S.SubTitle> Reverted DNA </S.SubTitle>
                    <S.Result> {revertedDNA} </S.Result>
                    {/* <button onClick={onRevert} > Revert !! </button> */}
                </S.ResultBox>

                <S.ResultBox>
                    <S.SubTitle> Complement Combination Sequence </S.SubTitle>
                    <S.Result> {complementarySeq} </S.Result>
                    {/* <button onClick={createCompSeq} > Just Do it !! </button> */}
                </S.ResultBox>
            </S.Container>
        </S.Page>
    )
}

export default DNAInput