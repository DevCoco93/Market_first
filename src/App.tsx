import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import JoinPage from './views/JoinPage';
import Header from './components/Header';
import MainPage from './views/MainPage';

function App() {
  return (
    <>
      <Routes>
        {/* protected route 완료 시  replace to '/main' 으로 변경 */}
        {/* /main 경로로 접속 시 Header 컴포넌트와 함께 MainPage 컴포넌트를 보여줌 */}
        <Route path='/' element={<Header />}>
          <Route path='main' element={<MainPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />
      </Routes>
    </>
  );
}

export default App;
