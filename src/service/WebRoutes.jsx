import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Update from "../components/Update";

function WebRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Login />} path="/" />
				<Route element={<Home />} path="/home" exact />
				<Route element={<Register />} path="/register" />
				<Route name="update" element={<Update />} path="/update" />
			</Routes>
		</BrowserRouter>
	);
}

export default WebRoutes;
