import React from "react";
import "../style/Login.css";
import Axios from "axios";
import { Redirect, Link } from "react-router-dom";

const url = "http://localhost:9999/api/v1/login";

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			token: "Login first",
		};
		this.postLogin = this.postLogin.bind(this);
	}

	postLogin() {
		Axios.post(url, {
			username: document.getElementById("loginUsername").value,
			password: document.getElementById("loginPassword").value,
		}).then(resolve => {
			console.log(resolve);
			if (resolve.data.token) {
				localStorage.setItem("token", resolve.data.token);
				window.location.href = "/";
			} else {
				alert(resolve.data.warning);
			}
		});
	}

	render() {
		return (
			<form id="login">
				<label>Username</label>
				<input type="text" id="loginUsername"></input>
				<label>Password</label>
				<input type="password" id="loginPassword"></input>
				<button onClick={this.postLogin} type="submit">
					Login
				</button>
			</form>
		);
	}
}