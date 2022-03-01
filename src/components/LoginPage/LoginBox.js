import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onLogin } from '../../features/auth/authSlice';
import { useLoginMutation } from '../../services/auth';
import '../../styles/LoginPage.css';

const LoginBox = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginOk, setIsLoginOk] = useState(true);

	const [login, { isLoading }] = useLoginMutation();
	const dispatch = useDispatch();

	const submitLogin = async (e) => {
		e.preventDefault();
		const loginObject = {
			email,
			password,
		};
		login(loginObject)
			.unwrap()
			.then((credentials) => dispatch(onLogin(credentials)));
	};

	return (
		<div className="inner-container">
			<div className="header">Login</div>
			<form className="box" onSubmit={submitLogin}>
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						onChange={(e) => setEmail(e.target.value)}
						name="email"
						className="login-input"
						placeholder="Email"
					/>
				</div>
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						className="login-input"
						placeholder="Password"
					/>
				</div>
				{!isLoginOk && (
					<p>Erreur de connexion, veuiller vérifier vos identifiants </p>
				)}
				<button type="submit" value="Submit" className="login-btn">
					Login
				</button>
				{isLoading && <p>Login en cours</p>}
			</form>
		</div>
	);
};

export default LoginBox;
