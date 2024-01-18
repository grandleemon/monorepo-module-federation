import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import { adminRoutes } from "@packages/shared/src/routes/admin";
import { shopRoutes } from "@packages/shared/src/routes/shop";

export const App = () => {
	return (
		<div data-testid="app" className={styles.test}>
			<h1>HOST MODULE</h1>
			<Link to={adminRoutes.about}>About</Link>
			<Link to={shopRoutes.main}>Shop</Link>
			<Link to={shopRoutes.second}>shop second</Link>
			<Outlet/>
		</div>
	);
};