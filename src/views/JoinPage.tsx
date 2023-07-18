import { useState } from 'react';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import './scss/LoginPage.scss';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const JoinPage: React.FC = (): JSX.Element => {
  const navigate: NavigateFunction = useNavigate();
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');

  const handleClickLoginPage: React.MouseEventHandler<Element> = () => {
    navigate('/login');
  };
  return (
    <>
      <section className='w-screen h-screen flexCol bg-gray-300'>
        <article className='w-40vw h-70vh flex items-center border rounded-lg border-gray-500'>
          <i className='LoginImage w-1/2 h-full' />
          <div className='w-1/2 h-full flex-col items-center justify-center flex relative p-4rem'>
            <i className='xi-long-arrow-left' onClick={handleClickLoginPage} />
            <h2 className='text-[1.7rem] w-full font-bold tracking-widest mb-5rem text-center'>Join</h2>
            <EmailInput labelText='이메일' htmlFor='loginEmail' placeholder='이메일을 입력해주세요.' disabled={false} readonly={false} confirmExist={false} value={emailValue} setValue={setEmailValue} purpose='login' />
            <PasswordInput labelText='비밀번호' htmlFor='loginPassword' placeholder='비밀번호를 입력해주세요.' disabled={false} readonly={false} value={passwordValue} setValue={setPasswordValue} purpose={'login'} />
          </div>
        </article>
      </section>
    </>
  );
};

export default JoinPage;
