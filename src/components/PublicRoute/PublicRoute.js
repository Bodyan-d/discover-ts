import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

const PublicOutlet = ({ restricted = false }) => {
	const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
	const shouldRedirect = isAuthenticated && restricted;
	console.log(shouldRedirect);

	return shouldRedirect ? <Navigate to='/' /> : <Outlet />;
};

export default PublicOutlet;
