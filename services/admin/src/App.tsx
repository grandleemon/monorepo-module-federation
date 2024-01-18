import styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import { deepMerge } from "@packages/shared/src/utils/deepMerge";

export const App = () => {
	deepMerge();
	return (
		<div>
			<h1>ADMIN MODULE</h1>
			<Outlet/>
		</div>
	);
};