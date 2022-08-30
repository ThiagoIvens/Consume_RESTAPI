import "./style.css";
import { useState } from "react";
import {api} from "../../service/api"

function Register() {
	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		await api
			.post("/", {
				name: inputs.name,
				email: inputs.email,
				phone: inputs.phone,
				office: inputs.office,
				login: inputs.login,
				password: inputs.password,
				boss: inputs.boss,
			})
			.then(function (response) {
				if (response.status == 200) {
					alert('Usuário cadastrado com sucesso!')
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="register-div">
				<div className="title-form">Crie uma conta</div>
				<div className="fields">
					<div className="name">
						<input
							type="name"
							name="name"
							className="user-input"
							placeholder="Nome"
							onChange={handleChange}
						/>
					</div>
					<div className="email">
						<input
							type="email"
							name="email"
							className="email-input"
							placeholder="E-mail"
							onChange={handleChange}
						/>
					</div>
					<div className="phone">
						<input
							type="text"
							name="phone"
							className="phone-input"
							placeholder="Telefone"
							onChange={handleChange}
						/>
					</div>
					<div className="office">
						<select name="office" onChange={handleChange}>
							<option value="Diretor">Diretor</option>
							<option value="Gerente">Gerente</option>
							<option value="Consultor">Consultor</option>
						</select>
					</div>
					{/* fazer um select para cargo com base no cargo escolhido */}
					<div className="login">
						<input
							type="login"
							name="login"
							className="login-input"
							placeholder="Login"
							onChange={handleChange}
						/>
					</div>
					<div className="password">
						<input
							type="password"
							name="password"
							className="pass-input"
							placeholder="Senha"
							onChange={handleChange}
						/>
					</div>
					<div className="password">
						<input
							type="text"
							name="boss"
							className="pass-input"
							placeholder="Boss"
							onChange={handleChange}
						/>
					</div>
				</div>
				<button type="submit" className="signup-button">
					Cadastrar
				</button>
				<div className="link">
					<a href="/login">Já tem uma conta?</a>
				</div>
			</div>
		</form>
	);
}

export default Register;
