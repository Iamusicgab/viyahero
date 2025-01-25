import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";
import { useState } from "react";

function Dialog(props: any) {
	const images = Array.isArray(props.image) ? props.image.slice(1) : []; // Ensure it's an array
	const { addItem, items } = useCart();
	const { register, handleSubmit, watch } = useForm();
	const [quantity, setQuantity] = useState<number>(1);
	const sizes = ["TS", "XS", "S", "M", "L", "XL", "2XL", "3XL"];
	let truePrice = watch("size");

	// Handle form submission
	const submitting = (data: any) => {
		let finalPrice;
		if (truePrice === "TS") {
			finalPrice = props.kidsPrice;
		} else {
			finalPrice = props.price;
		}
		const uniqueId = `${props.id}-${data.size}`;
		data = {
			...data,
			price: finalPrice,
			id: uniqueId,
			image: images[0], // First image in the array
		};
		console.log(data);
		addItem(data, quantity);

		// Close the modal after adding to cart
		const modal = document.getElementById(props.id) as HTMLDialogElement;
		modal?.close();

		console.log(items);
	};

	return (
		<dialog id={props.id} className="modal modal-bottom sm:modal-middle">
			<div className="modal-box">
				<div className="flex justify-end gap-4">
					<form method="dialog">
						{/* Close button */}
						<button className="btn btn-error text-white">×</button>
					</form>
				</div>

				<div className="py-4">
					{/* Carousel displaying only the images present in the array */}
					<div className="carousel w-full">
						{images.map((imgSrc: any, index: any) => (
							<div
								key={index}
								id={`slide${index + 1}`}
								className="carousel-item relative w-full aspect-square"
							>
								<img
									src={imgSrc}
									className="w-full"
									alt={`Slide ${index + 1}`}
								/>
								<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
									{index > 0 && (
										<a href={`#slide${index}`} className="btn btn-circle">
											❮
										</a>
									)}
									{index < images.length - 1 && (
										<a href={`#slide${index + 2}`} className="btn btn-circle">
											❯
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				<form
					className="grid gap-3"
					method="dialog"
					onSubmit={handleSubmit(submitting)}
				>
					<input type="hidden" value={props.name} {...register("name")} />
					<h3 className="font-bold text-xl">{props.name}</h3>
					<h3 className="font-bold text-xl">
						{truePrice === "TS"
							? "₱" + props.kidsPrice * quantity
							: "₱" + props.price * quantity}
					</h3>
					<div className="filter gap-y-1.5">
						<input className="btn btn-square" type="reset" value="×" />

						{sizes.map((size) => {
							return (
								<input
									className="btn"
									type="radio"
									value={size}
									aria-label={size}
									{...register("size")}
								/>
							);
						})}
					</div>
					<div className="flex justify-center gap-4">
						{quantity <= 1 ? (
							<button className="btn btn-primary" type="button" disabled>
								-
							</button>
						) : (
							<button
								className="btn btn-primary"
								type="button"
								onClick={() => setQuantity(quantity - 1)}
							>
								-
							</button>
						)}
						<input
							className="btn"
							type="number"
							value={quantity}
							{...register("quantity")}
						/>
						<button
							className="btn btn-primary"
							type="button"
							onClick={() => setQuantity(quantity + 1)}
						>
							+
						</button>
					</div>

					{truePrice ? (
						<button className="btn btn-primary" type="submit">
							Add to Cart
						</button>
					) : (
						<button className="btn btn-primary" type="submit" disabled>
							Add to Cart
						</button>
					)}
				</form>
			</div>
		</dialog>
	);
}

export default Dialog;
