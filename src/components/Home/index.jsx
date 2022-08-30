import { useState } from "react";
import "./style.css";

import Search from "../Search"
import Report from "../Report"


function Home() {

	return (
		<>
			<h2 className="text-center">Relatório de Usuários</h2>
			<Search />
			<Report />
		</>
	);
}

export default Home;
