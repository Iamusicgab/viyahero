// @ts-nocheck
import Card from "../components/Card";
import Dialog from "../components/Dialog";
import Cart from "../components/Cart";

function Home() {
	const products = [
		{
			id: 1,
			name: "Roaming for the Soul (Black)",
			price: 699,
			kidsPrice: 599,
			image: [
				"https://i.imgur.com/cAkUiYf.png",
				"https://i.imgur.com/lY4Tam1.png",
				"https://i.imgur.com/wmb4SXJ.png",
				"https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/475060774_122110053914706557_430356822410862706_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEyPkpaSc7Bp3VRD8_6I-Ktddykgpkrs4R13KSCmSuzhNfRB12ocjoqxbuELPWIWb2o_rze2qoExdattz6dQ92m&_nc_ohc=o7Nf3Kq-J2UQ7kNvgGN3Rns&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=A2fXsfsDfr01opyJdl-AvMz&oh=00_AYDLEnoRq_dTT5hln-g-yAj3Fnl7zGnHnEGc_SIek68_ew&oe=679A3440",
			],
		},
		{
			id: 2,
			name: "Roaming for the Soul (Purple)",
			price: 699,
			kidsPrice: 599,
			image: [
				"https://imgur.com/wHbV8hm.jpg",
				"https://i.imgur.com/bzHpCCr.png",
				"https://i.imgur.com/lj1XYu3.png",
				"https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/474985940_122110053950706557_6821982868699232185_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEWZ4iSJoRVYofcKHNMQYBOMsAsP_eKd2AywCw_94p3YPtZQv-GbYvwxavL62uWQDlV2f1T1E844sf9f1iwTpCk&_nc_ohc=XRHtPkgg3EUQ7kNvgHX7GEo&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=Ag4VPPh0GXxCbX_NpBbYNmJ&oh=00_AYDAvlX1NWu_Gb0DcvkBkXcG11e5D9llijXcDhBS5Wls1Q&oe=679A4AA5",
			],
		},
		{
			id: 3,
			name: "Japanese Mochi",
			price: 499,
			kidsPrice: 449,
			image: [
				"https://imgur.com/vsbGoLG.jpg",
				"https://i.imgur.com/Vjjr8nA.png",
				"https://i.imgur.com/J0Kw1jV.png",
				"https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/474972411_122110053866706557_4844777788213074527_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHLdWqDfg_t8i-7q6LMPrr65O7t1IdIhzXk7u3Uh0iHNeKxstr5FXTPHsFSz3J5nMBbkbhcXOcwTSA87bbGYiJV&_nc_ohc=mF4xuxjVrccQ7kNvgFeYgc4&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=A7S1U_0VT_8XijezkLNafgn&oh=00_AYA2NvEzBDtrJzKu3IjCglnk3msJp8CfGmKhygdFWwaHUg&oe=679A49E5",
			],
		},
		{
			id: 4,
			name: "Italian Bosco",
			price: 499,
			kidsPrice: 449,
			image: ["https://imgur.com/CGmrIzP.jpg"],
		},
		{
			id: 5,
			name: "Chino Roces",
			price: 499,
			kidsPrice: 449,
			image: "https://imgur.com/aMP4MpP.jpg",
		},
	];
	return (
		<div className="flex justify-center items-centermin-h-screen">
			<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				{products.map((product) => {
					return (
						<>
							<Card
								key={product.id}
								picture={product.image}
								title={product.name}
								description={product.price}
								onclick={() =>
									document.getElementById(String(product.id))?.showModal()
								}
							/>
							<Dialog
								name={product.name}
								id={product.id}
								image={product.image}
								price={product.price}
								kidsPrice={product.kidsPrice}
							/>
						</>
					);
				})}
			</div>
			<Cart />
		</div>
	);
}

export default Home;
