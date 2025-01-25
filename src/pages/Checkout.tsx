import { useCart } from "react-use-cart";
import CartList from "../components/CartList";

function Checkout() {
	const { items, updateItemQuantity, removeItem, cartTotal } = useCart();
	return (
		<div className="grid gap-4 w-full max-w-screen-xl mx-auto">
			{items.length === 0 ? <p>Your cart is empty</p> : "Your Items"}

			{items.map((item) => {
				return (
					<CartList
						name={item.name}
						quantity={item.quantity}
						image={item.image}
						price={item.price}
						size={item.size}
						addItem={() =>
							updateItemQuantity(item.id, (item.quantity ?? 0) + 1)
						}
						removeItem={() =>
							updateItemQuantity(item.id, (item.quantity ?? 0) - 1)
						}
						removeAll={() => removeItem(item.id)}
					/>
				);
			})}
			<div className="fixed bottom-0 left-0 right-0 ">
				<div className="m-4 p-4 bg-secondary border-1 rounded-md w-full max-w-screen-xl mx-auto">
					<div>
						<p className="text-2xl font-bold">Total: ₱{cartTotal}</p>
					</div>
					<a href="/forms">
						<div className="modal-action">
							<button className="btn btn-primary">Proceed</button>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Checkout;
