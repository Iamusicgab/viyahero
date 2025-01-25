import icon from "../assets/icon.svg";
import cart from "../assets/cart.svg";
import { useCart } from "react-use-cart";

function Header() {
	const { totalUniqueItems } = useCart();
	return (
		<>
			<div className="flex justify-center">
				<div className="navbar bg-base-100 shadow-sm">
					<div className="flex-1">
						<img src={icon} alt="icon" className="h-12 p-1" />
					</div>
					<div className="flex-none indicator">
						<span className="indicator-item indicator-start badge badge-secondary ">
							{totalUniqueItems || 0}
						</span>
						<a href="/checkout">
							<button className="btn btn-square btn-ghost">
								<img src={cart} alt="cart" className="h-6" />
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
