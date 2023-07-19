import { useCallback, useEffect, useState } from 'react';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import './scss/LoginPage.scss';

const LoginPage: React.FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // 회원가입 클릭 시, join page로 이동
  const handleClickJoin: React.MouseEventHandler<Element> = () => {
    navigate('/join');
  };

  // input을 입력하고 엔터를 누르면 handleclickLogin 함수 실행
  const handleKeyPressInput: React.KeyboardEventHandler<HTMLInputElement> = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleClickLogin();
    }
  };

  // login 버튼을 누르면 handleLogin 함수 실행
  const handleClickButtonLogin: React.MouseEventHandler<HTMLButtonElement> = () => {
    handleClickLogin();
  };

  // 유효성 검사, 이메일과 비밀번호 길이가 0 또는 이메일 형식이 잘못되어 있는지 확인, 정상적으로 입력 됐다면 handleLogin 실행
  const handleClickLogin = useCallback(() => {
    if (emailValue.length === 0) {
      setErrorMessage('이메일을 입력해주세요.');
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setErrorMessage('이메일 형식이 올바르지 않습니다.');
      return;
    } else if (passwordValue.length === 0) {
      setErrorMessage('비밀번호를 입력해주세요.');
      return;
    } else {
      handleLogin();
    }
  }, [emailValue, passwordValue, setErrorMessage]);

  // 문제 없을 시, main page 로 이동시킴
  const handleLogin = () => {
    navigate('/main');
  };

  // 에러 메세지 초기화
  useEffect(() => {
    setErrorMessage('');
  }, [emailValue, passwordValue]);

  return (
    <section className='w-screen h-screen flexCol bg-gray-300'>
      <article className=' w-50vw h-70vh flex items-center border rounded-lg border-gray-500'>
        <i className='LoginImage w-1/2 h-full' />
        <div className='w-1/2 h-full flex-col items-center justify-center flex relative p-4rem '>
          <h2 className='text-[1.7rem] w-full font-bold tracking-widest mb-5rem text-center'>Login</h2>
          <EmailInput labelText='이메일' htmlFor='loginEmail' placeholder='이메일을 입력해주세요.' disabled={false} readonly={false} confirmExist={false} value={emailValue} setValue={setEmailValue} handleKeyPress={handleKeyPressInput} purpose='login' />
          <PasswordInput labelText='비밀번호' htmlFor='loginPassword' placeholder='비밀번호를 입력해주세요.' disabled={false} readonly={false} value={passwordValue} setValue={setPasswordValue} handleKeyPress={handleKeyPressInput} purpose={'login'} />
          <div className='text-red-500'>{errorMessage}</div>
          <div className='flex w-full justify-center'>
            <button className='font-sans text-[1.4rem] mt-1rem w-35% h-4rem rounded-lg text-white bg-black hover:bg-gray-600' onClick={handleClickButtonLogin}>
              Login
            </button>
          </div>
          <div className='mt-1rem text-[1.2rem] cursor-pointer hover:text-white' onClick={handleClickJoin}>
            회원가입
          </div>
        </div>
      </article>
    </section>
  );
};

export default LoginPage;
