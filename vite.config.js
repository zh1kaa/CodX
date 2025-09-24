import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
	plugins: [react()],
	server: {
		allowedHosts: [
			"de9a-46-251-204-85.ngrok-free.app",
			"tennille-woolstapling-unludicrously.ngrok-free.dev",
		],
	},
});
