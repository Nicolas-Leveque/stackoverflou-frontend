import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { selectAuth } from '../../features/auth/authSlice';
import '../../styles/LoginPage.css';

const LoginBox = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginOk, setIsLoginOk] = useState(true);

	const user = useSelector(selectAuth);
	// let history = useHistory();

	const submitLogin = (e) => {
		e.preventDefault();
		const obj = {
			email,
			password,
		};
		console.log(obj);
		console.log(user);
		setIsLoginOk(true);
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
			</form>
		</div>
	);
};

export default LoginBox;
