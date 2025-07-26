import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Todo from './pages/todo/Todo';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MyProfile from './pages/profile/MyProfile';
import NotFoundPage from './pages/notFound/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route element={ <ProtectedRoutes/>}>
            <Route path='todo' element={<Todo/>}/>
            <Route path='profile' element={<MyProfile/>} />
          </Route>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
