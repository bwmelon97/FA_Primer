import styled from 'styled-components';

export const Page = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    padding: 5vh 0;
    width: 80%;
    
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
`;

    export const Title = styled.h1`
        align-self: center;
    `

    export const SubTitle = styled.div`
        margin-bottom: 1rem;
        
        font-size: 1.25rem;
        font-weight: bold;
    `;

    export const InputBox = styled.div`
        width: 100%;

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    `;

        export const DNAInput = styled.textarea`
            width: 90%;
            height: 3rem;
            padding: 0.5rem;

            font-size: 1rem;

            resize: none;
        `;

        export const ButtonBox = styled.div`
            width: 7.5%;

            display: flex;
            flex-flow: column nowrap;
            justify-content: space-between;
        `;

            export const InputButton = styled.button`
                height: 1.75rem;
            `;

    export const ResultBox = styled.div`
        margin: 1.5rem 0;
        width: 100%;
    `;

        export const Result = styled.div`
            width: 100%;
            
            font-size: 1rem;
            word-break: break-all;
        `;