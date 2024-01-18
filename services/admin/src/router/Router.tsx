import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import { Suspense } from "react";
import { LazyAbout } from "@/pages/about/About.lazy";

const routes = [
	{
		path: "/",
		element: <App/>,
		children: [
			{
				path: "/about",
				element: <Suspense fallback="loading"><LazyAbout/></Suspense>
			}
		]
	},
];

export const router = createBrowserRouter(routes);

export default routes;