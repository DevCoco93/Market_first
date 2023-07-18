import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './views/LoginPage';
import JoinPage from './views/JoinPage';

function App() {
  return (
    <>
      <Routes>
        {/* protected route 완료 시  replace to '/main' 으로 변경 */}
        <Route path='/' element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/join' element={<JoinPage />} />
      </Routes>
    </>
  );
}

export default App;
