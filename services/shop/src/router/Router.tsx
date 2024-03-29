import { createBrowserRouter } from "react-router-dom";
import { App } from "@/App";
import { Suspense } from "react";
import { LazyShop } from "@/pages/shop/Shop.lazy";
import { shopRoutes } from "@packages/shared/src/routes/shop";

const routes = [
	{
		path: "/shop",
		element: <App/>,
		children: [
			{
				path: shopRoutes.main,
				element: <Suspense fallback="loading"><LazyShop/></Suspense>
			},
			{
				path: shopRoutes.second,
				element: <Suspense fallback="loading">
					<div>second shop page</div>
				</Suspense>
			}
		]
	},
];

export const router = createBrowserRouter(routes);

export default routes;