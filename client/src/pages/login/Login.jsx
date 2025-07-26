import { useRef, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/loginAction';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAlert } from '../../context/AlertContext';

const Login = () => {
    const [errors, setErrors] = useState({username: '', password: ''})
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
    const { handleShowAlert } = useAlert();
    const { user, isLoggedIn, error  }  = useSelector(state => state.auth);
    
    const navigate = useNavigate();
    const validateError =(username, password)=>{
        if(!username){
            setErrors(prev => ({...prev, username: 'Username is required!'}))
        }
        if(!password){
            setErrors(prev => ({...prev, password: 'Password is required!'}))
        }
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        validateError(username, password);
        if(username && password){
            dispatch(loginUser({username, password}))
            if(isLoggedIn){
            handleShowAlert( 'success', 'Login Success!')
            }
        }
    }
    useEffect(()=>{
        if(isLoggedIn && user){
            navigate('/todo')
        }
    },[isLoggedIn, user, navigate])

    return (
        <div className='login__container'>
            <div className="login">
                <form onSubmit={handleSubmit} className="login__form">
                    <h1 className="login__title">Todo</h1>
                    { error && <p className='login__error'>{error}</p>}
                    <label htmlFor="username" className="login__label">Username</label>
                    <input type="text" name="username" id="username" className="login__input" placeholder='username...' ref={usernameRef} />
                    { errors.username && <p className='input__error'>{errors.username}</p>}
                    <label htmlFor="password" className="login__label">Password</label>
                    <input type="password" name="password" id="password" className="login__input" placeholder='password...' ref={passwordRef} />
                    { errors.password && <p className='input__error'>{errors.password}</p>}
                    <button type="submit" className="login__button">Login</button>
                </form>
            </div>
        </div >
    )
}

export default Login