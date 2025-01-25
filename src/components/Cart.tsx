import { useCart } from "react-use-cart";
import CartList from "./CartList";

function Cart() {
	const { items, updateItemQuantity, removeItem, cartTotal } = useCart();
	return (
		<dialog id="my_modal_1" className="modal">
			<div className="modal-box">
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
				<div>
					<p>Total: ₱{cartTotal}</p>
				</div>
				<div className="modal-action">
					<form method="dialog">
						{/* if there is a button in form, it will close the modal */}
						<button className="btn">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}

export default Cart;
