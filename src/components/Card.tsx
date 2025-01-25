function Card(props: any) {
	return (
		<div className="card bg-base-100 w-full sm:max-w-84 h-full  shadow-sm">
			<figure className=" aspect-[4/3] sm:aspect-square">
				<img src={props.picture[0]} alt="Product Image" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{props.title}</h2>
				<p className="text-md font-bold">PHP{props.description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary" onClick={props.onclick}>
						View Item
					</button>
				</div>
			</div>
		</div>
	);
}

export default Card;
