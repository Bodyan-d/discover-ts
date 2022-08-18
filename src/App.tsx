import { useEffect, useState } from 'react';
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
import PageNotFound from './components/PageNotFound/PageNotFound';
import LoaderComp from './components/Loader/Loader';
import { authOperations } from './redux/auth';

function App() {
	const dispatch = useDispatch<any>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

	useEffect(() => {
		setLoading(false);
	}, []);
	return (
		<div className='App'>
			<Outlet />

			<Routes>
				{loading ? (
					<Route path='*' element={<LoaderComp />} />
				) : (
					<Route path='/' element={<PrivateOutlet />}>
						<Route element={<Selections />}>
							<Route path='/loader' element={<LoaderComp />} />
							<Route path='/' element={<Home />} />
							<Route path='search' element={<Search />} />
							<Route path='addImage' element={<AddImage />} />
							<Route path='chats' element={<Chats />} />
							<Route path='profile' element={<Profile />} />
						</Route>
					</Route>
				)}

				<Route path='welcome' element={<PublicOutlet restricted />}>
					<Route index element={<Welcome />} />
				</Route>
				<Route path='login' element={<PublicOutlet restricted />}>
					<Route index element={<Login />} />
				</Route>
				<Route path='register' element={<PublicOutlet restricted />}>
					<Route index element={<Register />} />
				</Route>
				<Route path='*' element={<PageNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
