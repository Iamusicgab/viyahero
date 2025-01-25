// @ts-nocheck
import Card from "../components/Card";
import Dialog from "../components/Dialog";
import Cart from "../components/Cart";

function Shop() {
	const products = [
		{
			id: 1,
			name: "Roaming for the Soul Black (Embroidered Front)",
			price: 699,
			kidsPrice: 599,
			sizes: true,
			image: [
				"https://i.imgur.com/cAkUiYf.png",
				"https://i.imgur.com/lY4Tam1.png",
				"https://i.imgur.com/wmb4SXJ.png",
				"https://scontent.fmnl9-6.fna.fbcdn.net/v/t39.30808-6/475060774_122110053914706557_430356822410862706_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEyPkpaSc7Bp3VRD8_6I-Ktddykgpkrs4R13KSCmSuzhNfRB12ocjoqxbuELPWIWb2o_rze2qoExdattz6dQ92m&_nc_ohc=o7Nf3Kq-J2UQ7kNvgGN3Rns&_nc_zt=23&_nc_ht=scontent.fmnl9-6.fna&_nc_gid=A2fXsfsDfr01opyJdl-AvMz&oh=00_AYDLEnoRq_dTT5hln-g-yAj3Fnl7zGnHnEGc_SIek68_ew&oe=679A3440",
			],
		},
		{
			id: 2,
			name: "Roaming for the Soul Purple (Embroidered Front)",
			price: 699,
			sizes: true,
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
			sizes: true,
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
			sizes: true,
			kidsPrice: 449,
			image: [
				"https://imgur.com/CGmrIzP.jpg",
				"https://i.imgur.com/4GEDW0N.png",
				"https://i.imgur.com/OhUytxR.png",
				"https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/475196740_122110053806706557_233545006567357301_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFZrSWfMFezROgqK8liecOY2Nu10wqHocDY27XTCoehwJtsYRHiNQRh3XmRxgVaLqHgJ0P14DksJzNVPDxyuJob&_nc_ohc=2k-D-sWJizgQ7kNvgE_Ryqu&_nc_zt=23&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AxYXg3U5L2_CrFyMZQmcLZP&oh=00_AYBcvXvrHQBYsCyRxB5DI7jdg3XizKj7GFtwIBNPEOEMmg&oe=679A4F7A",
			],
		},
		{
			id: 5,
			name: "Chino Roces",
			price: 499,
			sizes: true,
			kidsPrice: 449,
			image: [
				"https://imgur.com/aMP4MpP.jpg",
				"https://i.imgur.com/8s1UqgY.png",
				"https://i.imgur.com/bBB4FxT.png",
				"https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/474863766_122110053830706557_3308466671776259566_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGuTYtNXNP0hYTH_w1DJp5KaNP1ZzxHSNJo0_VnPEdI0ktQBukf27CYare1QUaDuq1HYBJpaF9rvfJzT-pVRXc5&_nc_ohc=z31Xe7Nd_JMQ7kNvgHG0XBK&_nc_zt=23&_nc_ht=scontent.fmnl9-2.fna&_nc_gid=AzLdp1kIBxu-CpTA_fjg1Pm&oh=00_AYAsPiE9oTF4hpqOwoKaiqe-GCGe1END56lbuO-0QJ4xzg&oe=679A2A04",
			],
		},
		{
			id: 6,
			name: "Tote Bag",
			price: 179,
			sizes: false,
			image: [
				"https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/474973489_122110053980706557_3026725665267256608_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGZAn-YTh_fQVKRVyvxBKlJH5S1FbjO0P8flLUVuM7Q_6IYwBG8s0-VmcbCM6EdHaFaS2EHoi7rKLhSarIJPoKZ&_nc_ohc=CUQtnVHLFagQ7kNvgEKab_p&_nc_zt=23&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=ARvc0HNzJrWP_4jzfsmQlPR&oh=00_AYCQ-lQZGYUDbli5UXm8R1RlrGeogasT8HJZ_l-c3USlsw&oe=679A558E",
			],
		},
		{
			id: 7,
			name: "Chef Mochi Sticker",
			price: 15,
			sizes: false,
			image: ["https://i.imgur.com/wu1bwUJ.jpeg"],
		},
		{
			id: 8,
			name: "Vanilla Mochi Sticker",
			price: 15,
			sizes: false,
			image: ["https://i.imgur.com/JJBM7ug.jpeg"],
		},
		{
			id: 9,
			name: "Skibidi Mochi Sticker",
			price: 15,
			sizes: false,
			image: ["https://i.imgur.com/H6eAKOd.jpeg"],
		},
		{
			id: 10,
			name: "Chill Mochi Sticker",
			price: 15,
			sizes: false,
			image: ["https://i.imgur.com/T5WfWR9.jpeg"],
		},
		{
			id: 11,
			name: "Japanese Bike Mochi Sticker",
			price: 15,
			sizes: false,
			image: ["https://i.imgur.com/pAijTFy.jpeg"],
		},
		{
			id: 12,
			name: "Don Bosco Makati Jeep Sticker",
			price: 20,
			sizes: false,
			image: ["https://i.imgur.com/RFlXWq3.jpeg"],
		},
		{
			id: 13,
			name: "Viyahero Arcade Keychain",
			price: 149,
			sizes: false,
			image: [
				"https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/474812176_122110054100706557_4752451549696209734_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG9_g46dU4nOnonZe9vXRBMNoahRz8terI2hqFHPy16sqIHtTYLLopzP-7WTMlt98kuR-VGJuWv4fRKZ2XUO_3w&_nc_ohc=cbGY6BHrkpcQ7kNvgFGJqqo&_nc_zt=23&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AeyCA9lCBP4cvezUhVYwMs8&oh=00_AYBA4ZMRF-nq2dqkfJ6N8u-xVdIde-VvoO2F0KwAKY5hGA&oe=679AA730",
			],
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
								sizes={product.sizes}
							/>
						</>
					);
				})}
			</div>
			<Cart />
		</div>
	);
}

export default Shop;
