import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import ProtectedRoutes from './routes/ProtectedRoutes';
import Todo from './pages/todo/Todo';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MyProfile from './pages/profile/MyProfile';
import NotFoundPage from './pages/notFound/NotFoundPage';
import Alert from './components/alert/Alert';
import { useAlert } from './context/AlertContext';

function App() {
  const { showAlert, alertData, setShowAlert } = useAlert();
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
      {showAlert && (
        <Alert
        title={alertData.title}
        message={alertData.message}
        onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
}

export default App;
