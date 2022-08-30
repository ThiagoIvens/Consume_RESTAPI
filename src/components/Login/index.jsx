import "./style.css";
import { useState } from "react";
import axios from "axios";
import { api } from "../../service/api";

function Login() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		await api
			.post("/login", {
				login: inputs.login,
				password: inputs.password,
			})
			.then(function (response) {
				console.log(response)
				if (response.status === 200) {
                    window.location = "/home";
				}
			})
			.catch(function (error) {
				alert(error);
                console.log(error);
			});
	};

	return (
        
		<form onSubmit={handleSubmit}>
			<div className="login-div">
				<div className="title">Login</div>
				<div className="fields">
					<div className="username">
						<input
							type="name"
							name="login"
							className="user-input"
							placeholder="Login"
						/>
					</div>
					<div className="password">
						<input
							type="password"
							name="password"
							className="pass-input"
							placeholder="Senha"
						/>
					</div>
				</div>
				<button className="signin-button">Entrar</button>
				<div className="link">
					<a href="#">Cadastre-se</a>
				</div>
			</div>
		</form>
	);
}

export default Login;
