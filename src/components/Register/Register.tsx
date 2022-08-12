import React, { useState } from 'react';
import goback from '../../icons/goback.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authOperations } from '../../redux/auth';

function Register() {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [lastButtonTab, setLastButtonTab] = useState<any>(Date.now() - 15000);

	// const [credIsValid, setCredIsValid] = useState();
	const dispatch = useDispatch<any>();

	function handleGoBack(evt: React.MouseEvent<HTMLButtonElement>) {
		window.history.back();
	}

	function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
		evt.preventDefault();

		if (
			username.trim() === '' ||
			email.trim() === '' ||
			password.trim() === ''
		) {
			return;
		}
		dispatch(authOperations.register({ username, email, password }));
		navigate('/login');
	}

	function handleKlick(evt: React.MouseEvent<HTMLButtonElement>) {
		if (lastButtonTab + 5000 < Date.now()) {
			if (
				username.trim() === '' ||
				email.trim() === '' ||
				password.trim() === ''
			) {
				toast.error('All fields must be filled', {
					position: 'top-right',
					autoClose: 4000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: true,
					progress: undefined,
					theme: 'colored',
				});
			}
		}
		setLastButtonTab(Date.now());
		return;
	}

	return (
		<>
			<section className='register'>
				<button onClick={handleGoBack} className='back-button'>
					<img src={goback} alt='go-back' className='back-image' />
				</button>
				<h1 className='app-title register-title'>Register</h1>

				<form onSubmit={handleSubmit}>
					<input
						min={3}
						max={20}
						type='text'
						className='reg-input'
						value={username}
						placeholder='username'
						onChange={e => setUsername(e.target.value)}
					/>
					<input
						type='email'
						className='reg-input'
						value={email}
						placeholder='email'
						onChange={e => setEmail(e.target.value)}
					/>
					<input
						min={6}
						max={18}
						type='password'
						className='reg-input'
						value={password}
						placeholder='password'
						onChange={e => setPassword(e.target.value)}
					/>
					<button onClick={handleKlick} type='submit' className='reg-submit'>
						SIGN UP
					</button>
				</form>
				<ToastContainer limit={1} />
			</section>
		</>
	);
}

export default Register;
