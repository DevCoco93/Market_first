import { useState } from 'react';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';

const LoginPage: React.FC = (): JSX.Element => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  return (
    <section className='w-screen h-screen flexCol'>
      <article className=' w-50vw flex flex-col justify-center items-center border p-1.4rem rounded-lg border-gray-500'>
        <div className='min-w-50 w-80 max-w-55 relative'>
          <h2 className='text-[1.7rem] w-full font-bold tracking-widest mb-5rem'>Login</h2>
          <EmailInput labelText='이메일' htmlFor='loginEmail' placeholder='이메일을 입력해주세요.' disabled={false} readonly={false} confirmExist={false} value={emailValue} setValue={setEmailValue} purpose='login' />
          <PasswordInput labelText='비밀번호' htmlFor='loginPassword' placeholder='비밀번호를 입력해주세요.' disabled={false} readonly={false} value={passwordValue} setValue={setPasswordValue} purpose={'login'} />
          <div>{'error'}</div>
          <button>Login</button>
        </div>
      </article>
    </section>
  );
};

export default LoginPage;
