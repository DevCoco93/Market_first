import { useState } from 'react';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import './scss/LoginPage.scss';

const LoginPage: React.FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const handleClickJoin: React.MouseEventHandler<Element> = () => {
    navigate('/join');
  };

  return (
    <section className='w-screen h-screen flexCol bg-gray-300'>
      <article className=' w-50vw h-70vh flex items-center border rounded-lg border-gray-500'>
        <i className='LoginImage w-1/2 h-full' />
        <div className='w-1/2 h-full flex-col items-center justify-center flex relative p-4rem '>
          <h2 className='text-[1.7rem] w-full font-bold tracking-widest mb-5rem text-center'>Login</h2>
          <EmailInput labelText='이메일' htmlFor='loginEmail' placeholder='이메일을 입력해주세요.' disabled={false} readonly={false} confirmExist={false} value={emailValue} setValue={setEmailValue} purpose='login' />
          <PasswordInput labelText='비밀번호' htmlFor='loginPassword' placeholder='비밀번호를 입력해주세요.' disabled={false} readonly={false} value={passwordValue} setValue={setPasswordValue} purpose={'login'} />

          <div className='flex w-full justify-center'>
            <button className='font-sans text-[1.4rem] mt-3rem w-35% h-4rem rounded-lg text-white bg-black hover:bg-gray-600'>Login</button>
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
