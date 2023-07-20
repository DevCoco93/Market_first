import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트를 감지하여 상태 업데이트
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트 될 때 이벤트 리스너 해제
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav className={`fixed flex w-100% top-0 z-1000 h-10rem justify-between ${scrolling ? 'bg-gray-300' : 'bg-black bg-opacity-10'}`}>
        <div className='h-8rem w-12rem flexRow mt-1rem border-r-0.1rem border-gray-300'>
          <h2 className='text-white text-[3rem]'>Market</h2>
        </div>
        <div>Searching Bar</div>
        <div>Login Info, Connect Wallet etc</div>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
