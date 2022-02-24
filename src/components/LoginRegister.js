import { useSelector } from 'react-redux';
import { selectAuth } from '../features/auth/authSlice';

const LoginRegister = () => {
	const user = useSelector(selectAuth);

	return (
		<div>
			<p>{`${user.email}`}</p>
		</div>
	);
};

export default LoginRegister;
