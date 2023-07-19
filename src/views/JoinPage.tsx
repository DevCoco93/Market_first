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

  // post 요청 test 용 
  const handleClickPost = () => {
    const requestData = {
      email: emailValue,
      password: passwordValue,
    };

    fetch('http://localhost:3002/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // 응답 데이터 처리
      })
      .catch((error) => {
        console.error('Error:', error); // 에러 처리
      });
  };

  return (
    <>
      <section className='w-screen h-screen flexCol bg-gray-300'>
        <article className='w-50vw h-70vh flex items-center border rounded-lg border-gray-500'>
          <i className='LoginImage w-1/2 h-full' />
          <div className='w-1/2 h-full flex-col items-center justify-center flex relative p-4rem'>
            <i className='xi-long-arrow-left xi-3x absolute top-10 left-10 hover:text-white cursor-pointer' onClick={handleClickLoginPage} />
            <h2 className='text-[1.7rem] w-full font-bold tracking-widest mb-5rem text-center'>Join</h2>
            <EmailInput labelText='이메일' htmlFor='loginEmail' placeholder='이메일을 입력해주세요.' disabled={false} readonly={false} confirmExist={false} value={emailValue} setValue={setEmailValue} purpose='login' />
            <PasswordInput labelText='비밀번호' htmlFor='loginPassword' placeholder='비밀번호를 입력해주세요.' disabled={false} readonly={false} value={passwordValue} setValue={setPasswordValue} purpose={'edit'} />
            <div className='flex w-full justify-center'>
              <button className='font-sans text-[1.4rem] mt-1rem w-35% h-4rem rounded-lg text-white bg-black hover:bg-gray-600' onClick={handleClickPost}>
                Join
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default JoinPage;
