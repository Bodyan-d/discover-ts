import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import defaultAvatar from '../../icons/default-avatar.svg';
import profileMenu from '../../icons/profile-menu.svg';
import { authOperations } from '../../redux/auth';

function Profile() {
	const dispatch = useDispatch();
	const user: any = useSelector<any>(state => state.auth.user);

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

	function handleKlick(evt: React.MouseEvent<HTMLButtonElement>) {
		dispatch(authOperations.logOut());
	}

	return (
		<section className='profile'>
			<button className='profile-menu'>
				<img src={profileMenu} alt='menu' className='menu-icon' />
			</button>

			<header className='profile-header'>
				<img className='profile-avatar' src={defaultAvatar} alt='avatar' />
				<h1 className='profile-name'>{user.username}</h1>
				{user.location ? <p></p> : null}
			</header>
			<button onClick={handleKlick} type='submit' className='log-submit'>
				LOGOUT
			</button>
		</section>
	);
}

export default Profile;
