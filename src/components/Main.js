import React from "react";
import MainCard from "./MainCard";
import Cart from "./Cart";
import Header from "./Header";
import Axios from "axios";
import "../style/Main.css";

const productUrl = "http://localhost:9999/api/v1/products";

export default class Main extends React.Component {
	constructor() {
		super();
		this.state = {
			productList: [],
			cart: [],
			name: "?",
			type: "",
			sort: "",
		};
		this.filterName = this.filterName.bind(this);
		this.filterType = this.filterType.bind(this);
		this.filterSort = this.filterSort.bind(this);
	}

	getProduct() {
		Axios.get(productUrl).then(resolve => {
			this.setState({
				productList: resolve.data,
			});
		});
	}

	filterName(event) {
		const name = "?name=" + event.target.value;
		Axios.get(productUrl + name + this.state.type + this.state.sort).then(resolve => {
			this.setState({
				productList: resolve.data,
				name: name,
			});
		});
	}

	filterType(event) {
		const type = event.target.value == "all" ? "" : "&type=" + event.target.value;
		Axios.get(productUrl + this.state.name + type + this.state.sort).then(resolve => {
			console.log(resolve.data);
			this.setState({
				productList: resolve.data,
				type: type,
			});
		});
	}

	filterSort(event) {
		const sort = "&sort=" + event.target.value;
		Axios.get(productUrl + this.state.name + this.state.type + sort).then(resolve => {
			this.setState({
				productList: resolve.data,
				sort: sort,
			});
		});
	}

	componentDidMount() {
		this.getProduct();
	}

	render() {
		const products = [];
		if (this.state.productList.length > 0) {
			this.state.productList.map((data, x) => {
				products.push(<MainCard key={x} product={data} productId={data.id} />);
			});
		}
		return (
			<div id="main">
				<Header eventSearch={this.filterName} eventType={this.filterType} eventSort={this.filterSort} />
				<div id="product-con">{products}</div>
				<Cart list={this.state.cart} />
			</div>
		);
	}
}
