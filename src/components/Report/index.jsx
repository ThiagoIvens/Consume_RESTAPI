import "./style.css";
import { useEffect, useState } from "react";
import { api } from "../../service/api";
import trashIcon from "../../assets/imgs/icons/trash.svg";
import editIcon from "../../assets/imgs/icons/edit.svg";
import axios from "axios";

function Report() {
	const [users, setUsers] = useState([]);
	const [userDelete, setUserDelete] = useState({});

	async function loadUsers() {
		await api
			.get()
			.then(function (response) {
				setUsers(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	async function deleteUser(user) {
		await api
			.delete("/", {
				id: user.id,
				name: user.name,
				email: user.email,
				phone: user.phone,
				office: user.office,
				login: user.login,
				password: user.password,
				boss: user.boss,
			})
			.then(function (response) {
				if (response.status === 200) {
					alert("Usuario deletado com sucesso!");
					loadUsers;
				}
			})
			.catch(function (error) {
				console.log("ERRO: ", error);
			});
	}

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<div className="report-div">
			<div className="title">Usuarios</div>
			<div className="table-responsive">
				<table>
					<thead>
						<tr>
							<th>Nome</th>
							<th>E-mail</th>
							<th>Cargo</th>
							<th>Login</th>
							<th>Superior</th>
							<th></th>
						</tr>
					</thead>
					<tbody className="overflow-y">
						{users.map((user) => (
							<tr key={user.id}>
								<td>{user.name}</td>
								<td>{user.email}</td>
								<td>{user.office}</td>
								<td>{user.login}</td>
								<td>{user.boss}</td>
								<td>
									<button
										className="no-bg p-1"
										onClick={()=>{
											localStorage.setItem('user', JSON.stringify(user));
											alert(user.name)
											window.location.href = "/update";
										}}
									>
										<img
											className="img_table"
											src={editIcon}
											alt="Icone de Edição"
										/>
									</button>
								</td>
								<td>
									<button
										className="btn btn-danger p-1"
										onClick={() => {
											deleteUser(user);
										}}
									>
										<img
											className="img_table"
											src={trashIcon}
											alt="Icone de Lixeira"
										/>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Report;
