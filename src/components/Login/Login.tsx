import React, { useState } from 'react';
import goback from '../../icons/goback.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authOperations } from '../../redux/auth';

function Login() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [lastButtonTab, setLastButtonTab] = useState<any>(Date.now() - 15000);
	const dispatch = useDispatch<any>();

	function handleGoBack(evt: React.MouseEvent<HTMLButtonElement>) {
		window.history.back();
	}

	function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
		evt.preventDefault();

		if (email.trim() === '' || password.trim() === '') {
			return;
		}
		dispatch(authOperations.logIn({ email, password }));
		navigate('/');
	}

	function handleKlick(evt: React.MouseEvent<HTMLButtonElement>) {
		if (lastButtonTab + 5000 < Date.now()) {
			if (email.trim() === '' || password.trim() === '') {
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
			<section className='login'>
				<button onClick={handleGoBack} className='back-button'>
					<img src={goback} alt='go-back' className='back-image' />
				</button>
				<h1 className='app-title login-title'>Login</h1>

				<form onSubmit={handleSubmit}>
					<input
						onChange={e => setEmail(e.target.value)}
						type='email'
						className='log-input'
						placeholder='email'
						value={email}
					/>
					<input
						onChange={e => setPassword(e.target.value)}
						type='password'
						className='log-input'
						placeholder='password'
						value={password}
					/>
					<button onClick={handleKlick} type='submit' className='log-submit'>
						LOGIN
					</button>
				</form>
				<ToastContainer limit={1} />
			</section>
		</>
	);
}

export default Login;
