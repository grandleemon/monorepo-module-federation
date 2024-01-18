import path from "path";
import { BuildMode, BuildPaths, BuildPlatform, buildWebpack } from "@packages/build-config";
import webpack from "webpack";
import packageJson from "./package.json";

interface EnvVariables {
	mode?: BuildMode;
	port?: number;
	analyzer?: boolean;
	platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
	const paths: BuildPaths = {
		html: path.resolve(__dirname, "public", "index.html"),
		output: path.resolve(__dirname, "build"),
		entry: path.resolve(__dirname, "src", "index.tsx"),
		public: path.resolve(__dirname, "public"),
		src: path.resolve(__dirname, "src")
	};

	const config = buildWebpack({
		mode: env.mode ?? "development",
		port: env.port ?? 5557,
		paths,
		analyzer: env.analyzer,
		platform: env.platform ?? "desktop"
	});

	config.plugins.push(new webpack.container.ModuleFederationPlugin({
		name: "admin",
		filename: "remoteEntry.js",
		exposes: {
			"./Router": "./src/router/Router.tsx"
		},
		shared: {
			...packageJson.dependencies,
			react: {
				eager: true,
				requiredVersion: packageJson.dependencies["react"]
			},
			"react-router-dom": {
				eager: true,
				requiredVersion: packageJson.dependencies["react-router-dom"]
			},
			"react-dom": {
				eager: true,
				requiredVersion: packageJson.dependencies["react-dom"]
			}
		}
	}));

	return config;
};