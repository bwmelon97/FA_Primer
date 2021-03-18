import  { ChangeEvent, useState } from "react";

type UseInputArgs = {
    initialValue?: string;                      // Input에 들어갈 초기 값
    validator?: (value: string) => boolean;     // value를 업데이트 하기 전에 유효한 값인지 확인하는 함수
    callback?: (value: string) => any;          // input 태그 입력 시 실행되는 콜백 함수
}

const defaultArgs: UseInputArgs = {
    initialValue: '',
}

const useInput = ({ 
    initialValue = '',
    validator = undefined,
    callback = undefined
}: UseInputArgs = defaultArgs
) => {

    const [ value, setValue ] = useState(initialValue);
    
    const onChange = (
        event: ChangeEvent<HTMLTextAreaElement>
    ) => { 
        const { target: { value } } = event;
        const isVaildValue = validator ? validator(value) : true;
        if ( isVaildValue ) { 
            setValue(value) 
            if (callback) { callback(value) }
        }
    }

    const onClear = () => { setValue('') }

    return { value, onChange, onClear };
}

export default useInput;