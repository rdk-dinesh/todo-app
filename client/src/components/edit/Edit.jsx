import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserDetails } from '../../store/actions/userAction';
import './Edit.scss'

const Edit = ({ userInfo, setIsEdit }) => {
    const [details, setDetails] = useState(userInfo);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.userId);
    const { name, email, phone, address: { street, city, zipcode } } = details;

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (['street', 'city', 'zipcode'].includes(name)) {
            setDetails((prevState) => ({
                ...prevState,
                address: {
                    ...prevState.address,
                    [name]: value
                }
            }));
        } else {
            setDetails((prevState) => ({
                ...prevState,
                [name]: value,
                address: {
                    ...prevState.address
                }
            }));
        }
    };

    const onSubmitChange = (e) => {
        e.preventDefault();
        dispatch(updateUserDetails({ userId, details }));
        setIsEdit(false)
    }
    return (
        <div className='edit_container'>
            <div className="edit">
                <div className="edit__title">
                    <h2>Edit user details</h2>
                    <p onClick={() => setIsEdit(false)}><i class="fa-solid fa-xmark"></i></p>
                </div>
                <form className="edit__form" onSubmit={onSubmitChange}>
                    <div className="edit__form__datas">
                        <label>Name:</label>
                        <input type="text" onChange={handleChange} value={name} name="name" required />
                    </div>
                    <div className="edit__form__datas">
                        <label>Email:</label>
                        <input type="text" onChange={handleChange} value={phone} name="phone" required />
                    </div>
                    <div className="edit__form__datas">
                        <label>Phone no:</label>
                        <input type="text" onChange={handleChange} value={email} name="email" required />
                    </div>
                    <p className='edit__form__datas'>Address:</p>
                    <div className='edit__form__address'>
                        <div className="edit__form__datas">
                            <label>Street:</label>
                            <input type="text" onChange={handleChange} value={street} name="street" required />
                        </div>
                        <div className="edit__form__datas">
                            <label>City:</label>
                            <input type="text" onChange={handleChange} value={city} name="city" required />
                        </div>
                        <div className="edit__form__datas">
                            <label>Zipcode:</label>
                            <input type="text" onChange={handleChange} value={zipcode} name="zipcode" required />
                        </div>
                    </div>
                    <div className='edit__form__button'>
                        <button className='edit__form__button__cancel' onClick={() => setIsEdit(false)}>cancel</button>
                        <button className='edit__form__button__ok' type='submit'> Ok </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Edit