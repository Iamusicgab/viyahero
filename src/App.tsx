import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Forms from "./pages/Forms";
import Thankyou from "./pages/Thankyou";
import Header from "./components/Header";
import Shop from "./pages/Shop";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<div className="p-4 grid gap-4">
				<div className="fixed top-0 left-0 right-0 z-10 flex justify-center w-full rounded-2xl">
					<div className=" p-2 w-full max-w-screen-xl">
						<Header />
					</div>
				</div>
				<div className="pt-20">
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/shop" element={<Shop />} />
							<Route path="/checkout" element={<Checkout />} />
							<Route path="/forms" element={<Forms />} />
							<Route path="/finish" element={<Thankyou />} />
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</>
	);
}

export default App;
