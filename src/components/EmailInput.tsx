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
  const handleChangeInputEmail: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <If condition={purpose === 'login'}>
      <div className='w-full flexCol relative'>
        <label className='text-base w-full cursor-text h-10 text-gray-700' htmlFor={htmlFor}>
          {labelText}
        </label>
        <div className='w-full relative'>
          <input
            className='h-5rem text-[1.6rem] w-full mb-3.7rem border-b-0.1rem border-solid border-gray-500 transition-all duration-300 ease-in-out 
box-shadow: inset 0 0 0 100rem white -webkit-box-shadow: inset 0 0 0 100rem white'
            type='text'
            id={htmlFor}
            placeholder={placeholder}
            minLength={8}
            maxLength={100}
            disabled={disabled}
            readOnly={readonly}
            value={value}
            onChange={handleChangeInputEmail}
          />
        </div>
      </div>
    </If>
  );
};

export default EmailInput;
