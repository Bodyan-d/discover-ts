import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

function Profile() {
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(authOperations.getCurrentUser());
	}, []);

	return <h1 className='app-title'>Profile</h1>;
}

export default Profile;
