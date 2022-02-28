import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import '../../styles/LoginPage.css';

const RegisterBox = () => {
	const [email, setEmail] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [nickName, setNickName] = useState('');
	const [password, setPassword] = useState('');
	const [passwordCheck, setPasswordCheck] = useState('');
	const [isRegisterOk, setIsRegisterOk] = useState(true);

	const submitRegister = (e) => {
		e.preventDefault();
		const obj = {
			email,
			firstName,
			lastName,
			nickName,
			password,
			passwordCheck,
		};
		console.log(obj);
		setIsRegisterOk(true);
	};

	return (
		<div className="inner-container">
			<div className="header">Register</div>
			<form className="box" onSubmit={submitRegister}>
				<div className="input-group">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						className="login-input"
						placeholder="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="nickname">Nom d'utilisateur</label>
					<input
						type="text"
						name="nickname"
						className="login-input"
						placeholder="Nom"
						onChange={(e) => setNickName(e.target.value)}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="firstname">Prénom</label>
					<input
						type="text"
						name="firstname"
						className="login-input"
						placeholder="Prénom"
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="lastname">Nom</label>
					<input
						type="text"
						name="lastname"
						className="login-input"
						placeholder="Nom"
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>

				<div className="input-group">
					<label htmlFor="password">Mot de passe</label>
					<input
						type="password"
						name="password"
						className="login-input"
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="password-check">Verifier Mot de passe</label>
					<input
						type="password"
						name="password-check"
						className="login-input"
						placeholder="Password"
						onChange={(e) => setPasswordCheck(e.target.value)}
					/>
				</div>
				{!isRegisterOk && (
					<p>Les mots ne correspondent pas, veuillez essayer à nouveau</p>
				)}
				<button type="submit" className="login-btn">
					Register
				</button>
			</form>
		</div>
	);
};

export default RegisterBox;
