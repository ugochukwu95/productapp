import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, NavLink, Switch, Redirect } from "react-router-dom";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";

export class Selector extends Component {
	/*constructor(props) {
		super(props);
		this.state = {
			selection: React.Children.toArray(props.children)[0].props.name
		}
	}
	
	setSelection = (ev) => {
		ev.persist();
		this.setState({ selection: ev.target.name});
	}*/
	renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{ msg }</h5>

	render() {
		return <Router>
			<div className="container-fluid">
				<div className="row">
					<div className="col-2">
						<NavLink className="m-2 btn btn-block btn-primary" activeClassName="active" 
							to="/products">Products</NavLink>
						<NavLink className="m-2 btn btn-block btn-primary" activeClassName="active" 
							to="/suppliers">Suppliers</NavLink>
					</div>
					<div className="col">
						<Switch>
							<Route path="/products" component={ ProductDisplay} />
							<Route path="/suppliers" component={ SupplierDisplay } />
							<Redirect to="/products" />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	}
}