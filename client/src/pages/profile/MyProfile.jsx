import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './MyProfile.scss';
import avatar from '../../assets/avator.png';
import { fetchUserDetails } from '../../store/actions/userAction';
import Edit from '../../components/edit/Edit';

const MyProfile = () => {
  const userInfo = useSelector(state => state.user.userDetails);
  console.log(userInfo)
  const { name, email, phone, address: { street, city, zipcode }} = userInfo;
  const userId = useSelector(state => state.auth.userId);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const handleClick =()=>{
    setIsEdit(true)
  }
  useEffect(()=>{
    dispatch(fetchUserDetails(userId))
  },[dispatch, userId])
  return (
    <div className='myprofile_container'>
      <div className='myprofile'>
        <div className='myprofile__image'>
          <img src={avatar} alt='Profile' />
        </div>
        <div className='myprofile__infos'>
          <p className='myprofile__infos__border'></p>
          <h2 className='myprofile__infos__title'>Personal Information</h2>
          <p className='myprofile__infos__details'>Name: <span>{name}</span></p>
          <p className='myprofile__infos__details'>Email: <span>{email}</span></p>
          <p className='myprofile__infos__details'>Telephone: <span>{phone}</span></p>
          <div className='myprofile__infos__details'>Address:
            <ul>
              <li>Street: <span>{street}</span></li>
              <li>City: <span>{city}</span></li>
              <li>Zipcode: <span>{zipcode}</span></li>
            </ul>
          </div>
          <div className='myprofile__infos__edit' onClick={handleClick}>
            <p>Edit</p>
          </div>
          { isEdit && <Edit userInfo={userInfo} setIsEdit={setIsEdit}/>}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
