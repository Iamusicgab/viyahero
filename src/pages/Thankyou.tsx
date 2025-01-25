import mochi from "../assets/mochi.png";

function Thankyou() {
	return (
		<div className="flex flex-col content-center gap-4 justify-center items-center h-screen ">
			<img src={mochi} alt="Mochi" className="w-1/2" />
			<span className="font-bold text-2xl ">Thank you for ordering!</span>
			<p className="">
				Your order is currently processing by the Viyahero team. You will
				receive a confirmation message from your Facebook Messenger afterwards.
			</p>
			<a href="/">
				<button className="btn btn-primary">Go Back</button>
			</a>
		</div>
	);
}

export default Thankyou;
