import { useState } from 'react';
import If from './If';

type PropsType = {
  labelText: string;
  htmlFor: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  purpose: 'login' | 'edit';
};

const PasswordInput: React.FC<PropsType> = ({ labelText, htmlFor, placeholder, disabled, readonly, value, setValue, handleKeyPress, purpose }: PropsType): JSX.Element => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  // 비밀번호 입력 시 , 변하는 값을 setValue에 저장
  const handleChangeInputPassword: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // 유효성 검사,
  const handleChangeInputEdit: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(event.target.value) ? setErrorMessage('') : event.target.value === '' ? setErrorMessage('') : setErrorMessage('⚠️ 대소문자, 특수문자, 숫자를 조합하여 8자리이상의 비밀번호를 입력하여 주세요.');
    setValue(event.target.value);
  };
  return (
    <>
      <If condition={purpose === 'login'}>
        <div className='w-full flexCol relative'>
          <label className='text-base w-full cursor-text h-10 text-gray-700' htmlFor={htmlFor}>
            {labelText}
          </label>
          <div className='w-full relative'>
            <input type='password' className='bg-gray-300 h-5rem text-[1.6rem] w-full mb-3.7rem border-b-0.1rem border-solid border-gray-500 transition-all duration-300 ease-in-out focus:outline-none focus:border-b-0.1rem focus:border-gray-200 hover:border-gray-200' id={htmlFor} placeholder={placeholder} minLength={8} maxLength={100} disabled={disabled} readOnly={readonly} value={value} onChange={handleChangeInputPassword} onKeyPress={handleKeyPress} />
          </div>
        </div>
      </If>
      <If condition={purpose === 'edit'}>
        <div className='w-full flexCol relative'>
          <label className='text-base w-full cursor-text h-10 text-gray-700' htmlFor={htmlFor}>
            {labelText}
          </label>
          <div className='w-full relative'>
            <input type='password' className='bg-gray-300 h-5rem text-[1.6rem] w-full mb-3.7rem border-b-0.1rem border-solid border-gray-500 transition-all duration-300 ease-in-out focus:outline-none focus:border-b-0.1rem focus:border-gray-200 hover:border-gray-200' id={htmlFor} placeholder={placeholder} minLength={8} maxLength={100} disabled={disabled} readOnly={readonly} value={value} onChange={handleChangeInputEdit} />
            <div className='text-red-500'>{errorMessage}</div>
          </div>
        </div>
      </If>
    </>
  );
};

export default PasswordInput;
