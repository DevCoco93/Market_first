import { useEffect, useState } from 'react';
import If from './If';

type PropsType = {
  labelText: string;
  htmlFor: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  confirmExist?: boolean;
  isCompleteConfirmingToExistEmail?: boolean;
  setIsCompleteConfirmingToExistEmail?: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  purpose: 'login' | 'edit' | 'reset';
};

const EmailInput: React.FC<PropsType> = ({ labelText, htmlFor, placeholder, disabled, readonly, confirmExist, isCompleteConfirmingToExistEmail, setIsCompleteConfirmingToExistEmail, value, setValue, handleKeyPress, purpose }: PropsType): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  // 이메일 값을 setValue에 저장
  const handleChangeInputEmail: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // 유효성 검사
  useEffect(() => {
    /^(([^<>()\[\]\\.,;:\s@"ㄱ-ㅎ가-힣]+(\.[^\<\>\(\)\[\]\\\.\,\;\:\s\@\"]+)*)|(".+"))@((\[[0-9]{1,}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value) ? setErrorMessage('') : value === '' ? setErrorMessage('') : setErrorMessage('이메일 형식이 올바르지 않습니다.');
  }, [value, setErrorMessage]);

  return (
    <>
      <If condition={purpose === 'login'}>
        <div className='w-full flexCol relative'>
          <label className='text-base w-full cursor-text h-10 text-gray-700' htmlFor={htmlFor}>
            {labelText}
          </label>
          <div className='w-full relative bg-gray-300'>
            <input className='bg-gray-300 h-5rem text-[1.6rem] w-full mb-3.7rem border-b-0.1rem border-solid border-gray-500 transition-all duration-300 ease-in-out focus:outline-none focus:border-b-[0.1rem] focus:border-gray-200 hover:border-gray-200' type='text' id={htmlFor} placeholder={placeholder} minLength={8} maxLength={100} disabled={disabled} readOnly={readonly} value={value} onChange={handleChangeInputEmail} onKeyPress={handleKeyPress} />
          </div>
        </div>
      </If>
      <If condition={purpose === 'edit'}>
        <div>{errorMessage}</div>
      </If>
    </>
  );
};

export default EmailInput;
