import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import { Suspense } from "react";
import { LazyAbout } from "@/pages/about/About.lazy";
import { adminRoutes } from "@packages/shared/src/routes/admin";

const routes = [
	{
		path: "/admin",
		element: <App/>,
		children: [
			{
				path: adminRoutes.about,
				element: <Suspense fallback="loading"><LazyAbout/></Suspense>
			}
		]
	},
];

export const router = createBrowserRouter(routes);

export default routes;