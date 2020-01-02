import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
// import { ProductDisplay } from "./ProductDisplay";
// import { SupplierDisplay } from "./SupplierDisplay";
// import { RouteInfo } from "./RouteInfo";
import { ToggleLink } from "./ToggleLink";
/*import { RoutedDisplay } from "./store/RoutedDisplay";
import {IsolatedTable} from "./IsolatedTable";
import { IsolatedEditor } from "./IsolatedEditor";
import { RequestError } from "./webservice/RequestError";*/
import { GraphQLTable } from "./graphql/GraphQLTable";
import { PRODUCTS, SUPPLIERS } from "./store/dataTypes";
import { GraphQLEditor } from "./graphql/GraphQLEditor";

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
	//renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{ msg }</h5>

	render() {
		/*const routes = React.Children.map(this.props.children, child => ({
			component: child,
			name: child.props.name,
			url: `/${child.props.name.toLowerCase()}`,
			datatype: child.props.datatype
		}));*/
		return <Router>
			<div className="container-fluid">
				<div className="row">
					<div className="col-2">
						<ToggleLink to="/products">Products</ToggleLink>
						<ToggleLink to="/suppliers">Suppliers</ToggleLink>
					</div>
					<div className="col">
						<Switch>
							<Route path="/products" exact={true} component={ GraphQLTable(PRODUCTS) } />
							<Route path="/suppliers" exact={true} component={ GraphQLTable(SUPPLIERS) } />
							<Route path="/:dataType/edit/:id" component= { GraphQLEditor() } />
							<Redirect to="/products" />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	}
}