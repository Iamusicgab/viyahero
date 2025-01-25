import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CartProvider } from "react-use-cart";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<CartProvider>
			<App />
		</CartProvider>
	</StrictMode>
);
