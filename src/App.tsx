import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Forms from "./pages/Forms";
import Thankyou from "./pages/Thankyou";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<div className="p-4 grid gap-4">
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/forms" element={<Forms />} />
						<Route path="/finish" element={<Thankyou />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
