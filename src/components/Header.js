import React from "react";
<<<<<<< HEAD
import "../style/Header.css";
=======
>>>>>>> 58b2e33f0bf80389da02a53491546ba81500e7d5

export default class Header extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	showValue(event) {
		document.getElementById("bb1").innerHTML = event.target.value;
	}

	render() {
		return (
			<div id="header">
				<input type="text" id="header-search" onChange={this.props.eventSearch} />
<<<<<<< HEAD
=======
				<br />
>>>>>>> 58b2e33f0bf80389da02a53491546ba81500e7d5
				<span>Filter by : </span>
				<select onChange={this.props.eventType}>
					<option value="all">All</option>
					<option value="0">Food</option>
					<option value="1">Drink</option>
				</select>
				<span>Sort by : </span>
				<select onChange={this.props.eventSort}>
					<option value="name">Name</option>
					<option value="stock">Stock</option>
					<option value="price">Price</option>
					<option value="updated_at">Update at</option>
					<option value="created_at">Create at</option>
				</select>
				<br />
				<br />
			</div>
		);
	}
}
