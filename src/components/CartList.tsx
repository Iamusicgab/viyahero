
import Delete from "../assets/delete.svg";

function CartList(props: any) {
	return (
		<ul className="list bg-base-100 rounded-box shadow-md">
			<li className="list-row">
				<div>
					<img
						className="size-10 rounded-box"
						src={props.image}
						title="Image"
					/>
				</div>
				<div>
					<div>{props.name}</div>
					<div className="text-xs uppercase font-semibold opacity-60">
						Quantity: {props.quantity}
					</div>
					<div className="text-xs uppercase font-semibold opacity-60">
						{props.size ? "Size: " + props.size : ""}
					</div>
				</div>
				<div>
					<span>PHP{props.price * props.quantity}</span>
				</div>
			</li>
			<div className="grid grid-flow-col gap-4 p-4 justify-end">
				<button
					title="button"
					className="btn btn-circle"
					onClick={props.removeItem}
				>
					-
				</button>
				<button
					title="button"
					className="btn btn-circle"
					onClick={props.addItem}
				>
					+
				</button>
				<button className="btn btn-square btn-accent" onClick={props.removeAll}>
					<img src={Delete} alt="Delete" className="w-4" />
				</button>
			</div>
		</ul>
	);
}

export default CartList;
