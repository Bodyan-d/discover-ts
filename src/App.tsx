import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Outlet } from 'react-router-dom';
// import { AppDispatch } from './redux/store';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import AddImage from './components/AddImage/AddImage';
import Chats from './components/Chats/Chats';
import Profile from './components/Profile/Profile';
import Selections from './components/Selections/Selections';
import Welcome from './components/Welcome/Welcome';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateOutlet from './components/PrivateRoute/PrivateRoute';
import PublicOutlet from './components/PublicRoute/PublicRoute';
import { authOperations } from './redux/auth';
import { useSelector } from 'react-redux';

function App() {
	const state = useSelector<any>(state => state?.auth?.user);
	console.log(state);

	const dispatch = useDispatch<any>();
	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);
	return (
		<div className='App'>
			<Outlet />

			<Routes>
				<Route path='/' element={<PrivateOutlet />}>
					<Route element={<Selections />}>
						<Route path='/' element={<Home />} />
						<Route path='search' element={<Search />} />
						<Route path='addImage' element={<AddImage />} />
						<Route path='chats' element={<Chats />} />
						<Route path='profile' element={<Profile />} />
					</Route>
				</Route>
				<Route path='/' element={<PublicOutlet restricted />}>
					<Route path='welcome' element={<Welcome />} />
					<Route path='register' element={<Register />} />
					<Route path='login' element={<Login />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
