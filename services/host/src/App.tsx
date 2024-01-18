import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
	return (
		<div data-testid="app" className={styles.test}>
			<h1>HOST MODULE</h1>
			<Link to="/about">About</Link>
			<Link to="/shop/main">Shop</Link>
			<Link to="/shop/second">shop second</Link>
			<Outlet/>
		</div>
	);
};