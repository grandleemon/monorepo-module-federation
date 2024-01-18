import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
	return (
		<div data-testid="app" className={styles.test}>
			<h1>app</h1>
			<Link to="/about">About</Link>
			<Link to="/shop">Shop</Link>
			<Outlet/>
		</div>
	);
};