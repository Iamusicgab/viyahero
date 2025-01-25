import mochiwave from "../assets/mochiwave.svg";
function Home() {
	return (
		<div className="flex justify-center">
			<div className="w-full max-w-screen-lg flex flex-col items-center justify-center  gap-8 p-4 ">
				<img src={mochiwave} alt="Mochi Wave" className="w-full max-w-64" />
				<h3 className="w-fit text-4xl">Mochi's waving HIII!!</h3>
				<h3 className="w-fit text-xl">Welcome to the Viyahero Online Store!</h3>
				<a href="/shop">
					<button className="btn btn-primary">Shop Now</button>
				</a>
			</div>
		</div>
	);
}

export default Home;
