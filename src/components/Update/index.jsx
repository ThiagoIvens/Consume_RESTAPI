import "./style.css";
import { useState } from "react";
import { api } from "../../service/api";
import { useLocation } from "react-router-dom";

function Update() {
	const [inputs, setInputs] = useState({});
	const user = JSON.parse(localStorage.getItem('user'));

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		alert(inputs.name);
		await api
			.post("/", {
				id: inputs.id,
				name: inputs.name,
				email: inputs.email,
				phone: inputs.phone,
				office: inputs.office,
				login: inputs.login,
				password: inputs.password,
				boss: inputs.boss,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="update-div">
				<div className="title-form">Atualize uma conta</div>
				<div className="fields">
					<input
						type="hidden"
						name="name"
						value={user.id}
						className="user-input"
						placeholder="Nome"
						onChange={handleChange}
					/>
					<div className="name">
						<input
							type="name"
							name="name"
							value={user.name}
							className="user-input"
							placeholder="Nome"
							onChange={handleChange}
						/>
					</div>
					<div className="email">
						<input
							type="email"
							name="email"
							value={user.email}
							className="email-input"
							placeholder="E-mail"
							onChange={handleChange}
						/>
					</div>
					<div className="phone">
						<input
							type="text"
							name="phone"
							value={user.phone}
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
							value={user.login}
							className="login-input"
							placeholder="Login"
							onChange={handleChange}
						/>
					</div>
				</div>
				<button type="submit" className="signup-button">
					Atualizar
				</button>
			</div>
		</form>
	);
}

export default Update;
